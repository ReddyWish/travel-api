import { PrismaClient } from '@prisma/client';
import { MutationcreateTourArgs, RequireFields } from '../../types.generated';

export class CreateTourService {
  constructor(private prisma: PrismaClient) {}

  async execute(_arg: RequireFields<MutationcreateTourArgs, 'input'>) {
    const { categoryIds, ...tourData } = _arg.input;

    return await this.prisma.tour.create({
      data: {
        ...tourData,
        categories: categoryIds
          ? {
              create: categoryIds.map((id) => ({ categoryId: parseInt(id) })),
            }
          : undefined,
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
      },
    });
  }
}
