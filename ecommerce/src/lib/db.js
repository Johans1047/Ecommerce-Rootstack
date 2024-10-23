import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export default async function connect() {
    const name = path.resolve(process.cwd(), "src", "data", "db.sqlite3");
    return open({
        filename: name,
        driver: sqlite3.Database,
        mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
    });
}
