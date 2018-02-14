import { Component, OnInit } from '@angular/core';
import * as videojs  from 'video.js/dist/video'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var options = {};
 var getId = document.getElementById('my-player');
var player = videojs(getId, options, function onPlayerReady() {
  videojs.log('Your player is ready!');
 
  // In this context, `this` is the player that was created by Video.js.
  this.play();
 
  // How about an event listener?
  this.on('ended', function() {
    videojs.log('Awww...over so soon?!');
  });
});
  }

}
