import { Injectable } from '@angular/core';
import { ResponseInterface } from '../responseInterface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private message:ResponseInterface[] = [];
  
  public getMessage$ = new Subject<ResponseInterface[]>();

  constructor() { }

  addMessage(msg: ResponseInterface) {
    
    this.message.push(msg);

    // this.getMessage$.next(this.message);

    this.showMessageTime(this.message);
  }

  showMessageTime(message: ResponseInterface[]) {
    setTimeout(() => {
        this.message.shift();
    }, 6000);
    
    this.getMessage$.next(this.message);
  }
}
