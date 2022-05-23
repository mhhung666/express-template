import CustomError from "../errors/CustomError";
import SqlError from "../errors/SqlError";
import UserError from "../errors/UserError";
import { Request, Response, NextFunction } from "express";

export default async function (
  error: SqlError,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (error.name === "UserError") {
    console.log("=============User ERROR==============");
    console.log(error.message);
    console.log("======================================");
    const customErr = error;
    res.status(customErr.statusCode | 403).json({
      // errerMsg: customErr.message,
      errerMsg: customErr.message,
      errorCode: customErr.statusCode | 403,
    });
  } else if (error.name === "ServerError") {
    console.log("=============SERVER ERROR=============");
    console.log(error);
    console.log("======================================");
    res.status(500).json({
      errerMsg: "Server error",
      errorCode: 500,
    });
  } else if (error.name === "SqlError") {
    console.log("=============SQL ERROR==============");
    console.log(error.message);
    console.log("-------------sql msg---------------");
    console.log(error.sqlError);
    console.log("====================================");
    res.status(500).json({
      errerMsg: "Server error",
      errorCode: 500,
    });
  } else {
    //一般error name 為 Error
    console.log("==========Unkown SERVER ERROR===========");
    console.log(error);
    console.log("======================================");
    res.status(500).json({
      errerMsg: "Server error",
      errorCode: 500,
    });
  }

  return null;
}
