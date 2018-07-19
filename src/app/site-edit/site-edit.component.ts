import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {SiteService} from '../shared/site/site.service';
import {GiphyService} from '../shared/giphy/giphy.service';
import {NgForm} from '@angular/forms';
import {Site} from '../shared/site/Site';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-site-edit',
  templateUrl: './site-edit.component.html',
  styleUrls: ['./site-edit.component.css']
  /*encapsulation: ViewEncapsulation.None*/
})
export class SiteEditComponent implements OnInit, OnDestroy {

  site: any = {
    nom_site: '',
    url_feed: '',
    type: ''
  };
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private siteService: SiteService,
              private giphyService: GiphyService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.siteService.get(id).subscribe((site: any) => {
          if (site) {
            this.site = site;
            // this.giphyService.get(site.nom_site).subscribe(url => site.giphyUrl = url);
          } else {
            console.log(`Site with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/site-list']);
  }

  save(site: Site) {
    console.log(site);
    this.siteService.add(site).subscribe(result =>  {this.gotoList(); }
    );
  }


}
