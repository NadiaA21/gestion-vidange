import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, components} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';

@NgModule({
  declarations: [
    components,
    AppComponent,
    MenuComponent,
    PageNotFoundedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
