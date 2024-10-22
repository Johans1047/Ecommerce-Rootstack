import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export default async function connect() {

    return open({
        filename: path.resolve(process.cwd(), "data", "database.db"),
        driver: sqlite3.Database
    });

}