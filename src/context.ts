import { PrismaClient } from '@prisma/client';
import { TourServicesRegistry } from './schema/tour/services/services.registry';
import { CategoryServicesRegistry } from './schema/category/services/services.registry';
import { TourPriceServicesRegistry } from './schema/tourPrice/services/services.registry';
import { CurrencyServicesRegistry } from './schema/currency/services/services.registry';
import { TourProgramServicesRegistry } from './schema/tourProgram/services/services.registry';
import { TourImageServiceRegistry } from './schema/tourImage/services/services.registry';

const prisma = new PrismaClient();
const tourService = new TourServicesRegistry(prisma);
const tourPriceService = new TourPriceServicesRegistry(prisma);
const currencyService = new CurrencyServicesRegistry(prisma);
const categoryService = new CategoryServicesRegistry(prisma);
const tourProgramService = new TourProgramServicesRegistry(prisma);
const tourImageService = new TourImageServiceRegistry(prisma);

export type GraphQLContext = {
  prisma: PrismaClient;
  tourService: TourServicesRegistry;
  tourPriceService: TourPriceServicesRegistry;
  currencyService: CurrencyServicesRegistry;
  categoryService: CategoryServicesRegistry;
  tourProgramService: TourProgramServicesRegistry;
  tourImageService: TourImageServiceRegistry;
};

export async function createContext(): Promise<GraphQLContext> {
  return {
    prisma,
    tourService,
    tourPriceService,
    currencyService,
    categoryService,
    tourProgramService,
    tourImageService,
  };
}
