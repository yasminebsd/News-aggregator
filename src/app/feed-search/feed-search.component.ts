import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {Feed} from '../shared/feed/Feed';
import {FeedService} from '../shared/feed/feed.service';

@Component({
  selector: 'app-feed-search',
  templateUrl: './feed-search.component.html',
  styleUrls: ['./feed-search.component.css']
})
export class FeedSearchComponent implements OnInit {

  feeds: Feed[];
  showSpinner: Boolean = false;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
  }

  search(searchPhrase: string) {
    this.showSpinner = true;
    console.log(searchPhrase);

    setTimeout(() => {
      this.feedService.getFeedBySearch(searchPhrase).subscribe(data => {
        this.feeds = data;
      });
      this.showSpinner = false;
    }, 7000);
  }

}
