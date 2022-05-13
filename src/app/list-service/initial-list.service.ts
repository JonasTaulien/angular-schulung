import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Datasource} from "./Datasource";

@Injectable({
  providedIn: 'root'
})
export class InitialListService {

  constructor(private httpClient: HttpClient) {
  }

  public getInitialList(): Observable<string[]> {
    return this.httpClient
      .get<Datasource[]>('http://localhost:8888/datasources')
      .pipe(
        map(datasources => datasources.map(datasource => datasource.name))
      );
  }
}
