export const validatePhone = (phone: string): boolean => {
  return !!String(phone).match(/^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/)
}
