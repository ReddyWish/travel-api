import type { MutationResolvers } from './../../../types.generated';
export const deleteCategory: NonNullable<
  MutationResolvers['deleteCategory']
> = async (_parent, _arg, _ctx) => {
  return await _ctx.categoryServices.delete(_arg);
};
