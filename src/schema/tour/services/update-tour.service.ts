import { PrismaClient } from '@prisma/client';
import { MutationupdateTourArgs, RequireFields } from '../../types.generated';

export class UpdateTourService {
  constructor(private prisma: PrismaClient) {}

  async execute(_arg: RequireFields<MutationupdateTourArgs, 'input' | 'id'>) {
    const { categoryIds, ...tourData } = _arg.input;

    return this.prisma.tour.update({
      where: {
        id: parseInt(_arg.id),
      },
      data: {
        ...tourData,
        categories: {
          set: categoryIds.map((id) => ({ id: parseInt(id) })),
        },
      },
      include: {
        categories: true,
      },
    });
  }
}
