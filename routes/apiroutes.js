//const router = require("express").Router();
const {db} = require("../models");
const router = require("express").Router();

router.get("/api/workouts/range", (req, res) => {
  console.log("api workouts range")
  console.log(req);
  console.log("api workouts range")
   db.aggregate([
     {
       $addFields: {
        totalDuration: { $sum: "$exercises.duration"},
        totalWeight: { $sum: "$exercises.weight"},
        totalDistance: { $sum: "$exercises.distance"}
       }
     }
   ]).sort({_id:-1} ).limit(7)
     .then((dbWorkout) => {
       
      res.json(dbWorkout);
     })
     .catch((err) => {
       res.status(400).json(err);
     });
 });
  
router.get("/api/workouts", (req, res) => {
  db.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration"},
        totalWeight: { $sum: "$exercises.weight"},
        totalDistance: { $sum: "$exercises.distance"}
      }
    }
  ])
  .then((dbWorkout) => {
    res.json(dbWorkout);
  })
  .catch((err) => {
    res.status(400).jso(err);
  });
});
  
router.post("/api/workouts", ({ body }, res) => {
  db.create(body)
    .then( (dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
  
router.put("/api/workouts/:id", (req, res) => {
  db.findByIdAndUpdate(req.params.id,
    { $push: { exercises: req.body }})
    .then((dbWorkout) => {
      console.log(dbWorkout);
      return res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
