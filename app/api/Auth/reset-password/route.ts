import { pool } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function POST(req: Request) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return Response.json({ message: "Invalid Request" }, { status: 400 });
    }

    const secret = process.env.JW_SECRET || "secret";

    const decoded: any = jwt.verify(token, secret);

    const hashPass = await bcrypt.hash(password, 10);

    await pool.execute("UPDATE users set password = ? where id = ?", [
      hashPass,
      decoded.id,
    ]);

    return Response.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    Response.json({ message: "Invalid or expired token" }, { status: 500 });
  }
}
