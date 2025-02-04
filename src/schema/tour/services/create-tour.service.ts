import { PrismaClient } from '@prisma/client';
import { MutationcreateTourArgs, RequireFields } from '../../types.generated';

export class CreateTourService {
  constructor(private prisma: PrismaClient) {}

  async execute(_arg: RequireFields<MutationcreateTourArgs, 'input'>) {
    const { categoryIds, price, program, images, ...tourData } = _arg.input;

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
        program: program?.length
          ? {
              create: program.map((fragment) => ({
                order: fragment.order,
                title: fragment.title,
                description: fragment.description,
              })),
            }
          : undefined,
        images: images?.length
          ? {
              create: images.map((image) => ({
                url: image.url,
              })),
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
        program: true,
        images: true,
      },
    });
  }
}
