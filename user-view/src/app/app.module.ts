import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoaderComponent } from './loader/loader.component';
import { MessageComponent } from './message/message.component';
import { PopUpDeleteComponent } from './pop-up-delete/pop-up-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    NewUserComponent,
    EditUserComponent,
    LoaderComponent,
    MessageComponent,
    PopUpDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
