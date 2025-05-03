// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT)

import { z } from 'zod'

const ageSchema = z.number().min(18).max(100).int()
const userAge = 19
// const parseUserAge = ageSchema.parse(userAge)
const { data, error, success } = ageSchema.safeParse(userAge)
console.log(error)
console.log(data)
console.log(success)