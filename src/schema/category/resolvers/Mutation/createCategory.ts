import type { MutationResolvers } from './../../../types.generated';
export const createCategory: NonNullable<
  MutationResolvers['createCategory']
> = async (_parent, _arg, _ctx) => {
  return _ctx.prisma.category.create({
    data: {
      name: _arg.input.name,
      description: _arg.input.description,
    },
  });
};
