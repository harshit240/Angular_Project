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
