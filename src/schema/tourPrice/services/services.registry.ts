import { PrismaClient } from '@prisma/client';

import { CreateTourPriceService } from './create-tourPrice.service';
import { UpdateTourPriceService } from './update-tourPrice.service';
import { DeleteTourPriceService } from './delete-tourPrice.service';
import {
  MutationcreateTourPriceArgs,
  MutationdeleteTourPriceArgs,
  MutationupdateTourPriceArgs,
  RequireFields,
} from '../../types.generated';

export class TourPriceServicesRegistry {
  private prisma: PrismaClient;
  private createTourPriceService!: CreateTourPriceService;
  private updateTourPriceService!: UpdateTourPriceService;
  private deleteTourPriceService!: DeleteTourPriceService;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
    this.initServices();
  }

  private initServices() {
    this.createTourPriceService = new CreateTourPriceService(this.prisma);
    this.updateTourPriceService = new UpdateTourPriceService(this.prisma);
    this.deleteTourPriceService = new DeleteTourPriceService(this.prisma);
  }

  async create(
    _arg: RequireFields<MutationcreateTourPriceArgs, 'tourId' | 'input'>,
  ) {
    return await this.createTourPriceService.execute(_arg);
  }

  async update(
    _arg: RequireFields<MutationupdateTourPriceArgs, 'id' | 'input'>,
  ) {
    return await this.updateTourPriceService.execute(_arg);
  }

  async delete(_arg: RequireFields<MutationdeleteTourPriceArgs, 'id'>) {
    return await this.deleteTourPriceService.execute(_arg);
  }
}
