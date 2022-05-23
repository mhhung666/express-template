import { Request, Response, NextFunction } from "express";
import preRegister from "../../services/insert/preRegister";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  // Do Pre Register Script
  // 事前登入 序號上傳 檔案要放置 ../../public/data/preRegister.json
  await preRegister();

  res.send({ info: "success" });
}
