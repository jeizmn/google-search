//import database
const db=require('./db')

//get all products from the database
const allCloths = () => {
    //to fetch all products from mongodb
    return db.Cloth.find().then((result)=>{
          

            if(result){
                console.log("printing");
                return{
                    status:true,
                    statusCode:200,
                    Product:result
                    
                }
            }
            else{
                return{
                status:false,
                statusCode:402,
                message:'Product not found'
                }
            }
        }
    )
}

module.exports={
    allCloths
}