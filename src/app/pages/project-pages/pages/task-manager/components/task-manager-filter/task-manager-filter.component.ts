import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { LpObject } from 'lp-operations';
import { User } from '../../../../../../core/models/user.model';
@Component({
  selector: 'app-task-manager-filter',
  templateUrl: './task-manager-filter.component.html',
  styleUrls: ['./task-manager-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskManagerFilterComponent implements OnChanges {

  @Output() getItems: EventEmitter<string> = new EventEmitter<string>();
  @Input() projectId:string
  @Input() participants:User[]
  filters={
    _id:'',
    name:'',
    createdBy:'',
    participants:[],
    status:'',
    from:null,
    to:null,
    priority:'',
    project:''
  }
  options = {
     status:['done','pending','overdue'],
     createdBy:[],
     participants:[],
     priority:[{label:'low',value:3},{label:'medium',value:2},{label:'high',value:1}]
  }
  constructor() { }

  ngOnInit(){
    this.filters.project = this.projectId;
  }
  ngOnChanges(changes:SimpleChanges){
       if(changes.participants && this.participants){
         this.options.participants = LpObject.copyObject(this.participants);
         this.options.createdBy = this.participants.filter((p)=>{ return p.role === 'ADMIN_ROLE'})
       }
  }

  setDate(date:Date,key:string){
     this.filters[key] = date.getTime()
  }
  searchItems(){
    let queryString = LpObject.toQueryString(this.filters);
    this.getItems.next(queryString)
  }


}
