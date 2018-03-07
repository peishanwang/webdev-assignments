import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: String;
  websites: Website[];

  constructor(
    private websiteService: WebsiteService,
    private activateRoute: ActivatedRoute) { }

  createWebsite(webName, webDes) {
    const newWebsite = new Website(undefined, webName, this.userId, webDes);
    this.websiteService.createWebsite(this.userId, newWebsite);
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.websiteService.findWebsitesByUser(params['uid']).subscribe(
        (websites) => {
          this.websites = websites;
        }
      );
    });
  }

}
