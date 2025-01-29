import type { MutationResolvers } from './../../../types.generated';
export const updateTour: NonNullable<MutationResolvers['updateTour']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { categoryIds, ...tourData } = _arg.input;

  await _ctx.prisma.tourCategory.deleteMany({
    where: {
      tourId: parseInt(_arg.id),
    },
  });

  const updatedTour = await _ctx.prisma.tour.update({
    where: {
      id: parseInt(_arg.id),
    },
    data: {
      ...tourData,
      categories:
        categoryIds.length > 0
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
    ...updatedTour,
    categories: updatedTour.categories.map(
      (updatedTourCategory) => updatedTourCategory.category,
    ),
  };
};
