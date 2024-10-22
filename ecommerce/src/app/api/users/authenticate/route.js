import connect from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request) {
    const data = await request.formData();

    const email = data.get("email");
    const pass = data.get("pass");

    if(!email) {
        return new Response("Email is required!", {status: 400});
    }

    if(!pass) {
        return new Response("Password is required!", {status: 400});
    }

    try {
        const db = await connect();
        const user = await db.get("SELECT * FROM USERS WHERE EMAIL = ?", [email]);

        if(!user) {
            return new Response("No account was found for email '" + email + "'.", {status: 401});
        }

        const areCredentialsValid = await bcrypt.compare(pass, user.password);

        if(!areCredentialsValid) {
            return new Response("Password is incorrect.", {status: 401});
        }

        return new Response("", {status: 200});

    } catch(error) {
        return new Response("An error ocurred while trying to authenticate user. " + error, {status: 500});
    }
}