import dotenv from "dotenv";
import { generateJwt, verifyJwt } from "./helpers/jwt.js";

dotenv.config();

const token = generateJwt();

console.log(token);

const payload = verifyJwt(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1Mjg0dTkwZnVpOXcwZXVmOTB1cjlpZTlmaXdmIiwibmFtZSI6IlNoZWVyYXoiLCJpYXQiOjE2ODg5OTQ3NTJ9.36PklUc5qxWMo6E3n7LNh8E8oSFZhzRempqBQ38zg9o"
);

console.log(payload);
