export const pathBuilder = (pathName: string, category:number) => {

  if (pathName === '/') {
    pathName = category === 1
      ? 'phones'
      : 'tablets'
    } else {
      if (pathName.includes('tablets')) {
        pathName = 'tablets'
      }
      if (pathName.includes('phones')) {
        pathName = 'phones'
      }
    }

    return pathName;
};
