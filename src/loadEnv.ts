import dotenv from "dotenv";
dotenv.config();

const { SERVER_PORT, SQL } = process.env;

let version = "1.0.0";

if (
  !(
    SQL === "prod" ||
    SQL === "prod-inner" ||
    SQL === "stage" ||
    SQL === "stage-inner" ||
    SQL === "test" ||
    SQL === "development" ||
    SQL === "localhost"
  )
) {
  throw new Error(`The env 'SQL' is incorrect`);
}

export default {
  SQL: SQL,
  SERVER_PORT: <number>(SERVER_PORT || 3000),
  version: version,
};
