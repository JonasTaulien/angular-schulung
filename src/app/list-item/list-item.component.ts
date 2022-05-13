import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input()
  public text: string | undefined = undefined;

  private _anotherInput: number = 2;

  @Input()
  set anotherInput(newAnotherInput: number){
    this._anotherInput = newAnotherInput;
    console.log("Neuer input " + newAnotherInput)
  }

  @Output()
  public deleted: EventEmitter<string> = new EventEmitter<string>();

}
