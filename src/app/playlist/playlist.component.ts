import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { VideoServiceService } from '../video-service.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
@Output() play=new EventEmitter<JSON>();
playlists:any[];
title=""

  constructor(videoService:VideoServiceService) {
videoService.getVideoData().subscribe((data)=>{
this.playlists=data.RESULT;
console.log(this.playlists);
this.title=this.playlists[0].title;
this.play.emit(this.playlists[0]);
});

   }
playVideo(playList:any){
this.play.emit(playList);
this.title=playList.title;

}
  ngOnInit() {
  }

}
