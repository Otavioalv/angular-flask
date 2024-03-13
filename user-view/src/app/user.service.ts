import { ChangeDetectorRef, Injectable, inject } from '@angular/core';
import { UserInterface } from './userInterface';
import { ResponseInterface } from './responseInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, of, finalize, BehaviorSubject } from 'rxjs';
import { LoaderService } from './loader/loader.service';
import { MessageService } from './message/message.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  protected url = "http://127.0.0.1:5000";
  private messageService: MessageService = inject(MessageService);

  public getList$ = new BehaviorSubject<boolean>(false);

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService = new LoaderService(),
  ) {}

  // CREATE
  newUser(datas:UserInterface): Observable<ResponseInterface> {
    const url = this.url + `/create-user/`

    this.loaderService.show();

    return this.http.post<ResponseInterface>(url, datas, this.httpOptions)
      .pipe(
        tap(_ => {
          console.log("New User");
          this.getList$.next(true);

          this.messageService.addMessage({message: "Ussuario ciado com sucesso", type: 'success'});
        }),
        catchError(this.handleError<ResponseInterface>())
      )
  }

  // READ 
  getListAllUsers(): Observable<UserInterface[]>{
      const url = this.url + "/list-users/"

      this.loaderService.show();

      return this.http.get<UserInterface[]>(url)
      .pipe(
        tap(_ => {
          console.log("List User"),
          this.getList$.next(false);

          this.messageService.addMessage({message:"Usuarios listados", type: 'success'});
        }),
        catchError(this.handleError<UserInterface[]>([])),
        finalize(() => this.loaderService.hide())
      );
  }


  getListById(id:number): Observable<UserInterface[]> {
    const url = this.url + `/find-user-by-id/${id}`;

    this.loaderService.show();

    return this.http.post<UserInterface[]>(url, id, this.httpOptions)
      .pipe(
        tap(_ => {
          console.log("Find");
          this.messageService.addMessage({message: "Usuario encontrado", type: 'success'});
        }),
        catchError(this.handleError<UserInterface[]>([]))
      );
  }

  // UPDATE
  editUser(datas: UserInterface): Observable<ResponseInterface> {
    const url = this.url + `/update-user/${datas.id}`

    this.loaderService.show();

    return this.http.put<ResponseInterface>(url, datas, this.httpOptions)
      .pipe(
        tap(_ => {
          console.log('Edit');
          this.getList$.next(true);

          this.messageService.addMessage({message: "Usuario atualizado com sucesso", type: 'success'});
        }),
        catchError(this.handleError<ResponseInterface>())
      )
  }

  // DELETE
  deleteUser(id: number): Observable<ResponseInterface> {
    const url = this.url + `/delete-user/${id}`;

    this.loaderService.show();

    return this.http.delete<ResponseInterface>(url, this.httpOptions)
      .pipe(
        tap(_ => {
          console.log("Delete");
          this.getList$.next(true);

          this.messageService.addMessage({message: "Usuario deletado com sucesso", type: 'success'});
        }),
        catchError(this.handleError<ResponseInterface>())
      );
  }


  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.loaderService.hide();
      return of(result as T);
    }
  }
}
