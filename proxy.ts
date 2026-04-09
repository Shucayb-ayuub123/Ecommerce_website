import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const runtime = "nodejs";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("token")?.value;

  if (pathname === "/Login") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const role = decoded.role

    // if (role == "Admin" && pathname !== "/Admin") {
    //   return NextResponse.redirect(new URL("/Admin", req.url));
    // }
  
      if (role === "Admin") {
      return NextResponse.next();
    }

    if (role == "guest" && pathname !== "/guest") {
      return NextResponse.redirect(new URL("/guest", req.url));
    }

    return NextResponse.next();

  } catch (error) {
    console.log("JWT ERROR:", error);
    return NextResponse.redirect(new URL("/Login", req.url));
  }
}

export const config = {
  matcher: ["/Admin", "/guest" , "/"],
};