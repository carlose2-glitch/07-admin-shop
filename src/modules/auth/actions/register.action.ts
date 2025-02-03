import { tesloApi } from '@/api/tesloApi';

export const registerAction = async (fullName: string, email: string, password: string) => {
  try {
    const { data } = await tesloApi.post('/auth/register', { email, password, fullName });
    return data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
