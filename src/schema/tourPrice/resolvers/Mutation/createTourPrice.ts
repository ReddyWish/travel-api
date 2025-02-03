import type { MutationResolvers } from './../../../types.generated';
export const createTourPrice: NonNullable<
  MutationResolvers['createTourPrice']
> = async (_parent, _arg, _ctx) => {
  return _ctx.tourPriceService.create(_arg);
};
