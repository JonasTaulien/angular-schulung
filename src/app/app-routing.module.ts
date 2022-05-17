import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {IndexComponent} from "./index/index.component";
import {SubFirstComponent} from "./first/sub-first/sub-first.component";
import {SubSecondComponent} from "./first/sub-second/sub-second.component";
import {IsAdminGuard} from "./is-admin.guard";

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    children: [
      {
        path: 'sub-1',
        component: SubFirstComponent,
        canActivate: [IsAdminGuard]
      },
      {
        path: 'sub-2',
        component: SubSecondComponent
      }
    ]
  },
  {path: 'second', component: SecondComponent},
  {path: 'third', redirectTo: '/first', pathMatch: 'full'},
  {path: '', component: IndexComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
