import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  userId: String;
  websites: Website[];
  webName: String;
  webDes: String;

  constructor(
    private websiteService: WebsiteService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService) {}

  createWebsite() {
    const newWebsite = new Website(this.webName, this.userId, this.webDes);
    this.websiteService.createWebsite(this.userId, newWebsite).subscribe(
      (data: any) => this.router.navigate(['/user', '/website'])
    );
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
  }

}
