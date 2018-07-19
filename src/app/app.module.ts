import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {MaterialModule} from './material.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

const appRoutes = [
  {path: '', redirectTo: '/search/feed', pathMatch: 'full'},
  {path: 'site-list', component: SiteListComponent},
  {path: 'site-add', component: SiteEditComponent},
  {path: 'site-edit/:id', component: SiteEditComponent},
  {path: 'search/feed', component: FeedSearchComponent},
  {path: 'subscriber-list', component: SubscriberListComponent},
  {path: 'subscriber-edit/:id', component: SubscriberEditComponent},
  {path: 'subscriber-add', component: SubscriberEditComponent}
]

import { AppComponent } from './app.component';
import {SiteService} from './shared/site/site.service';
import { SiteListComponent } from './site-list/site-list.component';
import {GiphyService} from './shared/giphy/giphy.service';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { FeedSearchComponent } from './feed-search/feed-search.component';
import {FeedService} from './shared/feed/feed.service';
import { AbonneEditComponent } from './abonne-edit/abonne-edit.component';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { SubscriberEditComponent } from './subscriber-edit/subscriber-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteListComponent,
    SiteEditComponent,
    FeedSearchComponent,
    AbonneEditComponent,
    SubscriberListComponent,
    SubscriberEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [SiteService,
              GiphyService,
              FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
