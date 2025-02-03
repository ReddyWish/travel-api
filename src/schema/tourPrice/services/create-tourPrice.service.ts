import { PrismaClient } from '@prisma/client';
import {
  MutationcreateTourPriceArgs,
  RequireFields,
} from '../../types.generated';

export class CreateTourPriceService {
  constructor(private prisma: PrismaClient) {}

  async execute(
    _arg: RequireFields<MutationcreateTourPriceArgs, 'tourId' | 'input'>,
  ) {
    const { currencyId, ...tourPriceData } = _arg.input;

    return this.prisma.tourPrice.create({
      data: {
        ...tourPriceData,
        tour: {
          connect: {
            id: parseInt(_arg.tourId),
          },
        },
        currency: {
          connect: {
            id: parseInt(currencyId),
          },
        },
      },
      include: {
        tour: true,
        currency: true,
      },
    });
  }
}
