import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatasourceStatusService} from "./datasource-status.service";
import {filter, map, Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  public datasource$: Observable<{ datasourceId: number, status: string } | undefined> = of(undefined);

  constructor(private route: ActivatedRoute, private statusService: DatasourceStatusService) {
  }

  ngOnInit(): void {
    this.datasource$ = this.route.queryParamMap
      .pipe(
        switchMap(
          params => {
            if(params.has('datasourceId')){
              const datasourceId = Number(params.get('datasourceId'));

              console.log('datasourceId query param changed!', params)

              return of({datasourceId: datasourceId, status: 'IN_PROGRESS'});
              // return this.statusService
              //   .getDatasourceStatus(datasourceId)
              //   .pipe(
              //     map(
              //       datasourceStatus => {
              //         return {datasourceId: datasourceId, status: datasourceStatus.status};
              //       }
              //     )
              //   );
            }else{
              return of(undefined);
            }
          }
        ),
      );
  }

}
