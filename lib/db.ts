import mysql from "mysql2/promise";

export const pool = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Zx9!Qa7#Lm2@Vp6$Rt",
  database: "ShopDB",
});

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("✅ Successfully connected to Database");
        connection.release();
    } catch (err) {
        console.log("❌ Failed to connect to Database", err);
    }
}

testConnection();
