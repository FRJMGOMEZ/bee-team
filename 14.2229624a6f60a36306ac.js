(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"w/+e":function(t,e,c){"use strict";c.r(e),c.d(e,"CalendarSchedulerDayModule",(function(){return Q}));var a=c("ofXK"),i=c("lJxs");class s{constructor(t){this.date=t.getTime()}}var n=c("Brg/"),r=c("fXoL"),o=c("S6We"),d=c("qmzK"),h=c("tyNb"),l=c("osZT"),g=c("FLjf"),u=c("XiUz"),f=c("znSr"),m=c("Wp6s"),p=c("NFeN"),k=c("Qu3c");const v=function(t){return{"mat-card-day-selected":t}};function b(t,e){if(1&t){const t=r.ic();r.hc(0,"mat-card",19),r.pc("click",(function(){r.Hc(t);const c=e.$implicit;return r.tc().selectDate(c)})),r.hc(1,"div"),r.hc(2,"a"),r.Pc(3),r.uc(4,"date"),r.gc(),r.gc(),r.gc()}if(2&t){const t=e.$implicit,c=r.tc();r.zc("ngClass",r.Bc(5,v,c.isDaySelected(t))),r.Ob(3),r.Qc(r.wc(4,2,t,"E, d"))}}function x(t,e){if(1&t&&(r.hc(0,"mat-card",20),r.hc(1,"div"),r.Pc(2),r.uc(3,"date"),r.gc(),r.gc()),2&t){const t=e.$implicit;r.Ob(2),r.Qc(r.wc(3,1,t.date,"H"))}}const w=function(t){return{"":t}};function y(t,e){if(1&t&&r.cc(0,"div",23,24),2&t){const t=e.$implicit,c=r.Fc(1),a=r.tc().$implicit,i=r.tc();r.Qb(1===t.priority?"div-task-high-p":t-i.priority==2?"div-task-medium-p":"div-task-low-p"),r.zc("ngClass",r.Bc(3,w,i.taskRender(c,t,a,"regular")))}}function O(t,e){if(1&t&&(r.hc(0,"mat-card",20,21),r.hc(2,"div",15),r.Nc(3,y,2,5,"div",22),r.gc(),r.gc()),2&t){const t=r.tc();r.Mc("height","66vh"),r.Ob(3),r.zc("ngForOf",t.tasks)}}function D(t,e){if(1&t){const t=r.ic();r.hc(0,"div"),r.hc(1,"mat-icon",25),r.pc("click",(function(){r.Hc(t);const c=e.$implicit;return r.tc().checkTask.emit(c._id)})),r.Pc(2,"assignment"),r.gc(),r.gc()}2&t&&(r.Mc("height","30px"),r.Ob(1),r.Mc("margin-left","15px"))}const F=function(t){return{"card-selected-day":t}};function S(t,e){if(1&t){const t=r.ic();r.hc(0,"mat-card",26),r.hc(1,"div"),r.hc(2,"a",27),r.pc("click",(function(){r.Hc(t);const c=e.$implicit;return r.tc().selectDate(c)})),r.Pc(3),r.uc(4,"date"),r.gc(),r.gc(),r.gc()}if(2&t){const t=e.$implicit,c=r.tc();r.zc("ngClass",r.Bc(5,F,c.isDaySelected(t))),r.Ob(3),r.Qc(r.wc(4,2,t,"d"))}}function T(t,e){if(1&t){const t=r.ic();r.hc(0,"div",28),r.hc(1,"mat-icon",27),r.pc("click",(function(){r.Hc(t);const c=e.$implicit;return r.tc().checkTask.emit(c._id)})),r.Pc(2,"remove_red_eye"),r.gc(),r.gc()}2&t&&r.Mc("margin-left","2vw")("width","15px")}function M(t,e){if(1&t&&(r.hc(0,"div",29),r.Pc(1),r.uc(2,"date"),r.gc()),2&t){const t=e.$implicit,c=r.tc();r.Mc("height",100/c.hours.length,"%"),r.Ob(1),r.Rc(" ",r.wc(2,3,t.date,"H")," ")}}function C(t,e){if(1&t&&r.cc(0,"div",31,24),2&t){const t=e.$implicit,c=r.Fc(1),a=r.tc().$implicit,i=r.tc();r.Mc("margin-left","2vw")("width","15px"),r.zc("matTooltip",t.name)("ngClass",r.Bc(6,w,i.taskRender(c,t,a,"small")))}}function z(t,e){if(1&t&&(r.hc(0,"div",4),r.Nc(1,C,2,8,"div",30),r.gc()),2&t){const t=r.tc();r.Mc("height",100/t.hours.length,"%"),r.Ob(1),r.zc("ngForOf",t.tasks)}}let P=(()=>{class t{constructor(t,e){this.renderer=t,this.tasksService=e,this.tasks=[],this.tasksRenderized=0,this.checkTask=new r.r,this.putTask=new r.r,this.dateSelection=new r.r}ngOnChanges(t){t.tasks&&this.tasks&&(this.tasksRenderized=0),t.selectedDate&&this.selectedDate&&(this.week=this.getWeek(this.selectedDate))}taskRender(t,e,c,a){if(this.hasTask(e,c)&&this.tasksRenderized<=this.tasks.length*this.hours.length*2){let i=0;c.date+36e5-e.startDate>36e5&&e.endDate-c.date>36e5?(i=100,this.renderTask(t,a,i,e)):c.date-e.startDate<36e5?(i=Math.ceil(100*(c.date+36e5-e.startDate)/36e5),this.renderer.setStyle(t,"regular"===a?"margin-left":"margin-top",100-i+"%"),this.renderTask(t,a,i,e)):(i=Math.ceil(100*(e.endDate-c.date)/36e5),this.renderer.setStyle(t,"regular"===a?"margin-right":"margin-bottom",100-i+"%"),this.renderTask(t,a,i,e))}}hasTask(t,e){return e.date+36e5>t.startDate&&e.date<t.endDate}renderTask(t,e,c,a){console.log({percent:c}),"regular"===e?(this.renderer.setStyle(t,"background-color",this.taskColor(a)),this.renderer.setStyle(t,"width",c+"%")):(this.renderer.setStyle(t,"background-color",this.taskColor(a)),this.renderer.setStyle(t,"height",c+"%")),this.tasksRenderized++}taskColor(t){let e=new Date,c=g.a;return t.endDate>e.getTime()?t.endDate>e.getTime()+c?"#5464bd":"#d1870c":"#ff0000"}getWeek(t){let e=[];for(let c=-t.getDay();c<7-t.getDay();c++)e.push(new Date(t.getFullYear(),t.getMonth(),t.getDate()+c));return e}isDaySelected(t){return t.getTime()===this.selectedDate.getTime()}selectDate(t){this.selectedDate=t,n.c.set("state-data",this.selectedDate,"date-selected"),this.dateSelection.next(this.selectedDate)}}return t.\u0275fac=function(e){return new(e||t)(r.bc(r.Q),r.bc(o.a))},t.\u0275cmp=r.Vb({type:t,selectors:[["app-calendar-scheduler-day"]],inputs:{hours:"hours",tasks:"tasks",selectedDate:"selectedDate"},outputs:{checkTask:"checkTask",putTask:"putTask",dateSelection:"dateSelection"},features:[r.Mb],decls:22,vars:24,consts:[["fxLayout","row","fxShow.gt-sm","","fxHide.lt-md",""],["fxFlex","5","fxLayout","column"],["class","mat-card-day","fxLayout","column",3,"ngClass","click",4,"ngFor","ngForOf"],["fxFlex","95","fxLayout","column"],["fxLayout","row"],["fxFlex","90","class","mat-card-hour",4,"ngFor","ngForOf"],["fxFlex","10"],["fxFlex","90","class","mat-card-hour",3,"height",4,"ngFor","ngForOf"],[3,"height",4,"ngFor","ngForOf"],["fxHide.gt-sm","","fxShow.lt-md","","fxLayout","column"],["fxFlex","10","fxLayout","row"],["class","mat-card-week-day","fxLayout","column",3,"ngClass",4,"ngFor","ngForOf"],["fxLayout","column","fxFlex","90"],["fxLayoutAlign","center",3,"margin-left","width",4,"ngFor","ngForOf"],["fxFlex","100","fxHide.gt-sm","","fxShow.lt-md","","fxLayout","row"],["fxLayout","column"],["class","div-date",3,"height",4,"ngFor","ngForOf"],["fxLayout","column",1,"div-scrollable-tasks"],["fxLayout","row",3,"height",4,"ngFor","ngForOf"],["fxLayout","column",1,"mat-card-day",3,"ngClass","click"],["fxFlex","90",1,"mat-card-hour"],["cardHour",""],[3,"class","ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["taskDiv",""],["color","primary",3,"click"],["fxLayout","column",1,"mat-card-week-day",3,"ngClass"],[3,"click"],["fxLayoutAlign","center"],[1,"div-date"],[3,"margin-left","width","matTooltip","ngClass",4,"ngFor","ngForOf"],[3,"matTooltip","ngClass"]],template:function(t,e){1&t&&(r.hc(0,"div",0),r.hc(1,"div",1),r.Nc(2,b,5,7,"mat-card",2),r.gc(),r.hc(3,"div",3),r.hc(4,"div",4),r.Nc(5,x,4,4,"mat-card",5),r.cc(6,"div",6),r.gc(),r.hc(7,"div",4),r.Nc(8,O,4,3,"mat-card",7),r.hc(9,"div",6),r.Nc(10,D,3,4,"div",8),r.gc(),r.gc(),r.gc(),r.gc(),r.hc(11,"div",9),r.hc(12,"div",10),r.Nc(13,S,5,7,"mat-card",11),r.gc(),r.hc(14,"div",12),r.hc(15,"div",4),r.Nc(16,T,3,4,"div",13),r.gc(),r.hc(17,"div",14),r.hc(18,"div",15),r.Nc(19,M,3,6,"div",16),r.gc(),r.hc(20,"mat-card",17),r.Nc(21,z,2,3,"div",18),r.gc(),r.gc(),r.gc(),r.gc()),2&t&&(r.Ob(2),r.zc("ngForOf",e.week),r.Ob(1),r.Mc("margin","10px"),r.Ob(1),r.Mc("width","95vw"),r.Ob(1),r.zc("ngForOf",e.hours),r.Ob(2),r.Mc("width","95vw"),r.Ob(1),r.zc("ngForOf",e.hours),r.Ob(1),r.Mc("background-color","#ffffff"),r.Ob(1),r.zc("ngForOf",e.tasks),r.Ob(3),r.zc("ngForOf",e.week),r.Ob(1),r.Mc("margin-top","10px"),r.Ob(1),r.Mc("width","92vw")("margin-left","22px"),r.Ob(1),r.zc("ngForOf",e.tasks),r.Ob(2),r.Mc("height","52vh"),r.Ob(1),r.zc("ngForOf",e.hours),r.Ob(2),r.zc("ngForOf",e.hours))},directives:[u.c,f.b,u.a,a.k,m.a,a.j,f.a,p.a,u.b,k.a],pipes:[a.e],styles:[".mat-card-day[_ngcontent-%COMP%]{cursor:pointer;height:9.5vh;padding:5px!important}.mat-card-day-selected[_ngcontent-%COMP%]{background-color:#d1870c!important}.mat-card-hour[_ngcontent-%COMP%]{padding:0!important;margin:0!important;width:5.5vw;height:3.3vh}.div-task-low-p[_ngcontent-%COMP%]{height:10px;margin-top:10px;margin-bottom:10px}.div-task-medium-p[_ngcontent-%COMP%]{height:15px;margin-bottom:7.5px;margin-top:7.5px}.div-task-high-p[_ngcontent-%COMP%]{height:20px;margin-bottom:5px;margin-top:5px}.a-task-toggle[_ngcontent-%COMP%]{margin:5px;color:#5464bd;word-break:break-all;max-width:100%}.div-scrollable-tasks[_ngcontent-%COMP%]{overflow-x:scroll;width:92vw;overflow-y:hidden;margin:0;padding:0;height:52vh}.mat-card-week-day[_ngcontent-%COMP%]{width:15%;padding:0;height:25px!important}.div-date[_ngcontent-%COMP%]{background-color:#5464bd;color:#fff;width:22px;text-align:center}"],changeDetection:0}),t})(),L=(()=>{class t{constructor(t,e,c,a,i){this.taskService=t,this.dialogService=e,this.cdr=c,this.ar=a,this.calendarSchedulerComponent=i,this.hoursRange={start:7,end:24},this.hours=[],this.tasks=[]}ngOnInit(){this.ar.queryParamMap.subscribe(t=>{this.selectedDate=new Date(t.get("selectedDate")),this.selectedProject=t.get("selectedProject"),this.init()}),this.taskSubscription=this.taskService.task$.subscribe(()=>{this.init()})}init(){this.hours=[];for(let t=this.hoursRange.start;t<this.hoursRange.end;t++)this.hours.push(new s(new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),this.selectedDate.getDate(),t,0,0,0)));this.timeRange=[this.selectedDate.getTime(),this.selectedDate.getTime()+864e5],this.taskService.getTasks("day",n.d.toQueryString({project:this.selectedProject,from:this.timeRange[0],to:this.timeRange[1]})).pipe(Object(i.a)(t=>t.tasks)).subscribe(t=>{this.tasks=[...t],this.cdr.detectChanges()})}dateSelection(t){this.calendarSchedulerComponent.searchByDate(t)}checkTask(t){this.dialogService.openTaskInfoDialog(t)}putTask(t){this.dialogService.openEditCreateTaskDialog(t)}ngOnDestroy(){this.taskSubscription&&this.taskSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.bc(o.a),r.bc(d.a),r.bc(r.i),r.bc(h.a),r.bc(l.a))},t.\u0275cmp=r.Vb({type:t,selectors:[["app-calendar-scheduler-day-smart"]],decls:1,vars:3,consts:[[3,"hours","tasks","selectedDate","checkTask","putTask","dateSelection"]],template:function(t,e){1&t&&(r.hc(0,"app-calendar-scheduler-day",0),r.pc("checkTask",(function(t){return e.checkTask(t)}))("putTask",(function(t){return e.putTask(t)}))("dateSelection",(function(t){return e.dateSelection(t)})),r.gc()),2&t&&r.zc("hours",e.hours)("tasks",e.tasks)("selectedDate",e.selectedDate)},directives:[P],encapsulation:2,changeDetection:0}),t})();var R=c("YUcS"),_=c("jAig"),N=c("zAIM"),$=c("+Mmm"),H=c("tb/P");let j=[{path:"",component:L}],Q=(()=>{class t{}return t.\u0275mod=r.Zb({type:t}),t.\u0275inj=r.Yb({factory:function(e){return new(e||t)},imports:[[a.c,h.e.forChild(j),_.a,R.a,N.a,$.a,H.a]]}),t})()}}]);