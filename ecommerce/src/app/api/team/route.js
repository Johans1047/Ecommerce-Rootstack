import connect from "@/lib/db";

export async function GET(request) {
    try {
        const db = await connect();
        const team = await db.all("SELECT * FROM team");
        return new Response(JSON.stringify(team), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch(error) {
        return new Response("Ha ocurrido un error al intentar autenticar al usuario. " + error, {status: 500});
    }
}