import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  @Input()
  public label: string | undefined = 'test-label';

  @Input()
  public value: string | undefined = 'initial-wert';

  @Output()
  public valueChange = new EventEmitter<string>();

}
