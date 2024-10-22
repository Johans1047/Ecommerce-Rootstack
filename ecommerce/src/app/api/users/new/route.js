import connect from "@/lib/db";
import {v4 as uuid4} from "uuid";
import bcrypt from "bcrypt";

export async function POST(request) {
    const body = await request.text();
    const params = new URLSearchParams(body);

    const fullName = params.get("fullname");
    const email = params.get("email");
    const pass = params.get("pass");
    const repeatPass = params.get("repeat-pass");

    if(fullName.trim() == "") {
        return new Response("Name cannot be empty!", {status: 400});
    }
    if(email.trim() == "") {
        return new Response("Email cannot be empty!", {status: 400});
    }
    if(pass.trim() == "") {
        return new Response("Password cannot be empty!", {status: 400});
    }
    if(repeatPass.trim() == "") {
        return new Response("We need to double check your password!", {status: 400});
    }

    if(pass != repeatPass) {
        return new Response("Passwords do not match!", {status: 400}); 
    }

    try {
        const db = await connect();

        const existingUser = await db.all("SELECT 1 FROM USERS WHERE email = ?", [email]);

        if(existingUser.length > 0 ) {
            return new Response("A user already exists with this email!", {status: 400}) 
        }

        const num = uuid4();
        const rounds = 10;
        const hash = await bcrypt.hash(pass, rounds);

        await db.run(
            "INSERT INTO USERS (num, full_name, email, password) VALUES (?, ?, ?, ?)",
            [num, fullName, email, hash]
        );

        return new Response("User created successfully!", {status: 201});

    } catch(error) {
        return new Response("An error ocurred while trying to create user." + error, {status: 500});
    }
}