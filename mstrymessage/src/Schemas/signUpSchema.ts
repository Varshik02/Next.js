import {z} from 'zod'

export const userNameValidation = z
    .string()
    .min(2, 'username must be atleast 2 characters')
    .max(2, 'username must be not more then 20 characters')   
    .regex(/^[a-zA-Z0-9_]+$/,'username must not contain special character')

export const signUpSchema = z.object({
    userName: userNameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: 'password must me atleast 6 characters'})
})

