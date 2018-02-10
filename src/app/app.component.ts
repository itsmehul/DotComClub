import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth) {
  }

  login() {
    let a=prompt('Enter club code');
    if(a=='cookie'){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());}
  }
  logout() {
    this.afAuth.auth.signOut();
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

      $(window).on('scroll',()=>{
        if($(this).scrollTop()>100){
          $('.navbar').css({'background-color':'rgba(0, 82, 0,0.09)','box-shadow':'none'});
          $('.btn button').css({'background-color':'rgb(0, 82, 0)'});
        }else{
          $('.navbar').css('background-color', 'rgb(0, 82, 0)');
          $('.btn button').css({'background-color':'rgba(0, 82, 0,0.09)'});
        }
      });


    });
  }
}
