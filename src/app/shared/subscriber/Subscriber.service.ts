import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subscriber} from './subscriber';
import {Observable} from 'rxjs';
import {Site} from '../site/Site';


@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  public api = '//localhost:8082';
  public site_api = this.api + '/Subscribers';

  constructor(private http: HttpClient) { }

  getAllSubscribers(): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>(this.site_api);
  }

  getSubscriber(id: string): Observable<Subscriber> {
    return this.http.get<Subscriber>(this.site_api + '/' + id);
  }

  update(subscriber: Subscriber): Observable<Subscriber> {
    return this.http.put<Subscriber>(this.site_api + '/' + subscriber.id, subscriber);
  }

  add(subscriber: Subscriber) {
    return this.http.post(this.site_api, subscriber);
  }

  remove(id: number) {
    return this.http.delete(this.site_api + '/' + id.toString());
  }
}
