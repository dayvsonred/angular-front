"use strict";(self.webpackChunkangular_material_template=self.webpackChunkangular_material_template||[]).push([[592],{6797:(S,v,n)=>{n.d(v,{$:()=>J});var Z=n(5963),T=n(727),t=n(4650),h=n(2289),A=n(4649),E=n(4319),O=n(7574),_=n(8996),g=n(6895),u=n(3267),P=n(7392),D=n(3683),b=n(4859),i=n(6338),L=n(3238),U=n(4850),f=n(3162),m=n(8255),C=n(266),x=n(2673),y=n(5829);function I(o,c){1&o&&t._UZ(0,"mat-progress-bar",27)}const Q=function(){return["/"]},p=function(){return["/account/profile"]},d=function(){return["/auth/login"]},B=function(){return["/dashboard"]},M=function(){return["/customers"]},R=function(){return["/users"]},K=function(){return["/icons"]},W=function(){return["/about"]};let J=(()=>{class o{constructor(a,e,r,s,l){this.changeDetectorRef=a,this.media=e,this.spinnerService=r,this.authService=s,this.authGuard=l,this.showSpinner=!1,this.userName="",this.isAdmin=!1,this.autoLogoutSubscription=new T.w0,this.mobileQuery=this.media.matchMedia("(max-width: 1000px)"),this._mobileQueryListener=()=>a.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){const a=this.authService.getCurrentUser();this.isAdmin=a.isAdmin,this.userName=a.fullName;const e=(0,Z.H)(2e3,5e3);this.autoLogoutSubscription=e.subscribe(()=>{this.authGuard.canActivate()})}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener),this.autoLogoutSubscription.unsubscribe()}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(t.sBO),t.Y36(h.vx),t.Y36(A.V),t.Y36(E.$),t.Y36(O.a))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-layout"]],decls:93,vars:35,consts:[[1,"navbar-container"],["color","primary",1,"navbar"],["mat-icon-button","",3,"click"],["matTooltip","Home",1,"navbar-brand",3,"routerLink"],[1,"navbar-spacer"],["mat-icon-button","",3,"matMenuTriggerFor"],["matBadge","2","matBadgeColor","accent"],["xPosition","before","yPosition","above",3,"overlapTrigger"],["notificationMenu","matMenu"],["mat-menu-item",""],["mat-button","",3,"matMenuTriggerFor"],["fxShow","","fxHide.xs",""],["userMenu","matMenu"],["mat-menu-item","",3,"routerLink"],[1,"navbar-sidenav-container"],["fixedTopGap","56",1,"sidenav",3,"opened","mode","fixedInViewport"],["snav",""],["mat-subheader",""],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["mat-list-icon",""],["mat-line",""],[1,"material-symbols-outlined"],["mat-list-item","",3,"routerLink"],["id","push-bottom","mat-list-item","","routerLinkActive","active",3,"routerLink"],[1,"sidenav-content"],[1,"progress-bar-container"],["color","accent","mode","indeterminate",4,"ngIf"],["color","accent","mode","indeterminate"]],template:function(a,e){if(1&a){const r=t.EpF();t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),t.NdJ("click",function(){t.CHM(r);const l=t.MAs(39);return t.KtG(l.toggle())}),t.TgZ(3,"mat-icon"),t._uU(4,"menu"),t.qZA()(),t.TgZ(5,"a",3)(6,"h1"),t._uU(7," SellersShift "),t.qZA()(),t._UZ(8,"span",4),t.TgZ(9,"button",5)(10,"mat-icon",6),t._uU(11,"notifications"),t.qZA()(),t.TgZ(12,"mat-menu",7,8)(14,"a",9)(15,"span"),t._uU(16,"You have new tasks"),t.qZA()(),t.TgZ(17,"a",9)(18,"span"),t._uU(19,"You have a new message"),t.qZA()()(),t.TgZ(20,"button",10)(21,"mat-icon"),t._uU(22,"person"),t.qZA(),t.TgZ(23,"span",11),t._uU(24),t.qZA()(),t.TgZ(25,"mat-menu",7,12)(27,"a",13)(28,"mat-icon"),t._uU(29,"person"),t.qZA(),t.TgZ(30,"span"),t._uU(31,"Account"),t.qZA()(),t.TgZ(32,"a",13)(33,"mat-icon"),t._uU(34,"exit_to_app"),t.qZA(),t.TgZ(35,"span"),t._uU(36,"Log out"),t.qZA()()()(),t.TgZ(37,"mat-sidenav-container",14)(38,"mat-sidenav",15,16)(40,"mat-nav-list")(41,"h3",17),t._uU(42,"Home"),t.qZA(),t.TgZ(43,"a",18)(44,"mat-icon",19),t._uU(45," dashboard "),t.qZA(),t.TgZ(46,"p",20),t._uU(47," Dashboard "),t.qZA()(),t.TgZ(48,"a",18)(49,"mat-icon",19)(50,"span",21),t._uU(51," storefront "),t.qZA()(),t.TgZ(52,"p",20),t._uU(53," Meus Produtos "),t.qZA()(),t.TgZ(54,"a",18)(55,"mat-icon",19)(56,"span",21),t._uU(57," local_atm "),t.qZA()(),t.TgZ(58,"p",20),t._uU(59," Vendas "),t.qZA()(),t.TgZ(60,"a",18)(61,"mat-icon",19),t._uU(62," people "),t.qZA(),t.TgZ(63,"p",20),t._uU(64," Usu\xe1rios "),t.qZA()(),t.TgZ(65,"a",22)(66,"mat-icon",19),t._uU(67,"person"),t.qZA(),t.TgZ(68,"p",20),t._uU(69," Perfil "),t.qZA()(),t.TgZ(70,"a",22)(71,"mat-icon",19),t._uU(72,"exit_to_app"),t.qZA(),t.TgZ(73,"p",20),t._uU(74," Log out "),t.qZA()(),t._UZ(75,"mat-divider"),t.TgZ(76,"h3",17),t._uU(77,"Recursos"),t.qZA(),t.TgZ(78,"a",18)(79,"mat-icon",19),t._uU(80," toll "),t.qZA(),t.TgZ(81,"p",20),t._uU(82," Den\xfancias "),t.qZA()(),t.TgZ(83,"a",23)(84,"mat-icon",19),t._uU(85," info_outline "),t.qZA(),t.TgZ(86,"p",20),t._uU(87," Sobre "),t.qZA()()()(),t.TgZ(88,"mat-sidenav-content",24)(89,"div",25),t.YNc(90,I,1,0,"mat-progress-bar",26),t.ALo(91,"async"),t.qZA(),t._UZ(92,"router-outlet"),t.qZA()()()}if(2&a){const r=t.MAs(13),s=t.MAs(26);t.ekj("example-is-mobile",e.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(24,Q)),t.xp6(4),t.Q6J("matMenuTriggerFor",r),t.xp6(3),t.Q6J("overlapTrigger",!1),t.xp6(8),t.Q6J("matMenuTriggerFor",s),t.xp6(4),t.hij(" ",e.userName," "),t.xp6(1),t.Q6J("overlapTrigger",!1),t.xp6(2),t.Q6J("routerLink",t.DdM(25,p)),t.xp6(5),t.Q6J("routerLink",t.DdM(26,d)),t.xp6(6),t.Q6J("opened",!e.mobileQuery.matches)("mode",e.mobileQuery.matches?"over":"side")("fixedInViewport",e.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(27,B)),t.xp6(5),t.Q6J("routerLink",t.DdM(28,M)),t.xp6(6),t.Q6J("routerLink",t.DdM(29,M)),t.xp6(6),t.Q6J("routerLink",t.DdM(30,R)),t.xp6(5),t.Q6J("routerLink",t.DdM(31,p)),t.xp6(5),t.Q6J("routerLink",t.DdM(32,d)),t.xp6(8),t.Q6J("routerLink",t.DdM(33,K)),t.xp6(5),t.Q6J("routerLink",t.DdM(34,W)),t.xp6(7),t.Q6J("ngIf",t.lcZ(91,22,e.spinnerService.visibility))}},dependencies:[_.lC,_.yS,_.Od,g.O5,u.JX,u.TM,u.Rh,P.Hw,D.Ye,b.lW,i.Hk,i.Tg,L.X2,i.Nh,i.gs,U.d,f.pW,m.VK,m.OP,m.p6,C.gM,x.k,y.b8,g.Ov],styles:[".navbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{z-index:2}.navbar-brand[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.navbar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.navbar-sidenav-container[_ngcontent-%COMP%]{flex:1}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}mat-sidenav[_ngcontent-%COMP%]{min-width:180px!important;border-right:1px solid #eee;box-shadow:6px 0 6px #0000001a}.progress-bar-container[_ngcontent-%COMP%]{height:5px}a.mat-list-item.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}#push-bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}"]}),o})()}}]);