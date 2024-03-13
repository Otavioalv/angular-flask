import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { ResponseInterface } from '../responseInterface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  messageService: MessageService = new MessageService();
  message: ResponseInterface[] = [];

  constructor(){
    this.messageService.getMessage$
      .subscribe(msg => {
        this.test(msg)
      })
  }

  test(msg: ResponseInterface[]) {
    console.log(msg);
  }
}
