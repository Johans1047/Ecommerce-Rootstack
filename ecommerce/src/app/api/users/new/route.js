import connect from "@/lib/db";
import {v4 as uuid4} from "uuid";
import bcrypt from "bcrypt";

export async function POST(request) {
    const data = await request.formData();

    const fullName = data.get("full-name");
    const email = data.get("email");
    const pass = data.get("pass");
    const repeatPass = data.get("repeat-pass");

    console.log(`${fullName} || ${email} || ${pass} || ${repeatPass}`);

    if(fullName.trim() == "") {
        return new Response("¡El nombre no puede estar vacío!", {status: 400});
    }
    if(email.trim() == "") {
        return new Response("¡El correo electrónico no puede estar vacío!", {status: 400});
    }
    if(pass.trim() == "") {
        return new Response("¡La contraseña no puede estar vacía!", {status: 400});
    }
    if(repeatPass.trim() == "") {
        return new Response("¡Necesitamos confirmar tu contraseña!", {status: 400});
    }

    if(pass != repeatPass) {
        return new Response("¡Las contraseñas no coinciden!", {status: 400}); 
    }

    try {
        const db = await connect();

        const existingUser = await db.all("SELECT 1 FROM USERS WHERE email = ?", [email]);

        if(existingUser.length > 0 ) {
            return new Response("¡Ya existe un usuario con este correo electrónico!", {status: 400}) 
        }

        const num = uuid4();
        const rounds = 10;
        const hash = await bcrypt.hash(pass, rounds);

        await db.run(
            "INSERT INTO USERS (num, full_name, email, password) VALUES (?, ?, ?, ?)",
            [num, fullName, email, hash]
        );

        return new Response("¡Usuario creado con éxito!", {status: 201});

    } catch(error) {
        return new Response("Ocurrió un error al intentar crear el usuario. " + error, {status: 500});
    }
}