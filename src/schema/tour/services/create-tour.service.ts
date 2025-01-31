import { PrismaClient } from '@prisma/client';
import { MutationcreateTourArgs, RequireFields } from '../../types.generated';

export class CreateTourService {
  constructor(private prisma: PrismaClient) {}

  async execute(_arg: RequireFields<MutationcreateTourArgs, 'input'>) {
    const { categoryIds, ...tourData } = _arg.input;

    return this.prisma.tour.create({
      data: {
        ...tourData,
        categories: categoryIds?.length
          ? {
              connect: categoryIds.map((id) => ({ id: parseInt(id) })),
            }
          : undefined,
      },
      include: {
        categories: true,
      },
    });
  }
}
