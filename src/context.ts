import { PrismaClient } from '@prisma/client';
import { TourServicesRegistry } from './schema/tour/services/services.registry';
import { CategoryServicesRegistry } from './schema/category/services/services.registry';

const prisma = new PrismaClient();
const tourServices = new TourServicesRegistry(prisma);
const categoryServices = new CategoryServicesRegistry(prisma);

export type GraphQLContext = {
  prisma: PrismaClient;
  tourServices: TourServicesRegistry;
  categoryServices: CategoryServicesRegistry;
};

export async function createContext(): Promise<GraphQLContext> {
  return { prisma, tourServices, categoryServices };
}
