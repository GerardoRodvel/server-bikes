import {Router} from 'express';
import bikesController  from '../controllers/bikesController';

class BikesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/',bikesController.list);
        this.router.get('/:id',bikesController.getOne);
        this.router.post('/',bikesController.create);
        this.router.delete('/:id',bikesController.delete);
        this.router.put('/:id',bikesController.update);
    }
}

const bikesRoutes = new BikesRoutes();
export default bikesRoutes.router;