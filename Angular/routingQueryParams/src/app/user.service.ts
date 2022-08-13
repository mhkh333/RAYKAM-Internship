import {IUser} from "./interfaces/app-interface";

export class UserService {

  public users: IUser[] = [
    {id: 1, name: 'foad', email: 'foad@ss.com'},
    {id: 2, name: 'shad', email: 'shad@ss.com'},
    {id: 3, name: 'mahi', email: 'mahi@ss.com'}
  ];

}
