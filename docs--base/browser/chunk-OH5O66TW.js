import{a as E}from"./chunk-BNDWI5V5.js";import"./chunk-WXI33M2S.js";import{a as y}from"./chunk-XBYXSO4L.js";import{a as D}from"./chunk-WHCSWQXX.js";import"./chunk-YXX363XN.js";import"./chunk-N6WBQ5NA.js";import"./chunk-JMNVH7SA.js";import{Cb as C,Hb as o,Ib as w,Jb as W,Na as _,Ob as T,Ra as l,aa as m,da as v,jb as x,na as d,oa as h,pb as b,qb as f,rb as c,sb as s,tb as g,wb as S,yb as u,zb as p}from"./chunk-BF6HZ65E.js";var I=(r,e)=>e._id;function L(r,e){if(r&1){let a=S();c(0,"div",2)(1,"div",3),g(2,"img",4),s(),c(3,"div",5)(4,"div")(5,"h3",6),o(6),s(),c(7,"h4",7),o(8),s(),c(9,"i",8),u("click",function(){let t=d(a).$implicit,n=p();return h(n.remove(t._id))}),s(),o(10," Remove "),s(),c(11,"div")(12,"button",9),u("click",function(){let t=d(a).$implicit,n=p();return h(n.addTOCart(t._id))}),o(13," Add To Cart "),s()()()()}if(r&2){let a=e.$implicit;l(2),C("alt",a.title),x("src",a.imageCover,_),l(4),w(a.title),l(2),W("Price: ",a.price," EGP")}}var A=(()=>{let e=class e{constructor(){this._WishService=m(y),this._ToastrService=m(E),this._CartService=m(D),this.wishListData=[],this.state=!1}ngOnInit(){this.unsubgetUserCart=this._WishService.getUserWishList().subscribe({next:i=>{console.log(i),this.wishListData=i.data}})}remove(i){this.unsubremove=this._WishService.removeWishListIteam(i).subscribe({next:t=>{this._ToastrService.success(t.message," DIOR websit"),t.status=="success"&&(this._WishService.clicked.next(!0),this._WishService.iddata.next(t.data)),this.wishListData=[],this.unsubgetUserCart=this._WishService.getUserWishList().subscribe({next:n=>{this.wishListData=n.data,this._WishService.wishproductno.next(n.count)}})}})}addTOCart(i){this.unSubAdd=this._CartService.addTOCart(i).subscribe({next:t=>{console.log(t),console.log(t.numOfCartItems),this._CartService.cartno.next(t.numOfCartItems),this._ToastrService.success(t.message," DIOR websit")}})}ngOnDestroy(){this.unsubgetUserCart.unsubscribe(),this.unsubremove?.unsubscribe(),this.unSubAdd?.unsubscribe()}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=v({type:e,selectors:[["app-wishlist"]],standalone:!0,features:[T],decls:5,vars:0,consts:[[1,"container","w-75","p-5","my-5","shadow"],[1,"h2","text-main","text-decoration-underline","text-muted"],[1,"row","product","my-3","bg-light","p-3"],[1,"col-4","col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-8","col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h5","text-main"],[1,"h6","text-success"],[1,"fa-regular","fa-trash-can","text-danger","cr",3,"click"],[1,"btn","bg-danger","text-light","cr",3,"click"]],template:function(t,n){t&1&&(c(0,"div",0)(1,"h1",1),o(2,"Wish List"),s(),b(3,L,14,4,"div",2,I),s()),t&2&&(l(3),f(n.wishListData))}});let r=e;return r})();export{A as WishlistComponent};
