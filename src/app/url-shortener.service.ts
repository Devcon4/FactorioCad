import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environments/environment';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
@Injectable()
export class UrlShortenerService {

  constructor(private http: Http) { }

  getCurrent(callback: (shortUrl: string) => void) {
    console.log("Can't get a shortener working for now... (Tinyurl has CORS issues, Goo.gl has problems with the blueprint string)");
    callback(window.location.href)
    // this.http.get('http://tinyurl.com/api-create.php?url=' + encodeURIComponent(window.location.href)).subscribe(r => callback(r.json()));
  }
}
