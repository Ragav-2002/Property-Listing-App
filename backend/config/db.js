const mongoose = require('mongoose')

const dbConnect = async() => {
    const name = process.env.DB_NAME
    const url = process.env.DB_URL
    try{
        mongoose.connect(`${url}/${name}`)
        console.log(`connected to db ${name}`)
    }catch(e){
        console.log(`error connecting to db ${name}`)
    }
}

module.exports = dbConnect