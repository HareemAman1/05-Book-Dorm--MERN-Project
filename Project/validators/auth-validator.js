const {z} = require('zod');

// const loginSchema = z.object
//// create object schema
const signupSchema = z.object({
    username: z
        .string({required_error: "Name is required"})
        .trim()
        .min(3, {message: 'Name must be at least 3 characters'})
        .max(255, {message: 'Name must not exceed 255 characters'}),

    phone: z
        .string({required_error: "Phone is required"})
        .trim()
        .min(10, {message: 'Phone must be at least 10 characters'})
        .max(20, {message: 'Name must not exceed 20 characters'}),

    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: 'Invalid email address'})
        .min(3, {message: 'Email must be at least 3 characters'})
        .max(255, {message: 'Email must not exceed 255 characters'}),

    password: z
        .string({required_error: "Password is required"})
        .trim()
        .min(8, {message: 'Name must be at least 8 characters'})
        .max(255, {message: 'Name must not exceed 255 characters'}),
});

module.exports = signupSchema;

// OR 

// const {z} = require('zod');

// const loginSchema = z.object({
//         email: z
//         .string({required_error: "Email is required"})
//         .trim()
//         .email({message: 'Invalid email address'})
//         .min(3, {message: 'Email must be at least 3 characters'})
//         .max(255, {message: 'Email must not exceed 255 characters'}),

//     password: z
//         .string({required_error: "Password is required"})
//         .trim()
//         .min(8, {message: 'Name must be at least 8 characters'})
//         .max(255, {message: 'Name must not exceed 255 characters'}),

// });

// const signupSchema = loginSchema.extend({
//     username: z
//         .string({required_error: "Name is required"})
//         .trim()
//         .min(3, {message: 'Name must be at least 3 characters'})
//         .max(255, {message: 'Name must not exceed 255 characters'}),

//     phone: z
//         .string({required_error: "Phone is required"})
//         .trim()
//         .min(10, {message: 'Phone must be at least 10 characters'})
//         .max(20, {message: 'Name must not exceed 20 characters'}),
// });

// module.exports = {signupSchema, loginSchema};