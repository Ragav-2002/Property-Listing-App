const mongoose = require('mongoose')

const dbConnect = async() => {
    const url = process.env.DB_URL || 'mongodb+srv://sripalasettyraghavendra2002:ragvirat2002@cluster0.8ogwzzg.mongodb.net/'
    try{
        mongoose.connect(url)
        console.log('connected to db')
    }catch(e){
        console.log('error connecting to db')
    }
}

module.exports = dbConnect