import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketsService } from '../shared/providers/web-sockets.service';
import { AuthService } from '../auth/shared/providers/auth.service';
import { ProjectService } from '../shared/providers/project.service';

import { Project } from '../shared/models/project.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TaskService } from '../shared/providers/task.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, OnDestroy {

  projects:Project[]=[]
  constructor(private wSService:WebSocketsService,
                
                public projectService:ProjectService,

                private authService:AuthService,
                
                private taskService:TaskService,
                private deviceDetectorService: DeviceDetectorService){ }
  ngOnInit() {

    this.wSService.emit('user-in-app', { userId: this.authService.userOnline._id })
    this.projectService.getProjects().subscribe((projects)=>{
      this.projects = projects;
      
      this.projects.forEach((eachProject:Project)=>{
         this.wSService.emit('user-in-project',{projectId:eachProject._id})
      })

      this.projectService.listenningProjectSockets()
      this.taskService.listenningTaskSockets();
    })
  }
  ngOnDestroy(){
    this.wSService.emit('user-out-app')
  }

  checkIfIsMobile(){
    return this.deviceDetectorService.isMobile()
  }
}
