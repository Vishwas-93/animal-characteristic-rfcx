import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalAttributeComponent } from './components/animal-attribute/animal-attribute.component';
import { AnimalAttributeService } from './services/animal-attribute.service';

@NgModule({
  declarations: [
    AppComponent,
    AnimalAttributeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AnimalAttributeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
