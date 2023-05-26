import { useState } from 'react';

export const useTimedNotification = (timedout: number) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const show = () => {
    setIsShowing(true);

    setTimeout(() => {
      setIsShowing(false);
    }, timedout);
  };

  const close = () => {
    setIsShowing(false);
  };

  return {
    isShowing,
    show,
    close,
  };
};
