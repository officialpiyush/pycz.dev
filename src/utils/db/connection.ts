require("dotenv").config();

import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

const connection = connect(config);

const db = drizzle(connection);

export default db;
