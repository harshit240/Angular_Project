import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateblogComponent } from './admin/createblog/createblog.component';
import { CreatecategoryComponent } from './admin/createcategory/createcategory.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DisplayComponent } from './admin/display/display.component';
import { DisplaycategoryComponent } from './admin/displaycategory/displaycategory.component';
import { EditblogComponent } from './admin/editblog/editblog.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"detail/:id",
    component:DetailComponent
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
