import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateblogComponent } from './createblog/createblog.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditblogComponent } from './editblog/editblog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewComponent } from './view/view.component';
import { DisplayComponent } from './display/display.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { DisplayAboutComponent } from './display-about/display-about.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    CreateblogComponent,
    DisplaycategoryComponent,
    DashboardComponent,
    EditblogComponent,
    SidebarComponent,
    ViewComponent,
    DisplayComponent,
    CreatecategoryComponent,
    DisplayContactComponent,
    ViewContactComponent,
    ViewCategoryComponent,
    DisplayAboutComponent,
    EditAboutComponent,
    SignupComponent,
    
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
  exports:[
    DashboardComponent,
  CreateblogComponent,
  EditblogComponent,
  DisplayComponent,
  SidebarComponent,
  DisplaycategoryComponent,
  ViewComponent,
  CreatecategoryComponent
]
})
export class AdminModule { }
