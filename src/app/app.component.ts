import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
mail: string;
pwd: string;

  constructor(public aS: AuthService) {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  login() {
    $('#myModal').css('display', 'block');
  }
  submit(){
    this.aS.emailLogin(this.mail,this.pwd);
    $('#myModal').css('display', 'none');
  }
  close() {
    $('#myModal').css('display', 'none');
  }
  logout(){
    this.aS.signOut();
  }

  ngOnInit() {

    $(document).ready(function () {
      $('#nav-icon2').click(function () {
        $(this).toggleClass('open');
        if ($('.sidebar').width() == 0) {
          $('.sidebar').animate({ 'width': '80vw' }, '100ms', 'swing');
          $('.smenu').css('visibility', 'visible');
        }
        else {
          $('.sidebar').animate({ 'width': '0vw' }, '100ms', 'swing');
          $('.smenu').css('visibility', 'hidden');
        }

      });
      $('.sidebar li').click(() => {
        $('#nav-icon2').toggleClass('open');
        $('.sidebar').animate({ 'width': '0vw' }, '100ms', 'swing');
        $('.smenu').css('visibility', 'hidden');
      });

      $(window).on('scroll', () => {
        if ($(this).scrollTop() > 100) {
          $('.navbar').css({ 'background-color': 'rgba(0, 82, 0,0.09)', 'box-shadow': 'none' });
          $('.btn button').css({ 'background-color': 'rgb(0, 82, 0)' });
        } else {
          $('.navbar').css('background-color', 'rgb(0, 82, 0)');
          $('.btn button').css({ 'background-color': 'rgba(0, 82, 0,0.09)' });
        }
      });
      $(window).on('click', (event)=>{
        if (event.target == $('#myModal')) {
          $('#myModal').css('display', 'none');
        }
      });
    });
  }
}
