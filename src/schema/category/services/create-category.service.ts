import { PrismaClient } from '@prisma/client';
import {
  MutationcreateCategoryArgs,
  RequireFields,
} from '../../types.generated';

export class CreateCategoryService {
  constructor(private prisma: PrismaClient) {}

  async execute(_arg: RequireFields<MutationcreateCategoryArgs, 'input'>) {
    return this.prisma.category.create({
      data: {
        name: _arg.input.name,
        description: _arg.input.description,
      },
    });
  }
}
