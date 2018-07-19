import { Component, OnInit } from '@angular/core';
import {SubscriberService} from '../shared/subscriber/Subscriber.service';
import {Subscriber} from '../shared/subscriber/subscriber';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.css']
})
export class SubscriberListComponent implements OnInit {

  subscribers: Subscriber[];

  constructor(private subscriberService: SubscriberService) { }

  ngOnInit() {
    this.subscriberService.getAllSubscribers().subscribe(data => {
      this.subscribers = data;
    });
  }

  remove(subscriber: Subscriber) {
    this.subscriberService.remove(subscriber.id).subscribe(
      data => {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
      }
    );
  }
}
