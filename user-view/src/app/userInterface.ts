import { ResponseInterface } from "./responseInterface";

export interface UserInterface extends ResponseInterface{
    birthday: string;
    id?: number
    name: string
}

