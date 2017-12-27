import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  video:any;
playTheVideo(video){
this.video=video;
console.log(this.video);
}
}
