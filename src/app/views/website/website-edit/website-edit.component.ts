import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute} from '@angular/router';
import {User} from "../../../models/user.model.client";

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: String;
  curWebsite: Website;
  websites: Website[];

  constructor(
    private websiteService: WebsiteService,
    private activateRoute: ActivatedRoute) { }

  updateWebsite(website) {
    console.log(website);
    this.websiteService.updateWebsite(website);
  }

  deleteWebsite(wid) {
    this.websiteService.deleteWebsite(wid);
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.websiteService.findWebsiteById(params['wid']).subscribe(
        (website: Website) => {
          this.curWebsite = Object.assign({}, website);
        }
      );
      this.websiteService.findWebsitesByUser(params['uid']).subscribe(
        (websites) => {
          this.websites = websites;
        }
      );
    });
  }

}
