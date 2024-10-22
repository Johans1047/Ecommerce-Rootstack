import connect from "@/lib/db";
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = cookies();
    const sessionId = cookieStore.get('jssessid');

    if (!sessionId) {
        return new Response('No session found', { status: 401 });
    }

    try {
        const db = await connect();
        const user = await db.get(
            "SELECT num, email, full_name FROM USERS WHERE num = ?", 
            [sessionId.value]
        );

        if (!user) {
            return new Response('Invalid session', { status: 401 });
        }

        return Response.json({
            id: user.num,
            email: user.email,
            full_name: user.full_name
        });

    } catch (error) {
        return new Response('Error checking authentication: ' + error, { status: 500 });
    }
}