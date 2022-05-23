import mydb from "../mydb";
import awardListDaily from "../public/data/awardListDaily.json";
import awardListMonthly from "../public/data/awardListMonthly.json";
import insertAwardList from "../services/insert/insertAwardList";

(async function () {
  await mydb.transaction(async (t) => {
    await insertAwardList(t, awardListDaily, awardListMonthly);
  });
})();
