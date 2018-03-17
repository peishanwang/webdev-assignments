import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {environment} from "../../environments/environment";

@Injectable()
export class WebsiteService {
  constructor(private http: Http){}

  baseUrl = environment.baseUrl;


  createWebsite(userId: String, website: Website){
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website).map((response: Response) => {
      //console.log(response.json());
      return response.json();
    })
  }

  findWebsitesByUser(userId: String){
    const url = this.baseUrl +  '/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      //console.log(response.json());
      return response.json();
    });
  }

  updateWebsite(newWebsite: Website) {
    const url = this.baseUrl + '/api/website/' + newWebsite._id;
    return this.http.put(url, newWebsite).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteById(websiteId: String){
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url).map((response: Response) => {
      //console.log(response);
      return response.json();
    });
  }

  deleteWebsite(websiteId: String){
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }
}
