export const injectIsFavorite = <T extends {isFavorite?: boolean}>(
  object: T,
) => {
  const isFavorite = false;

  if (object.isFavorite) {
    return object;
  }

  return {
    ...object,
    isFavorite,
  };
};
