import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'MEIN NEUER TITEL';
  public value: string = 'initial';
  public showToggle: boolean = false;
  public elements: string[] = [
    'A', 'B', 'C', 'D'
  ];

  public doShowToggle() {
    this.showToggle = true;

    setTimeout(
      () => this.showToggle = false,
      5000
    )
  }
  public deleteElement(element: string){
    this.elements = this.elements.filter(val => val != element);
  }
}
