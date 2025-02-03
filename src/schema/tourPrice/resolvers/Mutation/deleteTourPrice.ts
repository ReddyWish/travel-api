import type { MutationResolvers } from './../../../types.generated';
export const deleteTourPrice: NonNullable<
  MutationResolvers['deleteTourPrice']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.tourPriceService.delete(_arg);
};
