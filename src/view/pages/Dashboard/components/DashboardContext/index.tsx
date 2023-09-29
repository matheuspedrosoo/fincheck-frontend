import { createContext, useCallback, useState } from 'react';

interface DashboardContextValue {
  areValuesVisible: boolean;
  toogleValueVisibility(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toogleValueVisibility = useCallback(() => {
    setAreValuesVisible((prev) => !prev);
  }, []);

  return (
    <DashboardContext.Provider
      value={{ areValuesVisible, toogleValueVisibility }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
