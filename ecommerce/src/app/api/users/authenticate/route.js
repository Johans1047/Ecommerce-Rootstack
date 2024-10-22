import connect from "@/lib/db";
import { setCookie } from "@/lib/cookie";
import bcrypt from "bcrypt";

export async function POST(request) {
    const data = await request.formData();

    const email = data.get("email");
    const pass = data.get("pass");

    if(!email) {
        return new Response("Se requiere un correo!", {status: 400});
    }

    if(!pass) {
        return new Response("Se requiere una contraseña!", {status: 400});
    }

    try {
        const db = await connect();
        const user = await db.get("SELECT * FROM USERS WHERE EMAIL = ?", [email]);

        if(!user) {
            return new Response("No se ha encontrado ninguna cuenta para este correo'" + email + "'.", {status: 401});
        }

        const areCredentialsValid = await bcrypt.compare(pass, user.password);

        if(!areCredentialsValid) {
            return new Response("La contraseña es incorrecta.", {status: 401});
        }

        return Response.json({
            message: "Usuario autenticado exitosamente!",
            user: {
                id: user.num,
                email: user.email,
                full_name: user.full_name || email.split('@')[0]
            }
        }, {
            status: 200,
            headers: {
                "Set-Cookie": setCookie("jssessid", user.num, 86400*30, "/"),
            }
        });

    } catch(error) {
        return new Response("Ha ocurrido un error al intentar autenticar al usuario. " + error, {status: 500});
    }
}