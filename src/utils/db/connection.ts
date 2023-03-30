import { config } from "dotenv";
config();

import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

const databaseConfig = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

const connection = connect(databaseConfig);

const db = drizzle(connection);

export default db;
