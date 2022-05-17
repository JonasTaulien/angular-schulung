import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DatasourceStatus} from "./DatasourceStatus";

@Injectable({
  providedIn: 'root'
})
export class DatasourceStatusService {

  constructor(private httpClient: HttpClient) {
  }

  public getDatasourceStatus(datasourceId: number): Observable<DatasourceStatus> {
    return this.httpClient
      .post<DatasourceStatus>(
        'http://localhost:8888/datasources/' + datasourceId + '/status',
        {}
      );
  }
}
