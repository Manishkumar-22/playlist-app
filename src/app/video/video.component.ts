import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnChanges {
@Input('video') playlist:any;
  constructor() { }
ngOnChanges(playlist) {
    console.log(this.playlist);
  }
  

}
