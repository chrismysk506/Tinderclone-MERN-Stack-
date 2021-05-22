import mongoose from 'mongoose'

const cardschema=mongoose.Schema({
    name:String,
    url:String,
})

export default mongoose.model('cards',cardschema);