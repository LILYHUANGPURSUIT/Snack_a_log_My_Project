const { getAllSnacks,
        getOneSnack,
        deleteSnack,
        updateSnack,
        createSnack} = require("../queries/snacks");
const confrimHealth  = require("../confirmHealth");
const { capitalizedName, checkName} = require("../validation.js")
const express = require("express");
const snacks = express.Router();

snacks.get("/", async(req, res) => {
    try {
        const allSnacks = await getAllSnacks();
        let truthyData = {success: true, payload: allSnacks};
        let falsyData = {success: false, payload: "Server error"};
        if(allSnacks[0]) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (err) {
        console.log(err);
    }
});

snacks.get("/:id", async (req, res) =>{
    const {id} = req.params;
    try {
        const oneSnack = await getOneSnack(id);
        let truthyData = {success: true, payload: oneSnack};
        let falsyData = {success: false, payload: "Snack not found"};
        if(oneSnack.id) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (err) {
        console.log(err);
    }
});

snacks.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const deletedSnack = await deleteSnack(id);
        let truthyData = {success: true, payload: deletedSnack};
        let falsyData = {success: false, payload: "Snack not found"};
        if(deletedSnack.id) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(err);
    }
});

snacks.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const updatedSnack = await updateSnack(id, body);
        let truthyData = {success: true, payload: updatedSnack};
        let falsyData = {success: false, payload: "Snack not found"};
        if(updatedSnack.id) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(err);
    }
});

snacks.post("/", checkName, async (req, res) => {
    let {body} = req;
    body.is_healthy = confrimHealth(body);
    body.name = capitalizedName(body.name);
    if(!body.image){
        body.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    }
    try {
        const createdSnack = await createSnack(body);
        let truthyData = {success: true, payload: createdSnack};
        let falsyData = {success: false, payload: "Snack creation error"};
        if(createdSnack.id) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(err);
    }
})

module.exports = snacks;