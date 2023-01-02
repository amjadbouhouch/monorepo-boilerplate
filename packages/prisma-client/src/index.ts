import * as prisma from '@prisma/client';
export const dbClient = new prisma.PrismaClient();

export type UserModel = prisma.User;
