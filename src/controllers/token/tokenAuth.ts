import {Request, Response, NextFunction} from 'express';
import {verifyToken} from './token';
import UserError from '../../errors/UserError';
import {User_tb} from '../../mydb';

export default async(req:Request, res:Response, next:NextFunction): Promise<void> => {

    const authorization = <string>req.headers.authorization
    
    if(authorization === undefined){
        next(new UserError("Token Auth failed", 401));
        return null;
    }

    const token = authorization.replace(/^Bearer /, '');

    const tokenInfo = verifyToken(token);
    
    const userId = tokenInfo['userId'];

    // console.log({userId: userId});

    res['userId'] = userId;
    
    const user = await User_tb.findOne({
        where:{
            userId: userId
        }
    })

    if(!user){
        return next (new UserError("Token Cannot get user", 400))
    }

    
    next();
}