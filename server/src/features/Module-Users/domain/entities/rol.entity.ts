import { User } from "./user.entity";

export class Rol {
  id: number;
  name: string;
  users: User[];
}
