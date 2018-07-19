import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscriber} from '../shared/subscriber/subscriber';
import {SubscriberService} from '../shared/subscriber/Subscriber.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Site} from '../shared/site/Site';

@Component({
  selector: 'app-subscriber-edit',
  templateUrl: './subscriber-edit.component.html',
  styleUrls: ['./subscriber-edit.component.css']
})
export class SubscriberEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  subscriber: any = {
  nom: '',
  prenom: '',
  email: '',
  dateDeNaissance: '',
  password: '',
  };

  constructor(private subscriberService: SubscriberService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.subscriberService.getSubscriber(id).subscribe((subscriber: any) => {
          if (subscriber) {
            this.subscriber = subscriber;
            // this.giphyService.get(site.nom_site).subscribe(url => site.giphyUrl = url);
          } else {
            console.log(`Subscriber with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/subscriber-list']);
  }

  save(subscriber: Subscriber) {
    console.log(subscriber);
    this.subscriberService.add(subscriber).subscribe(result =>  {this.gotoList(); }
    );
  }

}
