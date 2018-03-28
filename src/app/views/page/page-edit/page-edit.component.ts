import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  userId: String;
  pageId: String;
  websiteId: String;
  curPage: Page;

  constructor(
    private pageService: PageService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  updatePage() {
    //console.log("updating");
    this.pageService.updatePage(this.pageId, this.curPage).subscribe(
      (data: any) => this.router
        .navigate(['user/', this.userId, 'website', this.websiteId, 'page'])
    );
  }

  deletePage() {
    this.pageService.deletePage(this.pageId).subscribe(
      (data: any) => this.router
        .navigate(['user/', this.userId, 'website', this.websiteId, 'page'])
    );
  }


  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageService.findPageById(params['pid']).subscribe(
        (page: Page) => {
          this.curPage = page;
        }
      );
    });
  }

}
