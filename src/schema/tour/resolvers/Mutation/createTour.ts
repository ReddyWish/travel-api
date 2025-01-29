import type { MutationResolvers } from '../../../types.generated';
export const createTour: NonNullable<MutationResolvers['createTour']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const tour = await _ctx.tourServices.create(_arg);

  return {
    ...tour,
    categories: tour.categories.map((tourCategory) => tourCategory.category),
  };
};
