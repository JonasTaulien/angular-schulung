import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements AfterViewInit {

  @ViewChild(ModalComponent)
  private modalComponent: ModalComponent | undefined = undefined;


  ngAfterViewInit(): void {
    this.modalComponent?.setFancy();
  }

  public showModal() {
    this.modalComponent?.show();
  }
}
