import { PrismaClient } from '@prisma/client';
import {
  MutationcreateTourArgs,
  MutationupdateTourArgs,
  RequireFields,
} from '../../types.generated';

export class UpdateTourService {
  constructor(private prisma: PrismaClient) {}

  async execute(_arg: RequireFields<MutationupdateTourArgs, 'input' | 'id'>) {
    const { categoryIds, ...tourData } = _arg.input;

    await this.prisma.tourCategory.deleteMany({
      where: {
        tourId: parseInt(_arg.id),
      },
    });

    return await this.prisma.tour.update({
      where: {
        id: parseInt(_arg.id),
      },
      data: {
        ...tourData,
        categories:
          categoryIds.length > 0
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
