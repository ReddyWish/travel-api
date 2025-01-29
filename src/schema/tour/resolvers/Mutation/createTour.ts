import type { MutationResolvers } from '../../../types.generated';
export const createTour: NonNullable<MutationResolvers['createTour']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { categoryIds, ...tourData } = _arg.input;

  const tour = await _ctx.prisma.tour.create({
    data: {
      ...tourData,
      categories: categoryIds
        ? {
            create: categoryIds.map((id) => ({ categoryId: parseInt(id) })),
          }
        : undefined,
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  return {
    ...tour,
    categories: tour.categories.map((tourCategory) => tourCategory.category),
  };
};
