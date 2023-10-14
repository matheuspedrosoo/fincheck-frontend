import { httpClient } from '../httpClient';

export async function remove(banckAccountId: string) {
  const { data } = await httpClient.delete(`/bank-accounts/${banckAccountId}`);

  return data;
}
