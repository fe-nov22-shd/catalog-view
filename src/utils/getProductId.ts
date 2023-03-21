export const getProductId = (pathName: string) => {
  const splitPathName = pathName.split('/');

  return splitPathName[splitPathName.length - 1];
};
