const Record = require('../models/recordModel')
const _ = require('lodash')
const recordCon = {}

recordCon.create = async(req, res)=>{
    const body = _.pick(req.body, ['name', 'description','location', 'bedrooms', 'bathrooms', 'status', 'price'])
    try{
        const record = new Record(body)
        await record.save()
        res.json({message: 'record created successfully', record})
    }catch(e){
        res.status(500).res('something went wrong')
    }
}

recordCon.update = async(req, res)=>{
    const id = req.params.id
    const body = req.body
    try{
        const record = await Record.findByIdAndUpdate(id, body, {new: true})
        res.json({message: 'record updated successfully', record})
    }catch(e){
        res.status(500).res('something went wrong')
    }
}

recordCon.delete = async(req, res)=>{
    const id = req.params.id
    try{
        await Record.findByIdAndDelete(id)
        res.json('record deleted successfully')
    }catch(e){
        res.status(500).res('something went wrong')
    }
}

recordCon.getRecords = async(req, res)=>{
    try{
        const records = await Record.find()
        res.json(records)
    }catch(e){
        res.status(500).res('something went wrong')
    }
}

module.exports = recordCon