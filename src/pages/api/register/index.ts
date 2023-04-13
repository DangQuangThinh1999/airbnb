import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import bcrypt from "bcrypt";
// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const result = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });
  return res.status(201).json(result);
}
