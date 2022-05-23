import jwt from 'jsonwebtoken';
import token from './token.config.json';

const SECRET = token.user.SECRET

// eslint-disable-next-line @typescript-eslint/ban-types
export function createToken(userId: string): string | object{
    return jwt.sign({
            'userId': userId.toString(),
            'type' : 'USER'
        }, SECRET, 
    )
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function verifyToken(token: string): string | object{
    return jwt.verify(token, SECRET)
}