import { Request, Response, Router } from 'express';

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        "email": "adobeclip2003@gmail.com",
        "current_datetime": new Date().toISOString(),
        "github_url": "https://github.com/JamezSpace/jamez-backend-stage-0.git"
    })
})

export default router;