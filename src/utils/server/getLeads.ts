import prisma from '@/prisma/prisma'
import { leadProps } from '@/utils/clientApiCalls/postLead'

export const getLeads = async (): Promise<leadProps[] | []> => {
  let leads
  try {
    leads = await prisma.leads.findMany()
  } catch (e) {
    return []
  }

  if (leads.length === 0) {
    return []
  }

  return leads.map(lead => {
    return {
      id: lead.id,
      estateType: lead.estateType,
      region: lead.region,
      district: lead.district,
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
    }
  })
}
