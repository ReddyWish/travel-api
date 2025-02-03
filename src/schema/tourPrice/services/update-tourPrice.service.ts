import { PrismaClient } from '@prisma/client';
import {
  MutationupdateTourPriceArgs,
  RequireFields,
} from '../../types.generated';

export class UpdateTourPriceService {
  constructor(private prisma: PrismaClient) {}

  async execute(
    _arg: RequireFields<MutationupdateTourPriceArgs, 'input' | 'id'>,
  ) {
    const { currencyId, ...tourPriceData } = _arg.input;

    return this.prisma.tourPrice.update({
      where: {
        id: parseInt(_arg.id),
      },
      data: {
        ...tourPriceData,
        currency: currencyId
          ? {
              connect: {
                id: parseInt(currencyId),
              },
            }
          : undefined,
      },
      include: {
        currency: true,
      },
    });
  }
}
