export type leadProps = {
  estateType: string
  region: string
  district: string
  name: string
  phone: string
  email: string
}

export const postLead = async (lead: leadProps) => {
  try {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
    })
    return await response.json()
  } catch (error) {
    return { error: 'network_error' }
  }
}
