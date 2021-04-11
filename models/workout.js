
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day:{
        type:Date,
        default: Date.now
    },
    exercises:[{
    
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
         },
         reps:{
             type:Number,
         },
         sets:{
             type:Number,
         },
         distance:{
             type:Number,
         }
         //reps, sets
    
    }]
  });

  
var Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;