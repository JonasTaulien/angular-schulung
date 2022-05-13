import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListItemComponent} from './list-item.component';
import {By} from "@angular/platform-browser";

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({
        declarations: [ListItemComponent]
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
  });

  it('should show the text', () => {
    component.text = 'new text';
    fixture.detectChanges();

    const textElement = fixture.debugElement.query(By.css('.list-item__text')).nativeElement;
    expect(textElement.innerHTML).toBe('new text');
  });

  it('should communicate deletion request', () => {
    let output: string|undefined;

    component.text = 'new text';

    component.deleted.subscribe(newOutput => output = newOutput);

    const deleteButton = fixture.debugElement.query(By.css('.list-item__delete-button')).nativeElement;
    deleteButton.click();

    expect(output).toBe('new text');
  });
});
