import bcrypt from 'bcrypt';
import CustomError from '../errors/CustomError';

export async function passwordToHash(password: string): Promise<string>{
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err: Error, hash: string) => {
            if(err){
                reject(new CustomError('The passwordToHash error', 500));
            }else{
                resolve(hash);
            }
        })
    })
}

export async function compareHash(password: string, passwordByDB: string): Promise<boolean>{
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordByDB, (err: Error, isSame: boolean) => {
            if(err){
                reject(err);
            }else{
                resolve(isSame);
            }
        })
    })
}
