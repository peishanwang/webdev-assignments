import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websiteId: String;

  constructor(
    private pageService: PageService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  createPage(pageName, pageTitle) {
    const newPage = new Page(undefined, pageName, this.websiteId, pageTitle);
    this.pageService.createPage(this.websiteId, newPage).subscribe(
      (data: any) => this.router
        .navigate(['user/', this.userId, 'website', this.websiteId, 'page'])
    );
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
    });
  }

}
