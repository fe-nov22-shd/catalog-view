export const pathBuilder = (pathName: string, category:number) => {

  if (pathName === '/') {
    console.log(category);
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
