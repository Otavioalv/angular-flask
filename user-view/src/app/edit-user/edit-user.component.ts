import { Component, Input, OnInit, inject } from '@angular/core';
import { UserInterface } from '../userInterface';
import { UsersService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})

export class EditUserComponent implements OnInit{
  @Input() userList!: UserInterface;
  

  userService = inject(UsersService);

  applyForm = new FormGroup({
    birthday: new FormControl(''),
    name: new FormControl(''),
    id: new FormControl('')
  });

  constructor(){
  };

  ngOnInit(): void {
    this.applyForm.patchValue({
      birthday: this.userList.birthday,
      name: this.userList.name,
      id: this.userList.id?.toString()
    });
  }

  submitUser() {
    this.userService.editUser(this.applyForm.value as UserInterface)
      .subscribe(res => console.log(res))
  }
}
