import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Uye } from '../models/uye';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: AngularFireList<Uye>;
  private dbPath = '/users';
  girisYapmismi(): boolean {
    if (localStorage.getItem('user')) return true;
    return false;
  }
  getAllUsers=()=>this.users

  uyeOl(uye: Uye) {
   return this.users.push(uye);
  }
  constructor(private db: AngularFireDatabase) {
    this.users =db.list(this.dbPath),{query: {}};

  }
}
