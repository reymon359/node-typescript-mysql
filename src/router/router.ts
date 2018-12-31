import { Router, Request, Response } from 'express';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
    
    res.json({
        ok:true,
        message:'All ok!'
    });
});

router.get('/heroes/:id', (req: Request, res: Response) => {
    
    const id = req.params.id;

    res.json({
        ok:true,
        message:'All ok!',
        id: id
    });
});


// We can export the router this way or writing export before the declaration
export default router;