import { PrismaClient } from '@prisma/client';
import {
  MutationdeleteTourPriceArgs,
  RequireFields,
} from '../../types.generated';

export class DeleteTourPriceService {
  constructor(private prisma: PrismaClient) {}

  async execute(_arg: RequireFields<MutationdeleteTourPriceArgs, 'id'>) {
    return this.prisma.tourPrice.delete({
      where: {
        id: parseInt(_arg.id),
      },
      include: {
        currency: true,
      },
    });
  }
}
