const Animals = require('../models/Animals');

// Route to get the Animal Characteristics
module.exports=(app)=>{
    app.get('/api/getAttributes', (req,res)=>{
        const animal = req.query.animal;
            res.send(Animals[animal])   
    })
}