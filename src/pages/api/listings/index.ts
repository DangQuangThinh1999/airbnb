import prisma from "@/libs/prismadb";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    userId,
    category,
    title,
    description,
    roomCount,
    imageSrc,
    guestCount,
    location,
    price,
    bathroomCount,
  } = req.body;
  // Object.keys(body).forEach((value) => {
  //   if (!body[value]) return NextResponse.error();
  // });
  const listing = await prisma.listing.create({
    data: {
      category,
      title,
      description,
      roomCount,
      imageSrc,
      guestCount,
      locationValue: location,
      price,
      userId,
      bathroomCount,
    },
  });
  return res.json(listing);
}
