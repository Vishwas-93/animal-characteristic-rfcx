const Animals = require('../models/Animals');

// Route to get the Animal suggestions. Ties to data in the models.
module.exports=(app)=>{
    app.get('/api/getAnimals', (req,res)=>{          
        const word = (req.query.word).toLowerCase();
        const suggestions_arr = [];
        for(var i=0; i<Object.keys(Animals).length; i++){
            if((Object.keys(Animals)[i]).toLowerCase().includes(word)){
               suggestions_arr.push(Object.keys(Animals)[i]); 
            }
        }
        res.send(suggestions_arr);
    })
}