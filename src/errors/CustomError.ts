export default class CustomError extends Error {
  statusCode: number;
  date: Date;
  name: string

  constructor(msg: string, statusCode: number, name = 'CustomError') {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(msg)
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }
    this.name = name
    // Custom debugging information
    this.statusCode = statusCode
    this.date = new Date()
  }
}
