import {AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ListItemComponent} from "../list-item/list-item.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('title', {static: true})
  private titleElement: ElementRef | undefined;

  @ContentChild(ListItemComponent)
  private listItem: ListItemComponent | undefined;

  public shouldShow = false;
  public fancy = false;

  public show() {
    this.shouldShow = true;
  }

  public setFancy() {
    this.fancy = true;
  }

  ngOnInit(): void {
    console.log(
      'ngOnInit title:',
      this.titleElement?.nativeElement.innerHTML
    );

    console.log(
      'ngOnInit list item text:',
      this.listItem?.text
    );
  }

  ngAfterContentInit(): void {
    console.log(
      'ngAfterContentInit title:',
      this.titleElement?.nativeElement.innerHTML
    );

    console.log(
      'ngAfterContentInit list item text:',
      this.listItem?.text
    );
  }

  ngAfterViewInit(): void {
    console.log(
      'ngAfterViewInit title:',
      this.titleElement?.nativeElement.innerHTML
    );

    console.log(
      'ngAfterViewInit list item text:',
      this.listItem?.text
    );
  }
}
