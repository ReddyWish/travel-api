import type { QueryResolvers } from './../../../types.generated';
export const tours: NonNullable<QueryResolvers['tours']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const result = await _ctx.prisma.tour.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  });
  if (!result) return [];

  return result.map((tour) => ({
    ...tour,
    categories: tour.categories.map((category) => category.category),
  }));
};
