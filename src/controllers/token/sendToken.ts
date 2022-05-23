import { Request, Response, NextFunction } from 'express';
import {createToken} from './token';

export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = res['userId'];
    if(!userId){
        next(new Error('Can not find the userId'))
    }
    const token = createToken(userId) 
    res.send({
        token: token,
        userId: userId
    });
}