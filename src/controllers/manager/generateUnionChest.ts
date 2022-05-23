import { Request, Response, NextFunction } from "express";
import mydb from "../../mydb";

import generateUnionChest from "../../services/manager/generateUnionChest";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  // 創造公會寶箱
  const { num, length } = req.body;

  const data = await generateUnionChest(num, length);

  res.send({
    info: "success",
    data: data,
  });
}
