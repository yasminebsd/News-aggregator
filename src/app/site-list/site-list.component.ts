import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';

import {SiteService} from '../shared/site/site.service';
import {GiphyService} from '../shared/giphy/giphy.service';
import {Site} from '../shared/site/Site';

import {MatTableDataSource, MatPaginator} from '@angular/material';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit, AfterViewInit {

  /*dataSource = new SiteDataSource(this.siteService);*/
  sites: Site[];
  displayedColumns = ['Id', 'Site name', 'Site url', 'Type', 'Edit', 'Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Site>(this.sites);

  constructor(private siteService: SiteService,
              private giphyService: GiphyService) { }

  ngOnInit() {
    this.siteService.getAll().subscribe(data => {
      this.sites = data;
      /*for (const site of this.sites) {
        this.giphyService.get(site.nom_site).subscribe(url => site.giphyUrl = url);
      }*/
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  remove(site: Site): void {
    console.log(site.id_site);
    this.siteService.remove(site.id_site)
    .subscribe( data => {
    this.sites = this.sites.filter(u => u !== site);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}

/*export class SiteDataSource extends DataSource<any> {
  constructor(private siteService: SiteService){
    super();
  }

  connect(): Observable<Site[]> {
      return this.siteService.getAll();
  }

  disconnect() {}

}*/
