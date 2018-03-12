import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
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
    private activateRoute: ActivatedRoute,
    private router: Router) {}

  updateWebsite() {
    this.websiteService.updateWebsite(this.curWebsite).subscribe(
      (data: any) => this.router.navigate(['user/', this.userId, 'website'])
    );
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.curWebsite._id).subscribe(
      (data: any) => this.router.navigate(['user/', this.userId, 'website'])
    );
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.userId = params['uid']
      this.websiteService.findWebsiteById(params['wid']).subscribe(
        (website: Website) => {
          //console.log(website);
          this.curWebsite = website;
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
