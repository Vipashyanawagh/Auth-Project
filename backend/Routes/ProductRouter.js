const router  = require("express").Router();
console.log("ProductRouter Loaded");
const ensureAuthenticated = require("../Middlewares/AuthProduct");


router.get("/", ensureAuthenticated,(req , res) => {
    console.log("......logged in  user details.......", req.user);
    res.status(200).json([
        {
            name : "mobile",
            price : 50000,
        },
        {
            name : "laptop",
            price : 100000,
        },
        {
            name : "tablet",
            price : 30000,
        }



    ])
});

module.exports = router;