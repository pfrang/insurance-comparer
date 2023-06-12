import { match } from "assert"

export const norwegianDateChecker = (str: string) => {
  return match(str, /^(\d{2})\.(\d{2})\.(\d{4})$/)
}
