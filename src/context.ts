import { PrismaClient } from '@prisma/client';
import { ServicesRegistry } from './schema/tour/services/services.registry';

const prisma = new PrismaClient();
const tourServices = new ServicesRegistry(prisma);

export type GraphQLContext = {
  prisma: PrismaClient;
  tourServices: ServicesRegistry;
};

export async function createContext(): Promise<GraphQLContext> {
  return { prisma, tourServices };
}
