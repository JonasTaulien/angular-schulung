import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(private router: Router) {
  }

  public openSecond() {
    this.router
      .navigate(['/second'])
      .then(
        navigationSuccessful => console.log("Navigation to second successful: " + navigationSuccessful)
      );
  }
}
