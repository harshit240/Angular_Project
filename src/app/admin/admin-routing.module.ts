import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditblogComponent } from './editblog/editblog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
  path:"admin-sidebar",
  component:SidebarComponent
},
{
  path:"admin-createcategory",
  component:CreatecategoryComponent
},
{
  path:"admin-view/:id",
  component:ViewComponent
},
{
  path:"admin-editblog/:id",
  component:EditblogComponent
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }