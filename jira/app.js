const express = require("express");

require("./dbcomponents/connection");
const cors = require("cors");
const bodyParser = require("body-parser")

const Pro = require("./dbcomponents/Pr_Schema");

const app = express();



const port = process.env.PORT || 8000;

//we  will handle post request-----------------------------------------------------

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/Pr_Schema", async (req, res) => {
    try {
        console.log("Post Request Success");
        // const data=JSON.parse(req.body);
        const AddingProjectRecord = new Pro(req.body);
        console.log(req.body);
        const insertProject = await AddingProjectRecord.save();
        res.status(201).send(insertProject);

    } catch (e) {
        res.status(400).send(e);
    }

})
//-------------------------------------------------------------------------------------

// we will handle get request-----------------
app.get("/Pr_Schema", async (req, res) => {
    try {

        const getProject = await Pro.find({});
        res.send(getProject);
    } catch (e) {
        res.status(400).send(e);
    }

})
//-----------------------------------------------------------------------------
//we will handle get request for individuals----------------------------
app.get("/Pr_Schema/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const GetById = await Pro.findById(_id);
        res.send(GetById);
    } catch (e) {
        res.status(400).send(e);
    }
})
//--------------------------------------------------------------------
app.get("/", async (req, res) => {
    res.send("Hello NativeByte");
})

app.listen(port, () => {
    console.log('Connection is live at port no. 8000');
})