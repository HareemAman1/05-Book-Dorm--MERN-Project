const {z} = require('zod');

//// create object schema
const loginSchema = z.object({
    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: 'Invalid email address'})
        .min(8, {message: 'Email must be at least 8 characters'})
        .max(255, {message: 'Email must not exceed 255 characters'}),

    password: z
        .string({required_error: "Password is required"})
        .trim()
        .min(8, {message: 'Password must be at least 8 characters'})
        .max(255, {message: 'Password must not exceed 255 characters'}),
});

module.exports = loginSchema;