import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
    
    const query = ` SELECT * FROM  heroes `;
    
    MySQL.executeQuery(query,(err:any,heroes:Object[])=>{
     
        if(err){
            res.status(400).json({
                ok:false,
                error:err
            });
        }else{
            res.json({
                ok:true,
                heroes
            });
        }
  
    });

});

router.get('/heroes/:id', (req: Request, res: Response) => {
    
    const id = req.params.id;
    
    // Escape the query value
    const escapedId = MySQL.instance.cnn.escape(id); 

    const query = ` SELECT * FROM  heroes     where id = ${ escapedId }`;
    
    MySQL.executeQuery(query,(err:any,heroe:Object[])=>{
     
        if(err){
            res.status(400).json({
                ok:false,
                error:err
            });
        }else{
            res.json({
                ok:true,
                heroe: heroe[0]
            });
        }
  
    });

});


// We can export the router this way or writing export before the declaration
export default router;