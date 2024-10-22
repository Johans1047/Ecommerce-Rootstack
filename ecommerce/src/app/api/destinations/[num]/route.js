import connect from "@/lib/db";

export async function GET(request, {params}) {
    const {num} = await params;


    try {
        const db = await connect();

        const destination = await db.get("SELECT * from destinations WHERE num = ?", [num]);

        if(!destination) {
            return new Response(num + " no fue encontrado.", {status: 400});
        }

        console.log(destination);

        return new Response(JSON.stringify(destination), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        return new Response("Ha ocurrido un error al extraer el destino " + error, {status: 500});
    }

}
