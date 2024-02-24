import jwt, { JwtPayload } from "jsonwebtoken";

const AUTH = process.env.AUTH_JWT || "WKKW";
const FORGET = process.env.FORGET_JWT || "WKKW";

export const GenerateToken = async (user: any) => {
  const token = await jwt.sign({ userId: user._id }, AUTH, {
    expiresIn: "29d",
  });
  return token;
};

export const VerifyToken = async (token: any): Promise<JwtPayload> => {
  const verified = await jwt.verify(token, AUTH) as JwtPayload;
  return verified;
};

export const GenerateForgetToken = async (user: any, email: string) => {
  const token = await jwt.sign({ userId: user._id }, `${FORGET}${email}`, {
    expiresIn: "5h",
  });
  return token;
};

export const VerifyForgetToken = async (token: string, email: string): Promise<JwtPayload | any>  => {
  const verified = await jwt.verify(token, `${FORGET}${email}`);
  return verified;
};
