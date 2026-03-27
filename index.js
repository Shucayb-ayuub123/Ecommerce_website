import bcrypt from "bcrypt";

const value = "78332077";

const hash = await bcrypt.hash(value, 10);
console.log(hash);

const isMatch = await bcrypt.compare("78332077", hash);
console.log(isMatch); // true