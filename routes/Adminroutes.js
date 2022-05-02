const express = require("express");
const router = express.Router();
const adminmodel = require("../models/Adminmodel");
const Studentmodel = require("../models/Studentmodel.js");

router.get("/", (req, res) => {
   Studentmodel.find({},(err,result)=>{
      if(!err){
          if(result){
            res.status(200).send({
                result
             });
             console.log(result);
          }else{
            res.status(403).send({
                msg : "No any Student Data Found!"
             });
          }
      }else{
        res.status(400).send({
            msg : "Something went wrong !Pls Try Agian Later"
         });
      }
   });
});

router.post("/adminlogin", (req, res) => {
    console.log("req come here")
    // console.log(req)
    adminmodel.findOne({Email:req.body.email, Password:req.body.password}, (err, result) => {
        console.log(req.body)
        if (result) {
            // res.status(200).send({
            //     ID : result._id,
            //     msg : "Valid Username And Password"
            // });
            res.json({
                Id:result._id,
                msg:"valid usrname and password"
            })
            console.log("Login Sucessfully!");
        }else{
            // res.status(401).send({
            //     msg : "Invalid Username Or Password"
            // });
            res.json({
                Id:null,
                msg:"Invalid username or password"
            })
            console.log("Invalid username or password");
        }
      });
});

module.exports = router;