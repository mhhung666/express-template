import CustomError from './CustomError';

export default class UserError extends CustomError{
    constructor(msg: string, statusCode = 403) {
        super(msg, statusCode, 'UserError');
        if (Error.captureStackTrace) {
            CustomError.captureStackTrace(this, UserError)
        }
    }
}
  