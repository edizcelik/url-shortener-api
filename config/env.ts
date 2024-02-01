import dotenv from "dotenv";

dotenv.config();

const env = {
  get(name: string) {
    return process.env[name];
  },
};

export default env;
