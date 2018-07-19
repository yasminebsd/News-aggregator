import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Site} from './Site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  public api = '//localhost:8082';
  public site_api = this.api + '/admin/FeedSites';

  constructor(private http: HttpClient) { }

  // httpclient effectue une requete de type get pour récupérer la liste des sites fournies par le controller adéquat, ce qui a était récupéré est stocké dans un objet any (prend n'importe quel type d'objet)
  getAll(): Observable<Site[]> {
    return this.http.get<Site[]>(this.site_api);
  }

  get(id: string): Observable<Site> {
    return this.http.get<Site>(this.site_api + '/' + id);
  }

  update(site: Site): Observable<Site> {
    return this.http.put<Site>(this.site_api + '/' + site.id_site, site);
  }

  add(site: Site) {
    return this.http.post(this.site_api, site);
  }

  remove(id: number) {
    return this.http.delete(this.site_api + '/' + id.toString());
  }
}
