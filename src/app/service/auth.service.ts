import { UserLoginDTO } from '../model/UserLoginDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { CredenciaisDTO } from '../model/CredenciaisDTO';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(credenciais: CredenciaisDTO): Observable<CredenciaisDTO>{
    return this.http.put<CredenciaisDTO>('https://vitorvncblogpessoal.herokuapp.com/api/v1/usuarios/credenciais', credenciais)
  }

  entrarDTO(usuarioLoginDTO: UserLoginDTO): Observable<UserLoginDTO>{
    return this.http.put<UserLoginDTO>('https://vitorvncblogpessoal.herokuapp.com/api/v1/usuarios/credenciais', usuarioLoginDTO)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://vitorvncblogpessoal.herokuapp.com/usuarios/salvar', user)
  }
}
