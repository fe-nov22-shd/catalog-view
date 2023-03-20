export const getNewProductId = (prevProductId: string, newColor?: string, newCapacity?: string) => {
  const productIdChunks = prevProductId.split('-');

  const color = productIdChunks[productIdChunks.length - 1];
  const capacity = productIdChunks[productIdChunks.length - 2];
  const name = productIdChunks.slice(0, productIdChunks.length - 2).join('-');

  return [
    name,
    newCapacity ? newCapacity.toLowerCase() : capacity,
    newColor ? newColor.toLowerCase() : color
  ].join('-');
};
