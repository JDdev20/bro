import { Rol } from "./rol.entity";

export class User {
  id: number;
  email: string;
  name: string | null;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  rolId: number;
  rol: Rol;
}
