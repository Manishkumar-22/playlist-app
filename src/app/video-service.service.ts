import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoServiceService {

  constructor(private http: Http) { }

  getVideoData(){
    return this.http.post('https://q76udcq2l7.execute-api.us-east-1.amazonaws.com/temp/playlist',{
  "demo": true,
  "type": "TV_SERIES"
}).map(response=>response.json());
  }

}
