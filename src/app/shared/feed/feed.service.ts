import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feed} from './Feed';
import { zip } from 'rxjs/observable/zip';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  public api = '//localhost:8082/';

  constructor(private http: HttpClient) { }

  public getFeedBySearch(searchPhrase: string): Observable<Feed[]> {
    const obs0 = this.http.post<Feed[]>(this.api + 'jsoup', searchPhrase);
    const obs1 = this.http.post<Feed[]>(this.api, searchPhrase);
    const obs2 = this.http.post<Feed[]>(this.api + 'twitter', searchPhrase);
    return zip(obs0, obs1, obs2)
      .pipe(map(feedArrayArray =>  feedArrayArray[1].concat(feedArrayArray[2], feedArrayArray[0])));
  }


}
