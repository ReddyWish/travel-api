import type { MutationResolvers } from './../../../types.generated';
export const updateTourPrice: NonNullable<
  MutationResolvers['updateTourPrice']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.tourPriceService.update(_arg);
};
