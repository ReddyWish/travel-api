import type { QueryResolvers } from './../../../types.generated';
export const tourPrices: NonNullable<QueryResolvers['tourPrices']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const result = await _ctx.prisma.tourPrice.findMany({
    include: {
      currency: true,
    },
  });
  return result;
};
