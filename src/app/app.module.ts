import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material';
import { BookCardComponent } from './book-card/book-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
