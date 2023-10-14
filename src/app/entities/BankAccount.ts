export interface BanckAccount {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
  currentBalance: number;
}
