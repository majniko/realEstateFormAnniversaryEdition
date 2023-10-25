import { NextResponse } from 'next/server'
import prisma from '@/prisma/prisma'
import { leadProps } from '@/utils/clientApiCalls/postLead'
import { validateEmail } from '@/utils/validation/validateEmail'
import { validatePhone } from '@/utils/validation/validatePhone'
import { validateNotEmpty } from '@/utils/validation/validateNotEmpty'

export async function POST(req: Request) {
  const lead: leadProps = await req.json()

  if (!lead.name || !lead.email || !lead.phone || !lead.estateType || !lead.region || !lead.district) {
    return NextResponse.json({ message: 'missing_data' })
  }

  let isValid = true

  console.log(lead)

  if (!validateEmail(lead.email)) isValid = false
  if (!validatePhone(lead.phone)) isValid = false
  if (!validateNotEmpty(lead.name)) isValid = false
  if (!validateNotEmpty(lead.district)) isValid = false
  if (!validateNotEmpty(lead.region)) isValid = false
  if (!validateNotEmpty(lead.estateType)) isValid = false

  if (!isValid) return NextResponse.json({ message: 'invalid_data' })

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
