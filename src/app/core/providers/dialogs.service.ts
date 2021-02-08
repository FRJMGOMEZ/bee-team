import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../models/project.model';
import { TaskDialogSmartComponent } from '../../shared/components/task-detail/task-dialog-detail-smart.component';
import { TasksListDialogSmartComponent } from '../../shared/components/tasks-list-dialog/tasks-list-dialog-smart.component';
import { TaskDialogEditionAndCreationSmartComponent } from '../../shared/components/task-edition-and-creation/task-dialog-edition-and-creation-smart.component';
import { ProjectEditionAndCreationSmartComponent } from '../../shared/components/project-edition-and-creation/project-editon-and-creation-smart-component';


@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  taskId:string;
  tasksDate:number;
  constructor(private dialog: MatDialog) { }

  openTaskInfoDialog(taskId:string,prevDialog?:string){
    this.taskId = taskId;
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.maxHeight='500px';
    dialog.width = '500px'
    dialog.data = prevDialog ? {taskId,prevDialog} : {taskId}
    let dialogRef: MatDialogRef<any> = this.dialog.open(TaskDialogSmartComponent, dialog)
    let subs = dialogRef.afterClosed().subscribe((data)=>{
      if (data) {
        if (data.prevDialog) {
          this.checkPrevDialog(data.prevDialog)
        }else if(data.nextDialog){
          this.checkNextDialog(data.nextDialog,data.dataRequired,'taskInfo')
        }
      }
      subs.unsubscribe()
    })
  }

  openTasksListInfoDialog(date:number, prevDialog?:string){
    this.tasksDate = date;
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.data = prevDialog ? { date, prevDialog }: {date};
    dialog.width = '300px'
    let dialogRef: MatDialogRef<any> = this.dialog.open(TasksListDialogSmartComponent, dialog)
    let subs = dialogRef.afterClosed().subscribe((data)=>{
      if(data){
          if(data.prevDialog){
            this.checkPrevDialog(data.prevDialog)
          }else if(data.nextDialog){
             this.checkNextDialog(data.nextDialog,data.taskId,'tasksList')
          }
      }
      subs.unsubscribe()
    })
  }

  openEditCreateTaskDialog(taskId?: string, prevDialog?: string) {
    const projectDialog = new MatDialogConfig();
    projectDialog.disableClose = true;
    projectDialog.autoFocus = true;
    projectDialog.panelClass = 'custom-dialog-container';
    projectDialog.data = taskId ? prevDialog ? {taskId,prevDialog}: {taskId} : null;
    let dialogRef = this.dialog.open(TaskDialogEditionAndCreationSmartComponent, projectDialog);
    let subs = dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        if (data.prevDialog) {
          this.checkPrevDialog(data.prevDialog)
        } else if (data.nextDialog) {
          this.checkNextDialog(data.nextDialog, data.taskId, 'editCreateTask')
        }
      }
      subs.unsubscribe()
    })
  }
  openEditProjectDialog(project: Project) {
    const projectDialog = new MatDialogConfig();
    projectDialog.disableClose = true;
    projectDialog.autoFocus = true;
    projectDialog.data = { project };
    this.dialog.open(ProjectEditionAndCreationSmartComponent, projectDialog);
  }

  openPostProjectDialog() {
    const projectDialog = new MatDialogConfig();
    projectDialog.disableClose = true;
    projectDialog.autoFocus = true;
    let dialogRef = this.dialog.open(ProjectEditionAndCreationSmartComponent, projectDialog);
  }

  checkPrevDialog(prevDialog: string) {
    switch (prevDialog) {
      case 'tasksList': this.openTasksListInfoDialog(this.tasksDate)
        break;
      case 'taskInfo': this.openTaskInfoDialog(this.taskId);
        break;
      case 'editCreateTask': this.openEditCreateTaskDialog(this.taskId);
        break;
    }
  }
  checkNextDialog(nextDialog: string, dataRequired: any, prevDialog: string) {
    switch (nextDialog) {
      case 'tasksList': typeof dataRequired === 'number' ? this.openTasksListInfoDialog(dataRequired, prevDialog) : null
        break;
      case 'taskInfo': typeof dataRequired === 'string' ? this.openTaskInfoDialog(dataRequired, prevDialog) : null
        break;
      case 'editCreateTask': typeof dataRequired === 'string' ? this.openEditCreateTaskDialog(dataRequired, prevDialog) : null;
        break;
    }
  }
  
}
