import { NextResponse } from 'next/server'
import prisma from '@/prisma/prisma'

export async function POST(req: Request) {
  const lead = await req.json()

  try {
    await prisma.leads.create({
      data: {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        estateType: lead.estateType,
        region: lead.region,
        district: lead.district,
      },
    })
  } catch (error) {
    return NextResponse.json({ message: 'prisma_error' })
  }

  return NextResponse.json({ message: 'success' })
}
