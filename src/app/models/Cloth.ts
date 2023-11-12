import { User } from './User';

export interface Cloth {
  id?: string;
  ownerId: string;
  donateId: string;
  name: string;
  size: string;
}

export interface ClothWithUser extends Cloth {
  usuario: User;
}
