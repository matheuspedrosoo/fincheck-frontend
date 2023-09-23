import { httpClient } from '../httpClient';

export interface SigninParams {
  name: string;
  email: string;
}

interface SigninResponse {
  accessToken: string;
}

export async function me() {
  const { data } = await httpClient.get<SigninResponse>('/users/me');

  return data;
}
