import './polyfills.server.mjs';
import{a as k}from"./chunk-2EWELVR6.mjs";import{a as q,b as c,c as N,d as G,e as S,f as w,h as A,i as D,j as I,m as R}from"./chunk-26NXVID2.mjs";import"./chunk-JNO7ST2A.mjs";import{d as V}from"./chunk-FPWFO7V3.mjs";import"./chunk-KRHHTLWT.mjs";import{j as P}from"./chunk-LDSOU5NY.mjs";import{Gb as a,Ib as E,Nb as M,Qa as s,Qb as g,Y as b,aa as T,gb as m,ib as _,ka as v,la as x,mb as u,qb as l,rb as o,sb as C,vb as y,xb as h,yb as p}from"./chunk-ILMFCX3N.mjs";import"./chunk-VVCT4QZE.mjs";var F=(t,r)=>({"is-valid":t,"is-invalid":r});function $(t,r){t&1&&(l(0,"p",10),a(1,"email is required."),o())}function j(t,r){t&1&&(l(0,"p",10),a(1,"enter valid email."),o())}function O(t,r){if(t&1&&(l(0,"div",6),m(1,$,2,0,"p",10)(2,j,2,0),o()),t&2){let e,n=p(2);s(),u(1,(e=n.verifyEmailform.get("email"))!=null&&e.getError("required")?1:(e=n.verifyEmailform.get("email"))!=null&&e.getError("email")?2:-1)}}function z(t,r){t&1&&C(0,"span",8)}function B(t,r){if(t&1&&(l(0,"p",9),a(1),o()),t&2){let e=p(2);s(),E(" ",e.forgetMessage," ")}}function H(t,r){if(t&1){let e=y();l(0,"section",0)(1,"h1",1),a(2," forget password "),o(),l(3,"form",2),h("ngSubmit",function(){v(e);let i=p();return x(i.verifyEmailFunc())}),l(4,"div",3)(5,"label",4),a(6,"email"),o(),C(7,"input",5),m(8,O,3,1,"div",6),o(),l(9,"button",7),a(10," verify Email "),m(11,z,1,0,"span",8),o()(),m(12,B,2,1,"p",9),o()}if(t&2){let e,n,i=p();s(3),_("formGroup",i.verifyEmailform),s(4),_("ngClass",g(5,F,!((e=i.verifyEmailform.get("email"))!=null&&e.errors)&&(((e=i.verifyEmailform.get("email"))==null?null:e.touched)||((e=i.verifyEmailform.get("email"))==null?null:e.dirty)),((e=i.verifyEmailform.get("email"))==null?null:e.errors)&&(((e=i.verifyEmailform.get("email"))==null?null:e.touched)||((e=i.verifyEmailform.get("email"))==null?null:e.dirty)))),s(),u(8,(n=i.verifyEmailform.get("email"))!=null&&n.errors&&((n=i.verifyEmailform.get("email"))!=null&&n.touched||(n=i.verifyEmailform.get("email"))!=null&&n.dirty)?8:-1),s(3),u(11,i.isloading?11:-1),s(),u(12,i.forgetMessage?12:-1)}}function J(t,r){t&1&&(l(0,"p",10),a(1,"resetCode is required."),o())}function K(t,r){t&1&&(l(0,"p",10),a(1,"enter valid resetCode."),o())}function L(t,r){if(t&1&&(l(0,"div",6),m(1,J,2,0,"p",10)(2,K,2,0),o()),t&2){let e,n=p(2);s(),u(1,(e=n.verifyCodeform.get("resetCode"))!=null&&e.getError("required")?1:(e=n.verifyCodeform.get("resetCode"))!=null&&e.getError("resetCode")?2:-1)}}function Q(t,r){t&1&&C(0,"span",8)}function U(t,r){if(t&1&&(l(0,"p",9),a(1),o()),t&2){let e=p(2);s(),E(" ",e.codeMessage," ")}}function W(t,r){if(t&1){let e=y();l(0,"section",0)(1,"h1",1),a(2,"verify Code"),o(),l(3,"form",2),h("ngSubmit",function(){v(e);let i=p();return x(i.verifyCodeFunc())}),l(4,"div",3)(5,"label",11),a(6,"reset code"),o(),C(7,"input",12),m(8,L,3,1,"div",6),o(),l(9,"button",7),a(10," verify Code "),m(11,Q,1,0,"span",8),o()(),m(12,U,2,1,"p",9),o()}if(t&2){let e,n,i=p();s(3),_("formGroup",i.verifyCodeform),s(4),_("ngClass",g(5,F,!((e=i.verifyCodeform.get("resetCode"))!=null&&e.errors)&&(((e=i.verifyCodeform.get("resetCode"))==null?null:e.touched)||((e=i.verifyCodeform.get("resetCode"))==null?null:e.dirty)),((e=i.verifyCodeform.get("resetCode"))==null?null:e.errors)&&(((e=i.verifyCodeform.get("resetCode"))==null?null:e.touched)||((e=i.verifyCodeform.get("resetCode"))==null?null:e.dirty)))),s(),u(8,(n=i.verifyCodeform.get("resetCode"))!=null&&n.errors&&((n=i.verifyCodeform.get("resetCode"))!=null&&n.touched||(n=i.verifyCodeform.get("resetCode"))!=null&&n.dirty)?8:-1),s(3),u(11,i.isloading?11:-1),s(),u(12,i.codeMessage?12:-1)}}function X(t,r){t&1&&(l(0,"p",10),a(1,"email is required."),o())}function Y(t,r){t&1&&(l(0,"p",10),a(1,"enter valid email."),o())}function Z(t,r){if(t&1&&(l(0,"div",6),m(1,X,2,0,"p",10)(2,Y,2,0),o()),t&2){let e,n=p(2);s(),u(1,(e=n.resetpasswordform.get("email"))!=null&&e.getError("required")?1:(e=n.resetpasswordform.get("email"))!=null&&e.getError("email")?2:-1)}}function ee(t,r){t&1&&(l(0,"p",10),a(1,"password is required."),o())}function te(t,r){t&1&&(l(0,"p",10),a(1,"enter valid password."),o())}function ie(t,r){if(t&1&&(l(0,"div",6),m(1,ee,2,0,"p",10)(2,te,2,0),o()),t&2){let e,n=p(2);s(),u(1,(e=n.resetpasswordform.get("newPassword"))!=null&&e.getError("required")?1:(e=n.resetpasswordform.get("newPassword"))!=null&&e.getError("newPassword")?2:-1)}}function ne(t,r){t&1&&C(0,"span",8)}function oe(t,r){if(t&1&&(l(0,"p",9),a(1),o()),t&2){let e=p(2);s(),E(" ",e.newpassMessage," ")}}function re(t,r){if(t&1){let e=y();l(0,"section",0)(1,"h1",1),a(2," reset new password "),o(),l(3,"form",2),h("ngSubmit",function(){v(e);let i=p();return x(i.resetpasswordFunc())}),l(4,"div",3)(5,"label",4),a(6,"email"),o(),C(7,"input",13),m(8,Z,3,1,"div",6),o(),l(9,"div",3)(10,"label",14),a(11,"new password"),o(),C(12,"input",15),m(13,ie,3,1,"div",6),o(),l(14,"button",7),a(15," reset Password "),m(16,ne,1,0,"span",8),o()(),m(17,oe,2,1,"p",9),o()}if(t&2){let e,n,i,f,d=p();s(3),_("formGroup",d.resetpasswordform),s(4),_("ngClass",g(7,F,!((e=d.resetpasswordform.get("email"))!=null&&e.errors)&&(((e=d.resetpasswordform.get("email"))==null?null:e.touched)||((e=d.resetpasswordform.get("email"))==null?null:e.dirty)),((e=d.resetpasswordform.get("email"))==null?null:e.errors)&&(((e=d.resetpasswordform.get("email"))==null?null:e.touched)||((e=d.resetpasswordform.get("email"))==null?null:e.dirty)))),s(),u(8,(n=d.resetpasswordform.get("email"))!=null&&n.errors&&((n=d.resetpasswordform.get("email"))!=null&&n.touched||(n=d.resetpasswordform.get("email"))!=null&&n.dirty)?8:-1),s(4),_("ngClass",g(10,F,!((i=d.resetpasswordform.get("newPassword"))!=null&&i.errors)&&(((i=d.resetpasswordform.get("newPassword"))==null?null:i.touched)||((i=d.resetpasswordform.get("newPassword"))==null?null:i.dirty)),((i=d.resetpasswordform.get("newPassword"))==null?null:i.errors)&&(((i=d.resetpasswordform.get("newPassword"))==null?null:i.touched)||((i=d.resetpasswordform.get("newPassword"))==null?null:i.dirty)))),s(),u(13,(f=d.resetpasswordform.get("newPassword"))!=null&&f.errors&&((f=d.resetpasswordform.get("newPassword"))!=null&&f.touched||(f=d.resetpasswordform.get("newPassword"))!=null&&f.dirty)?13:-1),s(3),u(16,d.isloading?16:-1),s(),u(17,d.newpassMessage?17:-1)}}var ce=(()=>{let r=class r{constructor(){this._AuthService=b(k),this._Router=b(V),this.isloading=!1,this.forgetMessage="",this.codeMessage="",this.newpassMessage="",this.setp=1,this.verifyEmailform=new S({email:new w(null,[c.required,c.email])}),this.verifyCodeform=new S({resetCode:new w(null,[c.required,c.pattern(/^[0-9]{6,}$/)])}),this.resetpasswordform=new S({email:new w(null,[c.required,c.email]),newPassword:new w(null,[c.required,c.pattern(/^[\w]{6,}$/)])})}verifyEmailFunc(){this.isloading=!0;let n=this.verifyEmailform.value.email;this.resetpasswordform.get("email")?.patchValue(n),this.unsubforgetpass=this._AuthService.forgetpassword(this.verifyEmailform.value).subscribe({next:i=>{this.isloading=!1,console.log(i),this.forgetMessage=i.statusMsg,i.statusMsg=="success"&&setTimeout(()=>{this.setp=2},1e3)}})}verifyCodeFunc(){this.isloading=!0,this.unsubverifyCode=this.unsubforgetpass=this._AuthService.verifyCode(this.verifyCodeform.value).subscribe({next:n=>{this.isloading=!1,this.codeMessage=n.status,console.log(n),n.status=="Success"&&setTimeout(()=>{this.setp=3},1e3)}})}resetpasswordFunc(){this.isloading=!0,this.unsubresetpassword=this.unsubforgetpass=this._AuthService.resetpassword(this.resetpasswordform.value).subscribe({next:n=>{this.isloading=!1,this.newpassMessage="Success",setTimeout(()=>{localStorage.setItem("token",n.token),this._Router.navigate(["/home"])},1e3)}})}ngOnDestroy(){this.unsubforgetpass?.unsubscribe(),this.unsubverifyCode?.unsubscribe(),this.unsubresetpassword?.unsubscribe()}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=T({type:r,selectors:[["app-forgetpassword"]],standalone:!0,features:[M],decls:3,vars:1,consts:[[1,"bg-custome","shadow","p-3","my-2","rounded-4","my-3"],[1,"text-center","text-main","text-decoration-underline"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","email"],["id","email","type","email","formControlName","email",1,"form-control",3,"ngClass"],[1,"alert","alert-danger"],["type","submit",1,"btn-main","ms-auto","d-block"],[1,"fas","fa-spin","fa-spinner"],[1,"text-center","text-main","alert","alert-light","w-50","mx-auto"],[1,"m-0"],["for","resetcode"],["id","resetcode","type","text","formControlName","resetCode",1,"form-control",3,"ngClass"],["readonly","","id","email","type","text","formControlName","email",1,"form-control",3,"ngClass"],["for","newpassword"],["id","newpassword","type","password","formControlName","newPassword",1,"form-control",3,"ngClass"]],template:function(i,f){i&1&&m(0,H,13,8,"section",0)(1,W,13,8)(2,re,18,13),i&2&&u(0,f.setp==1?0:f.setp==2?1:f.setp==3?2:-1)},dependencies:[R,A,q,N,G,D,I,P]});let t=r;return t})();export{ce as ForgetpasswordComponent};
