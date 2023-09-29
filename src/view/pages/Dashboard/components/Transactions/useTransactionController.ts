import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionController() {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible,
    transactions: [1],
    isInitialLoading: false,
    isLoading: false,
  };
}
