import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LpDateSelectorModule } from '../../../../library/components/lp-date-selector/lp-date-selector.module';
import { LpPipesModule } from '../../../../library/lp-pipes/lp-pipes.module';
import { LpDialogsModule } from '../../../../../../projects/lp-dialogs/src/lib/lp-dialogs.module';
import { MaterialModule } from '../../../../core/shared/material/material.module';
import { TaskManagerFilterComponent } from '../../components/task-manager-filter/task-manager-filter.component';
import { TaskManagerListComponent } from '../../components/task-manager-list/task-manager-list.component';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerComponent } from './task-manager.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskManagerFilterComponent,
    TaskManagerListComponent
  ],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    LpDateSelectorModule,
    LpPipesModule,
    LpDialogsModule,
    FormsModule
  ]
})
export class TaskManagerModule { }
