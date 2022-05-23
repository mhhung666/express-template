import CustomError from './CustomError';

export default class SqlError extends CustomError{
    sqlError: Error;
  
    constructor(msg: string, statusCode = 500, sqlError: Error) {
        super(msg, statusCode, 'SqlError');
        this.sqlError = sqlError;
        if (Error.captureStackTrace) {
            CustomError.captureStackTrace(this, SqlError)
        }
    }
  }
  