"use strict";(self["webpackChunks011"]=self["webpackChunks011"]||[]).push([[5576],{5576:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("菜品订单详情")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("FormItem",{attrs:{label:"订单编号",prop:"id"}},[e("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),e("FormItem",{attrs:{label:"下单人",prop:"userName"}},[e("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}})],1),e("FormItem",{attrs:{label:"下单时间",prop:"orderTime"}},[e("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:t.form.orderTime,callback:function(e){t.$set(t.form,"orderTime",e)},expression:"form.orderTime"}})],1),e("FormItem",{attrs:{label:"订单总价",prop:"sumMoney"}},[e("InputNumber",{staticStyle:{width:"570px"},attrs:{readonly:"",min:"0",max:"5000000"},model:{value:t.form.sumMoney,callback:function(e){t.$set(t.form,"sumMoney",e)},expression:"form.sumMoney"}})],1),e("FormItem",{attrs:{label:"订单件数",prop:"orderSize"}},[e("InputNumber",{staticStyle:{width:"570px"},attrs:{readonly:"",min:"0",max:"5000000"},model:{value:t.form.orderSize,callback:function(e){t.$set(t.form,"orderSize",e)},expression:"form.orderSize"}})],1),e("FormItem",{attrs:{label:"订单状态",prop:"status"}},[e("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"24"}},[e("Divider",[t._v(" 订单详细 ")])],1),e("Col",{attrs:{span:"24"}},[e("Table",{attrs:{loading:t.itemLoading,border:"",stripe:"",size:"small",columns:t.itemColumns,data:t.itemList}})],1)],1)],1)],1)},r=[],o=s(8525);const a={name:"edit",components:{},props:{data:Object},data(){return{submitLoading:!1,form:{userId:"",userName:"",orderTime:"",sumMoney:0,orderSize:0,status:""},formValidate:{},itemList:[],itemLoading:!1,itemColumns:[{type:"index",width:100},{title:"菜品名称",key:"dishName",minWidth:180,tooltip:!0,sortable:!1},{title:"菜品单价",key:"unit",minWidth:180,tooltip:!0,sortable:!1},{title:"图片",key:"image",minWidth:180,tooltip:!0,sortable:!1,render:(t,e)=>void 0==e.row.image||""==e.row.image?t("div",[t("span",{style:{color:"#ff9900"}},"未上传")]):t("img",{attrs:{src:e.row.image},style:{cursor:"zoom-in",width:"100px",margin:"5px 0","object-fit":"contain"},on:{click:()=>{this.showFile(e.row.image)}}})},{title:"下单数量",key:"number",minWidth:180,tooltip:!0,sortable:!1},{title:"菜品总价",key:"sumMoney",minWidth:180,tooltip:!0,sortable:!1}]}},methods:{init(){this.handleReset(),this.form=this.data,this.getItemListFx()},getItemListFx(){var t=this;t.itemList=[],t.itemLoading=!0,(0,o.mC)({orderId:t.form.id}).then((e=>{t.itemLoading=!1,e.success&&(t.itemList=e.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,o.Hz)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)},showFile(t){window.open(t+"?preview=true")}},mounted(){this.init()}},l=a;var m=s(1001),d=(0,m.Z)(l,i,r,!1,null,null,null);const n=d.exports},8525:(t,e,s)=>{s.d(e,{Hz:()=>a,Lw:()=>l,am:()=>o,gw:()=>r,mC:()=>m,wv:()=>d});var i=s(7184);const r=t=>(0,i.A_)("/dishOrder/getByPage",t),o=t=>(0,i.j0)("/dishOrder/insert",t),a=t=>(0,i.j0)("/dishOrder/update",t),l=t=>(0,i.j0)("/dishOrder/delByIds",t),m=t=>(0,i.A_)("/dishOrderItem/getAllByOrderId",t),d=t=>(0,i.j0)("/dishOrder/changeStatus",t)}}]);