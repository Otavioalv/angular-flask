import { Component, inject } from '@angular/core';
import { UsersService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInterface } from '../userInterface';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  userService = inject(UsersService);

  applyForm = new FormGroup({
    birthday: new FormControl(''),
    name: new FormControl(''),
  });

  constructor() {}

  submitUser() {
    this.userService.newUser(this.applyForm.value as UserInterface)
      .subscribe(res => console.log(res))
  }
}
