import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayAboutComponent } from './display-about/display-about.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { DisplayComponent } from './display/display.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { EditblogComponent } from './editblog/editblog.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{
  path:"admin-dashboard",
  component:DashboardComponent
},
{
  path:"admin-createblog",
  component:CreateblogComponent
},
{
  path:"admin-display",
  component:DisplayComponent
},
{
  path:"admin-displaycategory",
  component:DisplaycategoryComponent
},
{
  path:"admin-display-contacts",
  component:DisplayContactComponent
},
{
  path:"admin-display-about",
  component:DisplayAboutComponent
},
{
  path:"admin-view-contact/:id",
  component:ViewContactComponent
},
{
  path:"admin-sidebar",
  component:SidebarComponent
},
{
  path:"admin-createcategory",
  component:CreatecategoryComponent
},
{
  path:"admin-viewcategory/:id",
  component:ViewCategoryComponent
},
{
  path:"admin-view/:id",
  component:ViewComponent
},
{
  path:"admin-editblog/:id",
  component:EditblogComponent
},
{
  path:"admin-edit-about/:id",
  component:EditAboutComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
