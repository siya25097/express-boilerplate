const loc= require('..models/ware');
const location_add= async(req,res)=>{
    try{
        const new_location = new loc({
            location_code:req.body.location_code,
            parent_location_code:req.body.parent_location_code
        })
        if(!parent_location_code){
            res.status(404).send('Parent_location is null');
        }
        res.status(201).json({success:true,data:new_location});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports={location_add}