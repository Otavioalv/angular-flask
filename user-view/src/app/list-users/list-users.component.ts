import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { UsersService } from '../user.service';
import { UserInterface } from '../userInterface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{
  userService = inject(UsersService);
  usersList:UserInterface[] = [];

  editingUserId: number | null = null;
  bttClick:boolean = false;

  constructor() {
    this.userService.getList$
      .subscribe(val => {
        val ? this.getList() : null;
      });
  }


  ngOnInit(): void {
    this.getList();
  }


  getList(): void {
    this.userService.getListAllUsers()
    .subscribe(users => this.usersList = users);
  }

  editUser(id:number = -1) {
    this.bttClick = !this.bttClick;

    if(id < -1)
      return;

    if(this.editingUserId === id)
      this.editingUserId = null;
    else
      this.editingUserId = id;
  }

  async deleteUser(id:number = -1) {
    this.userService.deleteUser(id)
      .subscribe(res => console.log(res)); 
  }
}
