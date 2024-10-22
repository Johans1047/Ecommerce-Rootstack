import connect from "@/lib/db";

export async function POST(request) {
    const data = await request.formData();


    const userNum = data.get("user-num");
    const destNum = data.get("dest-num");
    const dailyFee = Number.parseFloat(data.get("daily-fee"));
    const destination = data.get("destination");
    const start = data.get("start");
    const end = data.get("end");
    const qty = Number.parseInt(data.get("qty"));

    let totalCost;
    let days;

    if (!userNum || typeof userNum !== "string" || userNum.trim() === "") {
        return new Response("El número de usuario es obligatorio.", { status: 401 });
    }

    if (!userNum || typeof destNum !== "string" || destNum.trim() === "") {
        return new Response("El número de destino es obligatorio.", { status: 402 });
    }

    if (!destination || typeof destination !== "string" || destination.trim() === "") {
        return new Response("El destino es obligatorio.", { status: 403 });
    }

    if (!start || typeof start !== "string" || start.trim() === "") {
        return new Response("La fecha de inicio es obligatoria.", { status: 404 });
    }

    if (!end || typeof end !== "string" || end.trim() === "") {
        return new Response("La fecha de fin es obligatoria.", { status: 405 });
    }

    const qtyNumber = Number(qty);
    if (!qty || isNaN(qtyNumber) || qtyNumber <= 0) {
        return new Response("La cantidad debe ser un número válido mayor que cero.", { status: 406 });
    }

    const startDate = new Date(start);
    const endDate = new Date(end);
    if (isNaN(startDate) || isNaN(endDate)) {
        return new Response("Las fechas deben ser válidas.", { status: 407 });
    }
    
    if (startDate >= endDate) {
        return new Response("La fecha de inicio debe ser anterior a la fecha de fin.", { status: 408 });
    }

    try {
        const db = await connect();

        days = Math.floor((new Date(end) - new Date(start)) / (86400 * 1000));
        totalCost = dailyFee * days * qty;
        
        await db.run(
            "INSERT INTO user_destinations (user_num, destination_num, total_cost, number_of_days, number_of_people) VALUES (?, ?, ?, ?, ?)",
            [userNum, destNum, totalCost, days, qty]
        );

        return new Response("Datos guardados correctamente.", { status: 201 });
    } catch (error) {
        return new Response("Ha ocurrido un error al guardar los datos: " + error.message, { status: 500 });
    }
}