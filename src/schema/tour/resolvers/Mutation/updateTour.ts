import type { MutationResolvers } from './../../../types.generated';
export const updateTour: NonNullable<MutationResolvers['updateTour']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const updatedTour = await _ctx.tourServices.update(_arg);

  return {
    ...updatedTour,
    categories: updatedTour.categories.map(
      (updatedTourCategory) => updatedTourCategory.category,
    ),
  };
};
