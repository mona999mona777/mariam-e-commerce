import{a as I}from"./chunk-WHCSWQXX.js";import"./chunk-YXX363XN.js";import{d as D}from"./chunk-KAEY62DT.js";import"./chunk-N6WBQ5NA.js";import"./chunk-JMNVH7SA.js";import{Cb as w,Hb as c,Ib as x,Jb as C,Na as f,Ob as E,Qb as b,Ra as l,aa as h,da as v,jb as p,na as m,oa as d,pb as g,qb as S,rb as n,sb as r,tb as k,wb as y,yb as u,zb as _}from"./chunk-BF6HZ65E.js";function F(a,o){return this.cartData._id}var L=a=>["/order",a],P=a=>["/cash",a];function T(a,o){if(a&1){let s=y();n(0,"div",4)(1,"div",7),k(2,"img",8),r(),n(3,"div",9)(4,"div")(5,"h3",10),c(6),r(),n(7,"h4",11),c(8),r(),n(9,"i",12),u("click",function(){let t=m(s).$implicit,i=_();return d(i.remove(t.product.id))}),r(),c(10," Remove "),r(),n(11,"div")(12,"i",13),u("click",function(){let t=m(s).$implicit,i=_();return d(i.update(t.product.id,t.count+1))}),r(),n(13,"span",14),c(14),r(),n(15,"i",15),u("click",function(){let t=m(s).$implicit,i=_();return d(i.update(t.product.id,t.count-1))}),r()()()()}if(a&2){let s=o.$implicit;l(2),w("alt",s.product.title),p("src",s.product.imageCover,f),l(4),x(s.product.title),l(2),C("Price: ",s.price," EGP"),l(6),x(s.count)}}var q=(()=>{let o=class o{constructor(){this._CartService=h(I),this.cartData={}}ngOnInit(){this.unsubgetUserCart=this._CartService.getUsercart().subscribe({next:e=>{console.log(e.data),this.cartData=e.data}})}remove(e){this.unsubremove=this._CartService.removecartIteam(e).subscribe({next:t=>{console.log(t.data),this.cartData=t.data,this._CartService.cartno.next(t.numOfCartItems)}})}update(e,t){this.unsubUpdate=this._CartService.updatecartIteams(e,t).subscribe({next:i=>{console.log(i.data),this.cartData=i.data}})}clearALLCart(){this.unsubClear=this._CartService.clearUsercart().subscribe({next:e=>{console.log(e),this._CartService.cartno.next(0),e.message=="success"&&(this.cartData={})}})}ngOnDestroy(){this.unsubgetUserCart.unsubscribe(),this.unsubremove?.unsubscribe(),this.unsubUpdate?.unsubscribe(),this.unsubClear?.unsubscribe()}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=v({type:o,selectors:[["app-cart"]],standalone:!0,features:[E],decls:14,vars:7,consts:[[1,"container","w-75","p-5","my-5","shadow"],[1,"h2","text-main","text-decoration-underline","text-muted"],[1,"text-success"],[1,"btn","btn-danger","ms-auto","d-block",3,"click"],[1,"row","product","my-3","bg-light","p-3"],[1,"d-flex","justify-content-between","align-items-center","w-50","mx-auto","my-3"],[1,"btn","btn-success","d-block",3,"routerLink"],[1,"col-4","col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-8","col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h5","text-main"],[1,"h6","text-success"],[1,"fa-regular","fa-trash-can","text-danger","cr",3,"click"],[1,"fa-regular","fa-square-plus","mx-1","cr","text-main","text-muted",3,"click"],[1,"mx-1"],[1,"fa-regular","fa-square-minus","mx-1","cr","text-main","text-muted",3,"click"]],template:function(t,i){t&1&&(n(0,"div",0)(1,"h1",1),c(2,"Shope Cart"),r(),n(3,"p",2),c(4),r(),n(5,"button",3),u("click",function(){return i.clearALLCart()}),c(6," Clear All Cart "),r(),g(7,T,16,5,"div",4,F,!0),n(9,"div",5)(10,"button",6),c(11," Online Pay "),r(),n(12,"button",6),c(13," Cash Pay "),r()()()),t&2&&(l(4),C(" totat Cart Price: ",i.cartData.totalCartPrice," EGP "),l(3),S(i.cartData.products),l(3),p("routerLink",b(3,L,i.cartData._id)),l(2),p("routerLink",b(5,P,i.cartData._id)))},dependencies:[D]});let a=o;return a})();export{q as CartComponent};
