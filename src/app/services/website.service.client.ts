import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {environment} from "../../environments/environment";


@Injectable()
export class WebsiteService {

  /*websites: Website[] = [
    new Website('123', 'Facebook', '456', 'Lorem' ),
    new Website('234', 'Tweeter', '456', 'Lorem' ),
    new Website('456', 'Gizmodo', '456', 'Lorem' ),
    new Website('890', 'Go', '123', 'Lorem' ),
    new Website('567', 'Tic Tac Toe', '123', 'Lorem' ),
    new Website('678', 'Checkers', '123', 'Lorem'),
    new Website('789', 'Chess', '234', 'Lorem'),
  ];*/

  /*api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };*/

  constructor(private http: Http){}

  baseUrl = environment.baseUrl;


  createWebsite(userId: String, website: Website){
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website).map((response: Response) => {
      return response.json();
    })
  }

  findWebsitesByUser(userId: String){
    const url = this.baseUrl +  '/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWebsite(newWebsite: Website) {
    const url = this.baseUrl + '/website/' + newWebsite._id;
    return this.http.put(url, newWebsite).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteById(websiteId: String){
    const url = this.baseUrl + '/website/' + websiteId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(websiteId: String){
    const url = this.baseUrl + '/website/' + websiteId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }
}
