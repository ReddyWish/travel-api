import { PrismaClient } from '@prisma/client';
import {
  MutationupdateCategoryArgs,
  RequireFields,
} from '../../types.generated';

export class UpdateCategoryService {
  constructor(private prisma: PrismaClient) {}

  async execute(
    _arg: RequireFields<MutationupdateCategoryArgs, 'id' | 'input'>,
  ) {
    return this.prisma.category.update({
      where: {
        id: parseInt(_arg.id),
      },
      data: {
        name: _arg.input.name,
        description: _arg.input.description,
      },
    });
  }
}
