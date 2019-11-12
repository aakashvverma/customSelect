import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Colors: any[];
  searchable = true;
  multiselect = true;

  constructor() {
    this.Colors = [
     {title: 'red' , checked: false},
     {title: 'yellow' , checked: false},
     {title: 'green' , checked: false},  /// --> Array of Objects
     {title: 'blue' , checked: false},
    ];

   // this.Colors = ['red', 'yellow', 'green', 'blue'];   // --> Simple Array
  }
}
