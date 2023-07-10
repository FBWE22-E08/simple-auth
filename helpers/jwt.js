import jsonwebtoken from "jsonwebtoken";

export function generateJwt() {
  return jsonwebtoken.sign(
    {
      sub: "u284u90fui9w0euf90ur9ie9fiwf",
      name: "Sheeraz",
    },
    process.env.JWT_SECRET_KEY
  );
}

export function verifyJwt(token) {
  return jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
}
