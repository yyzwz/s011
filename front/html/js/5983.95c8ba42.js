"use strict";(self["webpackChunks011"]=self["webpackChunks011"]||[]).push([[5983],{5983:(t,s,e)=>{e.r(s),e.d(s,{default:()=>c});var i=function(){var t=this,s=t._self._c;return s("div",[s("Card",[s("div",{attrs:{slot:"title"},slot:"title"},[s("div",{staticClass:"edit-head"},[s("a",{staticClass:"back-title",on:{click:t.close}},[s("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),s("div",{staticClass:"head-name"},[t._v("菜品加购")]),s("span"),s("a",{staticClass:"window-close",on:{click:t.close}},[s("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),s("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[s("FormItem",{attrs:{label:"菜品",prop:"dishId"}},[s("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择菜品..."},model:{value:t.form.dishId,callback:function(s){t.$set(t.form,"dishId",s)},expression:"form.dishId"}},t._l(t.dishList,(function(e,i){return s("Option",{key:i,attrs:{value:e.id}},[t._v(t._s(e.title))])})),1)],1),s("FormItem",{attrs:{label:"加购数量",prop:"number"}},[s("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000",placeholder:"请输入加购数量..."},model:{value:t.form.number,callback:function(s){t.$set(t.form,"number",s)},expression:"form.number"}})],1),s("Form-item",{staticClass:"br"},[s("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("确认加购")]),s("Button",{on:{click:t.handleReset}},[t._v("重置")]),s("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},a=[],r=e(7772);const l={name:"add",components:{},data(){return{submitLoading:!1,form:{dishId:"",dishName:"",image:"",unit:0,number:0,sumMoney:0,userId:"",userName:"",inTime:""},formValidate:{},dishList:[]}},methods:{init(){this.getDishListFx()},getDishListFx(){var t=this;t.dishList=[],(0,r.UR)().then((s=>{s.success&&(t.dishList=s.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,r.gn)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=l;var n=e(1001),d=(0,n.Z)(o,i,a,!1,null,null,null);const c=d.exports},7772:(t,s,e)=>{e.d(s,{GC:()=>d,Mt:()=>o,UR:()=>n,X$:()=>a,fu:()=>l,gn:()=>r});var i=e(7184);const a=t=>(0,i.A_)("/shoppingCart/getByPage",t),r=t=>(0,i.j0)("/shoppingCart/insert",t),l=t=>(0,i.j0)("/shoppingCart/update",t),o=t=>(0,i.j0)("/shoppingCart/delByIds",t),n=t=>(0,i.A_)("/dish/getAll",t),d=t=>(0,i.j0)("/dishOrder/addOneOrder",t)}}]);