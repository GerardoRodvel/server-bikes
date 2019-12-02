import {Request, Response} from 'express';
import db from '../database';
import { text } from 'body-parser';

class BikesController{

    public  async list(req: Request, res: Response){
      const bikes = await db.query('SELECT * FROM bikes');
      res.json(bikes);
    } 

    public async getOne(req: Request, res: Response): Promise<any> {
     const {id}  = req.params;
     const bikes = await db.query('SELECT * FROM bikes WHERE id = ?',[id]);
     if(bikes.length >0){
         return res.json(bikes[0]);
        }
        res.status(404).json({text:"el juego no existe"});
     } 

    public create(req: Request, res: Response){
        db.query('INSERT INTO bikes set ?',[req.body]);
        res.json({message: 'Bike creada'});
    }

    public async update(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await db.query('UPDATE bikes set ? WHERE id = ?',[req.body, id]);
        res.json({message: 'Bike actualizada'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM bikes WHERE id = ?',[id]);
        res.json({message:'Bike eliminada'});
    }
   
}

const bikesController = new BikesController();
export default bikesController;