const checkName =(req, res, next)=>{
    const {name} = req.body;
    let falsyData = {success: false, payload: "Must include name field"};
    if(!name) {
        res.status(422).json(falsyData)
    }
    next();
}

const capitalizedName =(name)=>{
    let array = name.toLowerCase().split(" ");
    for(let i=0; i<array.length; i++) {
        if(array[i].length > 2) {
            array[i] = array[i][0].toUpperCase() + array[i].slice(1)
        } 
    }
    return array.join(" ");
}

module.exports = {
    checkName,
    capitalizedName
}