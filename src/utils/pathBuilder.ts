import { useLocation } from "react-router";

export const PathBuilder = (category) => {
  const location = useLocation();
  let pathname = location.pathname;

  if (pathname === '/') {
    pathname = category === 1
      ? 'phones'
      : 'tablets'
    } else {
      if (pathname.includes('tablets')) {
        pathname = 'tablets'
      }
      if (pathname.includes('phones')) {
        pathname = 'phones'
      }
    }

    return pathname;
};
