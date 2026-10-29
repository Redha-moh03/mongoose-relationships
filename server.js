// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require('morgan')
const User = require('./models/User')
const Category = require('./models/Category')
const Review = require('./models/Review')
const Listing = require('./models/Listing')



// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride('_method'))
app.use(morgan('dev'))


async function conntectToDB() { //connection to the database
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}


conntectToDB()
async function createCat (){
    const Cat = await Category.create({
        categoryName: 'hbdvshvbrl'
    })
}
/* createCat() */
async function testRelationships() {
     const newListing = await Listing.create({
        streetAdress : 'manama',
        city : 'manama',
        size : 'big',
        price : 2,
        owner : '6ae32974abd3d5527f22c369',
        category : '6ae32b224920ab92ab8fe1e3'
     })
}
/* testRelationships() */
async function seeAllListing() {
    const allListing = await Listing.find().populate('owner category')
    console.log(allListing)
}

seeAllListing()











// Routes go here
















app.listen(3000, () => {
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
