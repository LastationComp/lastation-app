import {v4 as uuidv4} from 'uuid';

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';


export async function GET() {

  return Response.json({tes: 'oke'})
}


export async function POST(req: Request) {
  const prisma = new PrismaClient()
  const result = await req.json()
  result.id = uuidv4()
  const success = await prisma.user.create({
    data: result
  })

  if (success) return Response.json(result)

  return Response.json({
    message: 'Internal error'
  }, {
    status: 400
  })
}
