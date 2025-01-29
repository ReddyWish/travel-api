import type { QueryResolvers } from './../../../types.generated';
export const tour: NonNullable<QueryResolvers['tour']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const result = await _ctx.prisma.tour.findUnique({
    where: {
      id: parseInt(_arg.id),
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  });
  if (!result) return null;

  return {
    ...result,
    categories:
      result?.categories.map((tourCategory) => tourCategory.category) || null,
  };
};
