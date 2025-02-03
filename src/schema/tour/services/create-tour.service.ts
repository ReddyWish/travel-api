import { PrismaClient } from '@prisma/client';
import { MutationcreateTourArgs, RequireFields } from '../../types.generated';

export class CreateTourService {
  constructor(private prisma: PrismaClient) {}

  async execute(_arg: RequireFields<MutationcreateTourArgs, 'input'>) {
    const { categoryIds, price, ...tourData } = _arg.input;

    return this.prisma.tour.create({
      data: {
        ...tourData,
        categories: categoryIds?.length
          ? {
              connect: categoryIds.map((id) => ({ id: parseInt(id) })),
            }
          : undefined,
        price: price
          ? {
              createMany: {
                data: price.map((p) => ({
                  currencyId: parseInt(p.currencyId),
                  amount: p.amount,
                })),
              },
            }
          : undefined,
      },
      include: {
        categories: true,
        price: {
          include: {
            currency: true,
          },
        },
      },
    });
  }
}
