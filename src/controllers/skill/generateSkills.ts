import { Request, Response, NextFunction } from "express";
import mydb from "../../mydb";
import checkUserExist from "../../services/user/checkUserIdExist";
import generateSkills from "../../services/skill/generateSkills";
import UserError from "../../errors/UserError";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { userId, skillIndex, skillQuality, quantity } = req.body;
  let _quantity;

  if (!skillIndex) {
    return next(new UserError("The skillIndex is unfilled", 403));
  }
  if (!skillQuality) {
    return next(new UserError("The skillQuality is unfilled", 403));
  }

  if (!quantity) {
    _quantity = 1;
  } else {
    _quantity = quantity;
  }

  try {
    await mydb.transaction(async (t) => {
      if (userId) {
        await checkUserExist(t, userId);
      }
      const r = await generateSkills(
        t,
        skillIndex,
        skillQuality,
        quantity,
        userId
      );

      res.json({
        info: "success",
        datas: r,
      });
    });
  } catch (error) {
    next(error);
  }
}
