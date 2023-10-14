import { createContext, useCallback, useState } from 'react';
import { BanckAccount } from '../../../../../app/entities/BankAccount';

interface DashboardContextValue {
  areValuesVisible: boolean;
  toogleValueVisibility(): void;
  isNewAccountModalOpen: boolean;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  isNewTransactionModalOpen: boolean;
  openNewTransactionModal(type: 'INCOME' | 'EXPENSE'): void;
  closeNewTransactionModal(): void;
  newTransactionType: 'INCOME' | 'EXPENSE' | null;
  isEditAccountModalOpen: boolean;
  accountBeingEdited: null | BanckAccount;
  openEditAccountModal(bankAccount: BanckAccount): void;
  closeEditAccountModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const [newTransactionType, setNewTransactionType] = useState<
    'INCOME' | 'EXPENSE' | null
  >(null);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
  const [accountBeingEdited, setAccountBeingEdited] =
    useState<null | BanckAccount>(null);

  const toogleValueVisibility = useCallback(() => {
    setAreValuesVisible((prev) => !prev);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: 'INCOME' | 'EXPENSE') => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  const openEditAccountModal = useCallback((bankAccount: BanckAccount) => {
    setAccountBeingEdited(bankAccount);
    setIsEditAccountModalOpen(true);
  }, []);

  const closeEditAccountModal = useCallback(() => {
    setAccountBeingEdited(null);
    setIsEditAccountModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toogleValueVisibility,
        isNewAccountModalOpen,
        openNewAccountModal,
        closeNewAccountModal,
        isNewTransactionModalOpen,
        openNewTransactionModal,
        closeNewTransactionModal,
        newTransactionType,
        isEditAccountModalOpen,
        accountBeingEdited,
        openEditAccountModal,
        closeEditAccountModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
