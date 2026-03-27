import { NextResponse , NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { pool } from "@/lib/db";


export  async function POST(req: Request) {
  const { Email } = await req.json();

  if (!Email) {
    return NextResponse.json({ message: "Email is require" }, { status: 400 });
  }

  try {
    const [user]: any = await pool.execute(
      "SELECT * FROM users WHERE Email = ?",
      [Email],
    );

    if (!user[0]) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const secret = process.env.JWT_SECRET || "secret";

    const token = jwt.sign({ id: user[0].id }, secret, { expiresIn: "15m" });

    const resetLink = `http://localhost:3000/reset-password/${token}`

    const transporter = nodemailer.createTransport({
        host : "smtp.gmail.com",
        port : 587,
        secure : false,
        auth : {
            user: process.env.EMAIL_USER,
            pass : process.env.EMAIL_PASS
        },

    });


    await transporter.sendMail({
        from : process.env.EMAIL_USER,
        to:Email,
        subject : "Reset your password",
        html : `<p>Click the link to reset your password:</p> 
                 <a href="${resetLink}">${resetLink}</a>`
    })

    return  NextResponse.json({message : "Reset link sent your email "} , {status : 200})
  } catch (error) {
    return NextResponse.json({message : "Something went wrong"} , {status : 500})
  }
}
