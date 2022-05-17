import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListItemComponent} from './list-item/list-item.component';
import {TextInputComponent} from './text-input/text-input.component';
import {HttpClientModule} from "@angular/common/http";
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { SubFirstComponent } from './first/sub-first/sub-first.component';
import { SubSecondComponent } from './first/sub-second/sub-second.component';
import { FancyPipe } from './fancy.pipe';
import { FormComponent } from './form/form.component';
import { CustomInputComponent } from './form/custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    TextInputComponent,
    FirstComponent,
    SecondComponent,
    NotFoundComponent,
    IndexComponent,
    SubFirstComponent,
    SubSecondComponent,
    FancyPipe,
    FormComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
