import { PrismaClient } from '@prisma/client';
import { TourServicesRegistry } from './schema/tour/services/services.registry';
import { CategoryServicesRegistry } from './schema/category/services/services.registry';
import { TourPriceServicesRegistry } from './schema/tourPrice/services/services.registry';
import { CurrencyServicesRegistry } from './schema/currency/services/services.registry';

const prisma = new PrismaClient();
const tourService = new TourServicesRegistry(prisma);
const tourPriceService = new TourPriceServicesRegistry(prisma);
const currencyService = new CurrencyServicesRegistry(prisma);
const categoryService = new CategoryServicesRegistry(prisma);

export type GraphQLContext = {
  prisma: PrismaClient;
  tourService: TourServicesRegistry;
  tourPriceService: TourPriceServicesRegistry;
  currencyService: CurrencyServicesRegistry;
  categoryService: CategoryServicesRegistry;
};

export async function createContext(): Promise<GraphQLContext> {
  return {
    prisma,
    tourService,
    tourPriceService,
    currencyService,
    categoryService,
  };
}
