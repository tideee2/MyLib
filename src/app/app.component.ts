import { Component } from '@angular/core';
import {Book} from './book';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyLib';
  email = 'test@gmail.com';
}
