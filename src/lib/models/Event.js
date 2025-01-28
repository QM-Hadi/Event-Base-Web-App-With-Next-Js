
import mongoose from 'mongoose';
const { Schema } = mongoose;


const eventShema = new Schema({
    title:string,
    description:string,
    startTime:string,
    endTime:string,
    startDate:string,
    endDate:string,
    location:{
        lat:Number,
        long:Number,
    },
    adress:string,
    createdBy:{type :mongoose.Types.ObjectId, ref:"Users"},
    going:[{type :mongoose.Types.ObjectId, ref:"Users"}],

})

export const EventModal=mongoose.model('Events', eventShema);