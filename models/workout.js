
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day:{
        type:Date,
        default: Date.now
    },
    excercises:[{
    
        type:{
            type:String,
            trim:true,
            required:"Enter an excercise"
         },
         name:{
             type:String,
             trim:true,
             required:"Enter an excercise name"
         },
         duration:{
             type:Number,
             required: "Enter the duration"
         },
         weight:{
             type:Number,
             required: "How heavy?"
         },
         reps:{
             type:Number,
             required: "How many reps?"
         },
         sets:{
             type:Number,
             required: "How many sets?"
         }
         //reps, sets
    
    }]
  });