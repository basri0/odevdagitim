import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Kayit } from '../models/kayit';

@Injectable({
  providedIn: 'root'
})
export class OdevService {
  private dbPath = '/kayitlar';
  kayitRef: AngularFireList<Kayit>;
  constructor(private db: AngularFireDatabase) {
    this.kayitRef=db.list(this.dbPath)
   }
  KayitListele() {
    return this.kayitRef;
  }

  KayitByKey(key: string) {
    return this.db.object("/Kayitlar/" + key);
  }

  KayitEkle(kayit: Kayit) {
    return this.kayitRef.push(kayit);
  }
  KayitDuzenle(kayit: Kayit) {
    return this.kayitRef.update(kayit.key, kayit);
  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }

}
