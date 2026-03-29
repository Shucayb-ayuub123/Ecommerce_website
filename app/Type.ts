import z, { email, string } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

export const schema = z.object({
  username: z.string().min(3 , "Username must contain at least 3  character ").optional(),
  Email: z.string().email(),
  password:z.string().min(8 , "Password must contain at least 8 character").optional()
})


export type items = {
   
}