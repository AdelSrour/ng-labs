import{g as s}from"./chunk-TJNLQOI3.js";import{Oa as u,Pa as p,Xa as o,Za as a,qa as n,ua as i,za as c}from"./chunk-QK76T7FY.js";var d=class r{constructor(t){this.routes=t}currentProduct=null;ngOnInit(){this.routes.paramMap.subscribe(t=>{this.currentProduct=t.get("id")})}static \u0275fac=function(e){return new(e||r)(i(s))};static \u0275cmp=c({type:r,selectors:[["app-product"]],decls:3,vars:1,template:function(e,m){e&1&&(u(0,"p"),o(1,"product works!"),p(),o(2)),e&2&&(n(2),a(`
Current Product: `,m.currentProduct,`
`))},encapsulation:2})};export{d as ProductComponent};
