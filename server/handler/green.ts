import { Request, Response, NextFunction } from 'express';
import GreenController from '../controller/green';

const greenController = new GreenController();

class GreenHttpHandler {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { username, password } = req.body;
            const result = await greenController.login({ username, password });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default GreenHttpHandler;