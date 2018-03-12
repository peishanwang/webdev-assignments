import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './views/users/login/login.component';
import {ProfileComponent} from './views/users/profile/profile.component';
import {RegisterComponent} from './views/users/register/register.component';
import {WebsiteListComponent} from "./views/website/website-list/website-list.component";
import {WebsiteEditComponent} from "./views/website/website-edit/website-edit.component";
import {WebsiteNewComponent} from "./views/website/website-new/website-new.component";
import {WidgetChooserComponent} from "./views/widget/widget-chooser/widget-chooser.component";
import {PageListComponent} from "./views/page/page-list/page-list.component";
import {PageNewComponent} from "./views/page/page-new/page-new.component";
import {PageEditComponent} from "./views/page/page-edit/page-edit.component";
import {WidgetListComponent} from "./views/widget/widget-list/widget-list.component";
import {WidgetEditComponent} from "./views/widget/widget-edit/widget-edit.component";
import {WidgetHeaderComponent} from "./views/widget/widget-edit/widget-header/widget-header.component";
import {WidgetImageComponent} from "./views/widget/widget-edit/widget-image/widget-image.component";
import {WidgetYoutubeComponent} from "./views/widget/widget-edit/widget-youtube/widget-youtube.component";
import {WidgetHtmlComponent} from "./views/widget/widget-edit/widget-html/widget-html.component";
import {WidgetTextComponent} from "./views/widget/widget-edit/widget-text/widget-text.component";

const appRoutes: Routes = [
  //path from root
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:uid', component: ProfileComponent},
  {path: 'user/:uid/website', component: WebsiteListComponent},
  {path: 'user/:uid/website/new', component: WebsiteNewComponent},
  {path: 'user/:uid/website/:wid', component: WebsiteEditComponent},
  {path: 'user/:uid/website/:wid/page', component: PageListComponent},
  {path: 'user/:uid/website/:wid/page/new', component: PageNewComponent},
  {path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/header', component: WidgetHeaderComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: WidgetImageComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: WidgetYoutubeComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: WidgetHtmlComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: WidgetTextComponent}
];
/*
*
1.	login, , default							LoginComponent
2.	register								RegisterComponent
3.	user/:uid								ProfileComponent
4.	user/:uid/website							WebsiteComponent
5.	user/:uid/website/new						WebsiteNewComponent
6.	user/:uid/website/:wid						WebsiteEditComponent
7.	user/:uid/website/:wid/page					PageListComponent
8.	user/:uid/website/:wid/page/new				PageNewComponent
9.	user/:uid/website/:wid/page/:pid				PageEditComponent
10.	user/:uid/website/:wid/page/:pid/widget			WidgetListComponent
11.	user/:uid/website/:wid/page/:pid/widget/new		WidgetChooserComponent
12.	user/:uid/website/:wid/page/:pid/widget/:wgid		WidgetEditComponent

*
* */

export const routing = RouterModule.forRoot(appRoutes);
