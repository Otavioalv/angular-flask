import { Injectable } from '@angular/core';
import { ResponseInterface } from '../responseInterface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message:ResponseInterface[] = [];
  
  public getMessage$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  get getMessage(): ResponseInterface[] {
    return this.message;
  }

  addMessage(msg: ResponseInterface) {
    
    this.message.push(msg);
    
    this.showMessageTime(this.message);

    this.getMessage$.next(true);
  }

  showMessageTime(message: ResponseInterface[]) {
    setTimeout(() => {
        message.pop();
    }, 1000);
    
    this.getMessage$.next(true);
  }
}
