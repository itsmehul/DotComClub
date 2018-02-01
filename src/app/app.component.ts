import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit() {

    $('button').click(function (e) {
      $('.btn>button').removeClass('btn-clicked');
      $(e.currentTarget).toggleClass("btn-clicked");
    });
  }

}
