(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8Chz":function(e,t,r){"use strict";r.r(t),r.d(t,"ProjectPagesModule",(function(){return l}));var s=r("ofXK"),c=r("tyNb"),i=r("tvPi"),n=r("fXoL"),a=r("T1xj"),o=r("3TL5");let u=[{path:"",component:(()=>{class e{constructor(e,t,r,s){this.projectService=e,this.ar=t,this.router=r,this.routesService=s,this.display=!0}ngOnInit(){this.ar.paramMap.subscribe(e=>{this.selectedProject=e.get("id")}),this.listenProjectChanges(),this.currentPageSubs=this.routesService.currentPage$.subscribe(e=>{this.page=e})}listenProjectChanges(){this.selectedProjectSubs=this.projectService.selectedProject$.subscribe(e=>{this.selectedProject!=e._id&&(this.selectedProject=e._id,this.router.navigate([this.selectedProject,this.page],{relativeTo:this.ar.parent.parent}))})}ngOnDestroy(){this.selectedProjectSubs&&this.selectedProjectSubs.unsubscribe(),this.currentPageSubs.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.bc(a.a),n.bc(c.a),n.bc(c.d),n.bc(o.a))},e.\u0275cmp=n.Vb({type:e,selectors:[["app-project-pages"]],viewQuery:function(e,t){var r;1&e&&n.Wc(c.h,!0),2&e&&n.Ec(r=n.qc())&&(t.outlet=r.first)},decls:1,vars:0,template:function(e,t){1&e&&n.cc(0,"router-outlet")},directives:[c.h],styles:[""]}),e})(),children:[{path:"",redirectTo:"calendar",pathMatch:"full"},{path:"calendar",canActivate:[i.a],loadChildren:()=>Promise.all([r.e(4),r.e(11)]).then(r.bind(null,"ZjLz")).then(e=>e.CalendarSchedulerModule)},{path:"task-manager",loadChildren:()=>r.e(10).then(r.bind(null,"5q21")).then(e=>e.TaskManagerModule),canActivate:[i.a]}]}],h=(()=>{class e{}return e.\u0275mod=n.Zb({type:e}),e.\u0275inj=n.Yb({factory:function(t){return new(t||e)},imports:[[s.c,c.g.forChild(u)],c.g]}),e})(),l=(()=>{class e{}return e.\u0275mod=n.Zb({type:e}),e.\u0275inj=n.Yb({factory:function(t){return new(t||e)},imports:[[s.c,h]]}),e})()}}]);