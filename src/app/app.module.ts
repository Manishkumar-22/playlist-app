import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoComponent } from './video/video.component';
import { VideoServiceService } from './video-service.service';
import { HttpModule} from '@angular/http'


@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    VideoComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [VideoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
