import { PrismaClient } from "@prisma/client";
import { DefaultSerializer } from "v8";

const prisma = new PrismaClient();

export default prisma;
