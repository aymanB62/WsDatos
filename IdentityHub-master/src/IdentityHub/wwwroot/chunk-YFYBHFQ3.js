import{i as ve}from"./chunk-NAQIWXDH.js";import{a as y}from"./chunk-2T45TSII.js";import{A as g,Aa as _e,B as K,C as Q,D as x,E as v,F as p,G as P,H as W,L as X,M as m,N as E,O as k,Q as L,R,S as Z,U as $,V as U,X as ee,Y as te,Z as ie,_ as ne,d as J,da as re,fa as q,g as A,ga as D,h as T,ha as B,i as C,j as V,ja as S,k as j,ka as oe,l as b,la as me,m as h,oa as ae,q as a,qa as se,r as _,ra as le,sa as f,ta as de,ua as ce,v as u,va as pe,w as c,wa as ue,x as M,xa as fe,y as o,ya as be,z as r,za as he}from"./chunk-N57SZSMP.js";var O=(()=>{let i=class i{constructor(e){this.http=e}getMembers(){return this.http.get(`${S.appUrl}/api/admin/get-members`)}getMember(e){return this.http.get(`${S.appUrl}/api/admin/get-member/${e}`)}getApplicationRoles(){return this.http.get(`${S.appUrl}/api/admin/get-application-roles`)}addEditMember(e){return this.http.post(`${S.appUrl}/api/admin/add-edit-member`,e)}lockMember(e){return this.http.put(`${S.appUrl}/api/admin/lock-member/${e}`,{})}unlockMember(e){return this.http.put(`${S.appUrl}/api/admin/unlock-member/${e}`,{})}deleteMember(e){return this.http.delete(`${S.appUrl}/api/admin/delete-member/${e}`,{})}};i.\u0275fac=function(t){return new(t||i)(C(ne))},i.\u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function ye(n,i){n&1&&(o(0,"tr")(1,"td",11),m(2,"No Members"),r()())}function ke(n,i){n&1&&(o(0,"span"),m(1,", "),r())}function Ne(n,i){if(n&1&&(o(0,"span"),m(1),u(2,ke,2,0,"span",9),r()),n&2){let s=i.$implicit,e=i.index,t=p().$implicit;a(),k(" ",s,""),a(),c("ngIf",e+1<t.roles.length)}}function Ie(n,i){if(n&1){let s=x();o(0,"a",19),v("click",function(){b(s);let t=p().$implicit,l=p();return h(l.lockMember(t.id))}),m(1," Lock "),r()}}function Fe(n,i){if(n&1){let s=x();o(0,"a",20),v("click",function(){b(s);let t=p().$implicit,l=p();return h(l.unlockMember(t.id))}),m(1," Unlock "),r()}}function Ae(n,i){if(n&1){let s=x();o(0,"tr")(1,"td"),m(2),r(),o(3,"td"),m(4),L(5,"titlecase"),r(),o(6,"td"),m(7),L(8,"titlecase"),r(),o(9,"td"),m(10),L(11,"date"),r(),o(12,"td"),u(13,Ne,3,2,"span",10),r(),o(14,"td",8),u(15,Ie,2,0,"a",12)(16,Fe,2,0,"a",13),r(),o(17,"td",8)(18,"div",14)(19,"button",15),g(20,"i",16),m(21," Edit "),r(),o(22,"button",17),v("click",function(){let t=b(s).$implicit,l=p(),w=X(27);return h(l.deleteMember(t.id,w))}),g(23,"i",18),m(24," Delete "),r()()()()}if(n&2){let s=i.$implicit;a(2),E(s.userName),a(2),E(R(5,9,s.firstName)),a(3),E(R(8,11,s.lastName)),a(3),E(R(11,13,s.dateCreated)),a(3),c("ngForOf",s.roles),a(2),c("ngIf",!s.isLocked),a(),c("ngIf",s.isLocked),a(3),W("routerLink","/admin/add-edit-member/",s.id,"")}}function Te(n,i){if(n&1){let s=x();o(0,"div",21)(1,"p"),m(2),r(),o(3,"button",22),v("click",function(){b(s);let t=p();return h(t.confirm())}),m(4,"Yes"),r(),o(5,"button",23),v("click",function(){b(s);let t=p();return h(t.decline())}),m(6,"No"),r()()}if(n&2){let s=p();a(2),k("Are you sure you want to delete ",s.memberToDelete==null?null:s.memberToDelete.userName,"?")}}var Ee=(()=>{let i=class i{constructor(e,t,l){this.adminService=e,this.sharedService=t,this.modalService=l,this.members=[]}ngOnInit(){this.adminService.getMembers().subscribe({next:e=>this.members=e})}lockMember(e){this.adminService.lockMember(e).subscribe({next:t=>{this.handleLockUnlockFilterAndMessage(e,!0)}})}unlockMember(e){this.adminService.unlockMember(e).subscribe({next:t=>{this.handleLockUnlockFilterAndMessage(e,!1)}})}deleteMember(e,t){let l=this.findMember(e);l&&(this.memberToDelete=l,this.modalRef=this.modalService.show(t,{class:"modal-sm"}))}confirm(){this.memberToDelete&&this.adminService.deleteMember(this.memberToDelete.id).subscribe({next:e=>{this.sharedService.showNotification(!0,"Deleted",`Member of ${this.memberToDelete?.userName} has been deleted!`),this.members=this.members.filter(t=>t.id!==this.memberToDelete?.id),this.memberToDelete=void 0,this.modalRef?.hide()}})}decline(){this.memberToDelete=void 0,this.modalRef?.hide()}handleLockUnlockFilterAndMessage(e,t){let l=this.findMember(e);l&&(l.isLocked=!l.isLocked,t?this.sharedService.showNotification(!0,"Locked",`${l.userName} member has been locked`):this.sharedService.showNotification(!0,"Unlocked",`${l.userName} member has been unlocked`))}findMember(e){let t=this.members.find(l=>l.id===e);if(t)return t}};i.\u0275fac=function(t){return new(t||i)(_(O),_(y),_(me))},i.\u0275cmp=V({type:i,selectors:[["app-admin"]],decls:28,vars:2,consts:[["template",""],[1,"container","my-3"],[1,"row","mb-3"],[1,"col-12"],["routerLink","/admin/add-edit-member",1,"btn","btn-outline-primary","w-100"],[1,"table-responsive"],[1,"table","table-striped"],[1,"table-warning"],[1,"text-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],["colspan","7",1,"text-center"],["class","btn btn-warning btn-sm me-2",3,"click",4,"ngIf"],["class","btn btn-success btn-sm",3,"click",4,"ngIf"],["role","group",1,"btn-group"],[1,"btn","btn-primary","btn-sm","me-2",3,"routerLink"],[1,"bi","bi-pencil"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"bi","bi-trash"],[1,"btn","btn-warning","btn-sm","me-2",3,"click"],[1,"btn","btn-success","btn-sm",3,"click"],[1,"modal-body","text-center"],["type","button",1,"btn","btn-default",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,l){t&1&&(o(0,"div",1)(1,"div",2)(2,"div",3)(3,"a",4),m(4,"Create Member"),r()()(),o(5,"div",5)(6,"table",6)(7,"thead")(8,"tr",7)(9,"th"),m(10,"Username"),r(),o(11,"th"),m(12,"First name"),r(),o(13,"th"),m(14,"Last name"),r(),o(15,"th"),m(16,"Date created"),r(),o(17,"th"),m(18,"Roles"),r(),o(19,"th",8),m(20,"Lock / Unlock"),r(),o(21,"th",8),m(22,"Actions"),r()()(),o(23,"tbody"),u(24,ye,3,0,"tr",9)(25,Ae,25,15,"tr",10),r()()(),u(26,Te,7,1,"ng-template",null,0,Z),r()),t&2&&(a(24),c("ngIf",l.members.length===0),a(),c("ngForOf",l.members))},dependencies:[$,U,D,ee,te]});let n=i;return n})();var we=(()=>{let i=class i{constructor(e,t,l){this.accountService=e,this.sharedService=t,this.router=l}canActivate(){return this.accountService.user$.pipe(J(e=>e&&ae(e.jwt).role.includes("Admin")?!0:(this.sharedService.showNotification(!1,"Admin Area","Leave now!"),this.router.navigateByUrl("/"),!1)))}};i.\u0275fac=function(t){return new(t||i)(C(oe),C(y),C(q))},i.\u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function Ve(n,i){n&1&&(o(0,"span",31),m(1,"Add"),r())}function je(n,i){n&1&&(o(0,"span",31),m(1,"Update"),r())}function Le(n,i){n&1&&(o(0,"span",32),m(1," First name is required "),r())}function Re(n,i){n&1&&(o(0,"span",32),m(1," Last name is required "),r())}function $e(n,i){n&1&&(o(0,"span",32),m(1," Username is required "),r())}function Ue(n,i){n&1&&(o(0,"span",32),m(1," Password is required "),r())}function qe(n,i){n&1&&(o(0,"span",32),m(1," Password must be at least 6, and maximum 15 characters "),r())}function De(n,i){n&1&&(o(0,"div")(1,"span",33),m(2,"Note:"),r(),m(3," if you don't intend to change the member password, then leave the password field empty "),r())}function Oe(n,i){if(n&1){let s=x();K(0),o(1,"input",34),v("change",function(){let t=b(s).$implicit,l=p(2);return h(l.roleOnChange(t))}),r(),o(2,"label",35),m(3),r(),Q()}if(n&2){let s,e=i.$implicit,t=p(2);a(),M("is-invalid",t.submitted&&((s=t.memberForm.get("roles"))==null?null:s.errors)),P("id",e),c("checked",t.existingMemberRoles.includes(e)),a(),P("for",e),a(),E(e)}}function Pe(n,i){n&1&&(o(0,"div",32),m(1," Please select at least one role "),r())}function Be(n,i){if(n&1&&(o(0,"div",36),g(1,"app-validation-messages",37),r()),n&2){let s=p(2);a(),c("errorMessages",s.errorMessages)}}function ze(n,i){if(n&1){let s=x();o(0,"div",1)(1,"div",2)(2,"main",3)(3,"form",4),v("ngSubmit",function(){b(s);let t=p();return h(t.submit())}),o(4,"div",5)(5,"h3",6),u(6,Ve,2,0,"span",7)(7,je,2,0,"span",7),m(8," Member "),r()(),o(9,"div",8),g(10,"input",9),o(11,"label",10),m(12,"First name"),r(),u(13,Le,2,0,"span",11),r(),o(14,"div",8),g(15,"input",12),o(16,"label",13),m(17,"Last name"),r(),u(18,Re,2,0,"span",11),r(),o(19,"div",8),g(20,"input",14),o(21,"label",15),m(22,"Username"),r(),u(23,$e,2,0,"span",11),r(),o(24,"div",8)(25,"input",16),v("change",function(){b(s);let t=p();return h(t.passwordOnChange())}),r(),o(26,"label",17),m(27,"Password"),r(),u(28,Ue,2,0,"span",11)(29,qe,2,0,"span",11)(30,De,4,0,"div",18),r(),o(31,"div",19)(32,"div",20)(33,"label",21),m(34,"Roles:"),r()(),o(35,"div",22)(36,"div",23),u(37,Oe,4,6,"ng-container",24),r()()(),u(38,Pe,2,0,"div",11)(39,Be,2,1,"div",25),o(40,"div",26)(41,"div",27)(42,"div",28)(43,"button",29),m(44),r()()(),o(45,"div",27)(46,"div",28)(47,"button",30),m(48," Back to list "),r()()()()()()()()}if(n&2){let s,e,t,l,w,I,G,H,F,Y,d=p();a(3),c("formGroup",d.memberForm),a(3),c("ngIf",d.addNew),a(),c("ngIf",!d.addNew),a(3),M("is-invalid",d.submitted&&((s=d.memberForm.get("firstName"))==null?null:s.errors)),a(3),c("ngIf",d.submitted&&((e=d.memberForm.get("firstName"))==null?null:e.hasError("required"))),a(2),M("is-invalid",d.submitted&&((t=d.memberForm.get("lastName"))==null?null:t.errors)),a(3),c("ngIf",d.submitted&&((l=d.memberForm.get("lastName"))==null?null:l.hasError("required"))),a(2),M("is-invalid",d.submitted&&((w=d.memberForm.get("userName"))==null?null:w.errors)),a(3),c("ngIf",d.submitted&&((I=d.memberForm.get("userName"))==null?null:I.hasError("required"))),a(2),M("is-invalid",d.submitted&&((G=d.memberForm.get("password"))==null?null:G.errors)),a(3),c("ngIf",d.submitted&&((H=d.memberForm.get("password"))==null?null:H.hasError("required"))),a(),c("ngIf",d.submitted&&((F=d.memberForm.get("password"))==null?null:F.hasError("minlength"))||((F=d.memberForm.get("password"))==null?null:F.hasError("maxlength"))),a(),c("ngIf",!d.addNew),a(7),c("ngForOf",d.applicationRoles),a(),c("ngIf",d.submitted&&((Y=d.memberForm.get("roles"))==null?null:Y.hasError("required"))),a(),c("ngIf",d.errorMessages.length>0),a(5),k(" ",d.addNew?"Create":"Update"," Member ")}}var z=(()=>{let i=class i{constructor(e,t,l,w,I){this.adminService=e,this.sharedService=t,this.formBuilder=l,this.router=w,this.activatedRoute=I,this.memberForm=new pe({}),this.formInitialized=!1,this.addNew=!0,this.submitted=!1,this.errorMessages=[],this.applicationRoles=[],this.existingMemberRoles=[]}ngOnInit(){let e=this.activatedRoute.snapshot.paramMap.get("id");e?(this.addNew=!1,this.getMember(e)):this.initializeForm(void 0),this.getRoles()}getMember(e){this.adminService.getMember(e).subscribe({next:t=>{this.initializeForm(t)}})}getRoles(){this.adminService.getApplicationRoles().subscribe({next:e=>this.applicationRoles=e})}initializeForm(e){e?(this.memberForm=this.formBuilder.group({id:[e.id],firstName:[e.firstName,f.required],lastName:[e.lastName,f.required],userName:[e.userName,f.required],password:[""],roles:[e.roles,f.required]}),this.existingMemberRoles=e.roles.split(",")):this.memberForm=this.formBuilder.group({id:[""],firstName:["",f.required],lastName:["",f.required],userName:["",f.required],password:["",[f.required,f.minLength(6),f.maxLength(15)]],roles:["",f.required]}),this.formInitialized=!0}passwordOnChange(){this.addNew==!1&&(this.memberForm.get("password")?.value?this.memberForm.controls.password.setValidators([f.required,f.minLength(6),f.maxLength(15)]):this.memberForm.get("password")?.clearValidators(),this.memberForm.controls.password.updateValueAndValidity())}roleOnChange(e){let t=this.memberForm.get("roles")?.value.split(","),l=t.indexOf(e);l!==-1?t.splice(l,1):t.push(e),t[0]===""&&t.splice(0,1),this.memberForm.controls.roles.setValue(t.join(","))}submit(){this.submitted=!0,this.errorMessages=[],this.memberForm.valid&&this.adminService.addEditMember(this.memberForm.value).subscribe({next:e=>{this.sharedService.showNotification(!0,e.value.titile,e.value.message),this.router.navigateByUrl("/admin")},error:e=>{e.error.errors?this.errorMessages=e.error.errors:this.errorMessages.push(e.error)}})}};i.\u0275fac=function(t){return new(t||i)(_(O),_(y),_(he),_(q),_(re))},i.\u0275cmp=V({type:i,selectors:[["app-add-edit-member"]],decls:1,vars:1,consts:[["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",3,"ngSubmit","formGroup"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],["class","text-warning",4,"ngIf"],[1,"form-floating","mb-3"],["formControlName","firstName","type","text","placeholder","First Name",1,"form-control"],["for","firstName"],["class","text-danger",4,"ngIf"],["formControlName","lastName","type","text","placeholder","Last Name",1,"form-control"],["for","lastName"],["formControlName","userName","type","text","placeholder","Username",1,"form-control"],["for","userName"],["formControlName","password","type","text","placeholder","Password",1,"form-control",3,"change"],["for","password"],[4,"ngIf"],[1,"row"],[1,"col-2"],["for","roles"],[1,"col-10"],[1,"btn-group"],[4,"ngFor","ngForOf"],["class","form-floatin",4,"ngIf"],[1,"row","my-4"],[1,"col-6"],[1,"d-grid"],["type","submit",1,"btn","btn-block","btn-info"],["type","button","routerLink","/admin",1,"btn","btn-block","btn-danger"],[1,"text-warning"],[1,"text-danger"],[1,"text-info","fw-bold"],["type","checkbox",1,"btn-check",3,"change","id","checked"],[1,"btn","btn-outline-primary",3,"for"],[1,"form-floatin"],[3,"errorMessages"]],template:function(t,l){t&1&&u(0,ze,49,21,"div",0),t&2&&c("ngIf",l.formInitialized)},dependencies:[$,U,D,ue,le,de,ce,fe,be,se]});let n=i;return n})();var Ge=[{path:"",runGuardsAndResolvers:"always",canActivate:[we],children:[{path:"",component:Ee},{path:"add-edit-member",component:z},{path:"add-edit-member/:id",component:z}]}],Ce=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=j({type:i}),i.\u0275inj=T({imports:[B.forChild(Ge),B]});let n=i;return n})();var _t=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=j({type:i}),i.\u0275inj=T({imports:[ie,Ce,_e,ve]});let n=i;return n})();export{_t as AdminModule};