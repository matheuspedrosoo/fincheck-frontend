import { useState } from 'react';
import { useWindowWidth } from './../../../../../app/hooks/useWindowWidth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toogleValueVisibility, openNewAccountModal } =
    useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toogleValueVisibility,
    isLoading: false,
    accounts: [],
    openNewAccountModal,
  };
}
