import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsListComponent } from './notifications-list.component';

const routes:Routes = [
   {path:'',component:NotificationsListComponent,children:[
    {path:':id',component:NotificationsListComponent}
   ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class NotificationsListRoutingModule { }
