import { PrismaClient } from '@prisma/client';
import { MutationupdateTourArgs, RequireFields } from '../../types.generated';

export class UpdateTourService {
  constructor(private prisma: PrismaClient) {}

  async execute(_arg: RequireFields<MutationupdateTourArgs, 'input' | 'id'>) {
    const { categoryIds, price, program, images, ...tourData } = _arg.input;

    return this.prisma.tour.update({
      where: {
        id: parseInt(_arg.id),
      },
      data: {
        ...tourData,
        categories: {
          set: categoryIds.map((id) => ({ id: parseInt(id) })),
        },
        price: price
          ? {
              deleteMany: {},
              create: price.map((p) => ({
                amount: p.amount,
                currency: {
                  connect: {
                    id: parseInt(p.currencyId),
                  },
                },
              })),
            }
          : undefined,
        program: {
          deleteMany: {},
          ...(program?.length
            ? {
                create: program.map((fragment) => ({
                  order: fragment.order,
                  title: fragment.title,
                  description: fragment.description,
                })),
              }
            : {}),
        },
        images: {
          deleteMany: {},
          ...(images?.length
            ? {
                create: images.map((image) => ({
                  url: image.url,
                })),
              }
            : {}),
        },
      },
      include: {
        categories: true,
        price: {
          include: {
            currency: true,
          },
        },
        program: true,
        images: true,
      },
    });
  }
}
