import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const proxy = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JW_SECRET!);

    if (decoded.role == "admin") {
      return NextResponse.redirect(new URL("/Admin", req.url));
    }

    if (decoded.role == "guest") {
      return NextResponse.redirect(new URL("/guest", req.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }
};

export const config = {
  matcher: ["/", "/Admin", "/guest"],
};
