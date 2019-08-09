const Animals = require('../models/Animals');

module.exports=(app)=>{
    app.get('/api/getAttributes', (req,res)=>{
        const animal = req.query.animal;
            res.send(Animals[animal])   
    })
}