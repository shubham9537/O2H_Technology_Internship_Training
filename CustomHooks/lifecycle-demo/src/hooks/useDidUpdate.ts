import { useEffect, useRef } from "react";

export const useDidUpdate = (callback: () => void, deps: any[]) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log('inside useDidUpdate');
    callback();
    console.log('deps in useDidUpdate', deps);
  }, deps);
};


