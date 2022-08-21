export interface User {
  id: number;
  name: number;
}

export interface Address{
  userId: number;
  country: string;
  state: string;
  city: string;
  street: string;
  zipCode: number;
  user?: string;
}
