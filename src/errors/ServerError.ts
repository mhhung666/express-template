import CustomError from './CustomError';

export default class ServerError extends CustomError{
    constructor(msg: string, statusCode = 500) {
        super(msg, statusCode, 'ServerError');
        if (Error.captureStackTrace) {
            CustomError.captureStackTrace(this, ServerError)
        }
    }
  }