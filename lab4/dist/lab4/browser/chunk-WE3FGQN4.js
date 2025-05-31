import{G as s,e as r,f as i,g as c,m as u,n as p,s as o,u as a}from"./chunk-WNX4Y5S5.js";var d=class n{constructor(t){this.routes=t}currentProduct=null;ngOnInit(){this.routes.paramMap.subscribe(t=>{this.currentProduct=t.get("id")})}static \u0275fac=function(e){return new(e||n)(i(s))};static \u0275cmp=c({type:n,selectors:[["app-product"]],decls:3,vars:1,template:function(e,m){e&1&&(u(0,"p"),o(1,"product works!"),p(),o(2)),e&2&&(r(2),a(`
Current Product: `,m.currentProduct,`
`))},encapsulation:2})};export{d as ProductComponent};
