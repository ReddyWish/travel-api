import type { QueryResolvers } from './../../../types.generated';
export const tourPrice: NonNullable<QueryResolvers['tourPrice']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return _ctx.prisma.tourPrice.findUnique({
    where: {
      id: parseInt(_arg.id),
    },
    include: {
      currency: true,
    },
  });
};
