const {z} = require('zod');

//// create object schema
const contactformSchema = z.object({
    username: z
        .string({required_error: "Name is required"})
        .trim()
        .min(3, {message: 'Name must be at least 3 characters'})
        .max(255, {message: 'Name must not exceed 255 characters'}),

    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: 'Invalid email address'})
        .min(3, {message: 'Email must be at least 3 characters'})
        .max(255, {message: 'Email must not exceed 255 characters'}),

    message: z
        .string({required_error: "Message is required"})
        .trim()
        .min(1, {message: 'Message is empty'}),

});

module.exports = contactformSchema;