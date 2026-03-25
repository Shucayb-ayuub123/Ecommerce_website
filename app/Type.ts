import z, { email, string } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

export const schema = z.object({
  username : string().min(3 , "Username must contain at least 3  character ").optional(),
  Email: string().email(),
  password:string().min(8 , "Password must contain at least 8 character")
})