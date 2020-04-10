import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'Repos';
//   repo = 'https://github.com/aenshtyn/'
// }
repos:string[];

constructor(){
  this.repos = ['Watch finding Nemo', 'Buy cookies', 'Get new phone case']
}
}
