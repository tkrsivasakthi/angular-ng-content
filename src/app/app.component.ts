import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-router-sample';

  public mobile_products = [
    { id: 1, name: 'redmi' },
    { id: 2, name: 'LG' },
    { id: 3, name: 'Google' },
    { id: 4, name: 'iphone' },
  ];

  public Home_products = [
    { id: 1, name: 'Tv' },
    { id: 2, name: 'fridge' },
    { id: 3, name: 'Washing machine' },
    { id: 4, name: 'Iron Box' },
  ];

  get test() {
    console.log('test AppComponent');
    return 1;
  }
  ngOnInit() {
    console.log('app');
  }
  clickA() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
