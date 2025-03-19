import express from "express";
import axios from "axios";

var app = express();
var port = 3000;

app.use(express.static("public"));

app.get('/', async (req, res) =>{
    const result = await new axios.get("https://random.dog/woof.json");
    try{
        // console.log(result.data.url);
    res.render("index.ejs", {image: result.data.url});
    }
    catch(error){
        res.status(500);
        console.error("error is: " + error);
    }
})

app.listen(port, console.log("server has started on port " + port));
