import { pool } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

dotenv.config();
export async function POST(req: Request) {
  const { Email, password } = await req.json();

  if (!Email || !password) {
    return Response.json({ message: "All feild is require" }, { status: 400 });
  }

  const [rows]: any = await pool.execute(
    "SELECT * FROM users where Email = ?",
    [Email],
  );

  const user = rows[0];

  if (!user) {
      return Response.json({message : "User not found"} , {status : 404})
  }
  const Checkpass = await bcrypt.compare(password, user.password);

  if (!Checkpass) {
    return Response.json({ message: "Password is incorrect" }, { status: 401 });
  }

  const token = jwt.sign(
    { id: user.id, name: user.username , role: user.Role },
    process.env.JWT_SECRET!,
    { expiresIn: "10d" },
  );

  const cookie = serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 10 * 24 * 60 * 60, // 10 days in seconds
    path: "/",
  });

  return NextResponse.json(
    {
      message: "Login successful",
      user: { id: user.id, username: user.username , role: user.Role  },
    },
    { status: 200, headers: { "Set-Cookie": cookie } },
  );
}
