import { Request, Response, NextFunction } from "express";
import mydb from "../../mydb";
import UserError from "../../errors/UserError";
import generateGift from "../../services/manager/generateGift";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { desc, chest, hero, skill, item, startTime, expireTime } = req.body;

  if (!desc) {
    return next(new UserError("Description is unfilled"));
  }

  let date = new Date();
  let _chest, array_hero, array_skill, array_item, _startTime, _expireTime;

  !chest ? (_chest = -1) : (_chest = chest);
  !hero ? (array_hero = []) : (array_hero = JSON.parse(hero));
  !skill ? (array_skill = []) : (array_skill = JSON.parse(skill));
  !item ? (array_item = []) : (array_item = JSON.parse(item));
  !startTime ? (_startTime = new Date()) : (_startTime = startTime);
  !expireTime
    ? (_expireTime = date.setDate(date.getDate() + 30))
    : (_expireTime = expireTime);

  try {
    await mydb.transaction(async (t) => {
      const r = await generateGift(
        t,
        desc,
        _chest,
        array_hero,
        array_skill,
        array_item,
        _startTime,
        _expireTime
      );

      res.json({
        info: "success",
        data: r,
      });
    });
  } catch (error) {
    next(error);
  }
}
