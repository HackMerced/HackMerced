import { environment_dev } from "./environment.dev";
import { environment_prod } from "./environment.prod";

export const environment = process.env.NODE_ENV === "production" ? environment_prod : environment_dev;
