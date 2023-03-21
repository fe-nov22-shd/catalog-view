export const getNumberOfPages = (itemsAmount:number, itemsPerPage:string) => {
  let numberOfPages = 0;

  if (itemsPerPage !== '') {
    numberOfPages = Math.ceil(itemsAmount / +itemsPerPage);
  }

  return numberOfPages
};
