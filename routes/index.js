const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

router.get("./home",(req,res,next)=>{
    console.log("home accessed")
    console.log(req.user)
    res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token
      })
})

module.exports = router;