import { Request, Response, NextFunction } from "express";
import mydb from "../../mydb";
import UserError from "../../errors/UserError";
import example from "../../services/example/example";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await mydb.transaction(async (t) => {
      const r = await example();

      res.json({
        info: "success",
        data: r,
      });
    });
  } catch (error) {
    next(error);
  }
}
