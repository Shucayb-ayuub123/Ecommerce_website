import mysql from "mysql2/promise";

export const DB = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Zx9!Qa7#Lm2@Vp6$Rt",
  database: "nextjs_images",
});

try {
    const connection = await DB.getConnection()
    console.log("Is it connected")
    connection.release()
} catch (error) {
    console.log("Is it not connected")
    console.log(error)
}