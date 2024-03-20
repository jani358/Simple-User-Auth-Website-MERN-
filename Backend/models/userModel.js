const mongoose = require('mongoose')

// Define the schema for the User model
const userSchema = new mongoose.Schema({ 
    email: { type: String, required: true }, 
    username: { type: String, required: true, unique: true }, // User's username, required and must be unique
    password: { type: String, required: true } 
})

// Create the User model using the schema
const User = mongoose.model('User', userSchema)

// Export the User model to use in other files
module.exports = User
