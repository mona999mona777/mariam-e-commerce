import{a as w}from"./chunk-OLXIOC22.js";import"./chunk-YXX363XN.js";import{d as S}from"./chunk-KAEY62DT.js";import"./chunk-N6WBQ5NA.js";import"./chunk-JMNVH7SA.js";import{Cb as s,Hb as l,Jb as v,Na as m,Ob as _,Qb as y,Ra as r,aa as d,da as g,hb as p,jb as u,nb as C,pb as f,qb as h,rb as a,sb as c,tb as b,zb as x}from"./chunk-BF6HZ65E.js";var k=(e,t)=>t._id,A=e=>["/category",e];function M(e,t){if(e&1&&(a(0,"div",3)(1,"div",4),b(2,"img",5),a(3,"h3",6),l(4),c()()()),e&2){let i=t.$implicit;r(),u("routerLink",y(4,A,i._id)),r(),s("src",i.image,m),s("alt",i.name),r(2),v(" ",i.name," ")}}function O(e,t){if(e&1&&(a(0,"section",0)(1,"h1",1),l(2," All Categories "),c(),a(3,"div",2),f(4,M,5,6,"div",3,k),c()()),e&2){let i=x();r(4),h(i.categData)}}var P=(()=>{let t=class t{constructor(){this._CategService=d(w),this.categData=null}ngOnInit(){this.unsubgetAllCategories=this._CategService.getAllCategoriesApi().subscribe({next:n=>{console.log(n.data),this.categData=n.data}})}getSpcificCategories(n){this._CategService.getSpecificCategoriesApi(n).subscribe({next:o=>{console.log(o)}})}ngOnDestroy(){this.unsubgetAllCategories?.unsubscribe(),this.unsubgetSpcificCategories?.unsubscribe()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=g({type:t,selectors:[["app-catergories"]],standalone:!0,features:[_],decls:1,vars:1,consts:[[1,"container-fluid","py-5","my-5","shadow"],[1,"text-main","text-decoration-underline","h2","my-3","ms-5"],[1,"row","g-3"],[1,"col-md-2"],[1,"border","bg-sec","border-3","border-info-subtle","shadow","rounded-5","h-100","block",3,"routerLink"],["height","300px",1,"w-100","rounded-5","image",3,"src","alt"],[1,"mt-3","text-center","h5","text-main"]],template:function(o,D){o&1&&p(0,O,6,0,"section",0),o&2&&C(0,D.categData?0:-1)},dependencies:[S],styles:[".image[_ngcontent-%COMP%]{border-radius:5px;border:solid 1px var(--main-color);transition:box-shadow .5s;overflow:hidden}.block[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%]{box-shadow:0 0 50px var(--main-color)}"]});let e=t;return e})();export{P as CatergoriesComponent};
