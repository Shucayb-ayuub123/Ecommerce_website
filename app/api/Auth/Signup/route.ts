import { pool } from "@/lib/db";
import bcrypt from "bcrypt";
export async function POST(req: Request) {
  const { username, Email, password } = await req.json();

  if (!username || !Email || !password) {
    return Response.json(
      { message: "All feilds are require" },
      { status: 400 },
    );
  }

  const [rows] = await pool.execute("SELECT * FROM users WHERE username = ?", [
    username,
  ]);

  if (rows.length > 0) {
    return Response.json(
      { message: "Username is already taken" },
      { status: 400 },
    );
  }

  const hashpassword = await bcrypt.hash(password, 10);

  await pool.execute(
    "INSERT INTO users (username , Email , password) VALUES (?,?,?)",
    [username, Email, hashpassword],
  );
  return Response.json({ message: "inserted" });
}
