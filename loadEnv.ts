import dotenv from "dotenv";
dotenv.config();

const { SERVER_PORT, SQL } = process.env;

// if (
//   !(
//     SQL == "production" ||
//     SQL == "preparation" ||
//     SQL == "test" ||
//     SQL == "development" ||
//     SQL == "localhost" ||
//     SQL == "stage-inner" ||
//     SQL == "prod-inner"
//   )
// ) {
//   throw new Error(`The env 'SQL' is incorrect`);
// }

export default {
  //SQL: SQL,
  SERVER_PORT: <number>(SERVER_PORT || 3000),
};
