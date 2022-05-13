import {Component, OnInit} from '@angular/core';
import {InitialListService} from "./list-service/initial-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'MEIN NEUER TITEL';
  public value: string = 'initial';
  public showToggle: boolean = false;
  public elements: string[] = [];

  constructor(private initialListService: InitialListService) {
  }


  ngOnInit(): void {
    this.initialListService
      .getInitialList()
      .subscribe(list => this.elements = list)
  }

  public doShowToggle() {
    this.showToggle = true;

    setTimeout(
      () => this.showToggle = false,
      5000
    )
  }

  public deleteElement(element: string) {
    this.elements = this.elements.filter(val => val != element);
  }

}
