"use strict";(self["webpackChunks011"]=self["webpackChunks011"]||[]).push([[8040,6413],{8040:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑菜品")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"菜品名称",prop:"title"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",type:"textarea",rows:2,maxlength:"240","show-word-limit":"",placeholder:"请输入菜品名称..."},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"菜品分类",prop:"type"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择菜品分类..."},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.dishTypeList,(function(a,s){return t("Option",{key:s,attrs:{value:a.title}},[e._v(e._s(a.title))])})),1)],1),t("FormItem",{attrs:{label:"菜品介绍",prop:"content"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",type:"textarea",rows:4,maxlength:"240","show-word-limit":"",placeholder:"请输入菜品介绍..."},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),t("FormItem",{attrs:{label:"单价",prop:"unit"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000",placeholder:"请输入菜品单价（斤）..."},model:{value:e.form.unit,callback:function(t){e.$set(e.form,"unit",t)},expression:"form.unit"}})],1),t("FormItem",{attrs:{label:"剩余库存",prop:"stock"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000",placeholder:"请输入菜品剩余库存..."},model:{value:e.form.stock,callback:function(t){e.$set(e.form,"stock",t)},expression:"form.stock"}})],1),t("FormItem",{attrs:{label:"供应商",prop:"supplier"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",maxlength:"240","show-word-limit":"",placeholder:"请输入菜品供应商..."},model:{value:e.form.supplier,callback:function(t){e.$set(e.form,"supplier",t)},expression:"form.supplier"}})],1),t("FormItem",{attrs:{label:"图片",prop:"image"}},[t("upload-pic-input",{staticStyle:{width:"570px"},attrs:{placeholder:"请上传菜品图片..."},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},i=[],l=a(1191),r=a(6413);const o={name:"edit",components:{uploadPicInput:r["default"]},props:{data:Object},data(){return{submitLoading:!1,form:{title:"",content:"",unit:0,stock:0,supplier:"",image:""},formValidate:{},dishTypeList:[]}},methods:{init(){this.getDishTypeListFx(),this.handleReset(),this.form=this.data},getDishTypeListFx(){var e=this;e.dishTypeList=[],(0,l.k1)().then((t=>{t.success&&(e.dishTypeList=t.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.L6)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},n=o;var c=a(1001),d=(0,c.Z)(n,s,i,!1,null,null,null);const u=d.exports},6413:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{display:"flex"}},[t("Input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:e.placeholder,size:e.size,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,icon:"md-eye"},on:{"on-change":e.handleChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},[t("Poptip",{staticStyle:{width:"17px",cursor:"pointer"},attrs:{slot:"append",transfer:"",trigger:"hover",title:"图片预览",placement:"right",width:"350"},slot:"append"},[t("Button",{attrs:{type:"primary",icon:"md-eye"}}),t("div",{attrs:{slot:"content"},slot:"content"},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{width:"100%",margin:"0 auto",display:"block",cursor:"zoom-in"},attrs:{src:e.currentValue},on:{click:e.viewImage}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.currentValue,expression:"!currentValue"}]},[e._v("无效的图片链接")]),t("a",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{"margin-top":"5px","text-align":"right",display:"block"},on:{click:e.viewImage}},[e._v("查看大图")])])],1)],1),t("Upload",{attrs:{action:e.uploadFileUrl,headers:e.accessToken,"on-success":e.handleSuccess,"on-error":e.handleError,format:e.format,accept:e.accept,"max-size":1024*e.maxSize,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.beforeUpload,"show-upload-list":!1}},[t("Button",{attrs:{loading:e.loading,size:e.size,disabled:e.disabled,icon:e.icon}},[e._v("上传图片")])],1)],1)])},i=[],l=a(1949),r=a.n(l),o=a(7877);const n={name:"uploadPicInput",props:{value:String,size:String,placeholder:{type:String,default:"可输入图片链接"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:Number,icon:{type:String,default:"ios-cloud-upload-outline"},maxSize:{type:Number,default:5},accept:{type:String,default:".jpg, .jpeg, .png, .gif"}},computed:{format(){if(this.accept){let e=[];return this.accept.split(",").forEach((t=>{e.push(t.replace(".","").replace(" ",""))})),e}return[]}},data(){return{accessToken:{},currentValue:this.value,loading:!1,uploadFileUrl:o.cT}},methods:{init(){this.accessToken={accessToken:this.getStore("accessToken")}},viewImage(){let e=new Image;e.src=this.currentValue;let t=new(r())(e,{hidden:function(){t.destroy()}});t.show()},handleFormatError(e){this.loading=!1,this.$Notice.warning({title:"不支持的文件格式",desc:"所选文件‘ "+e.name+" ’格式不正确, 请选择 "+this.accept+" 格式文件"})},handleMaxSize(e){this.loading=!1,this.$Notice.warning({title:"文件大小过大",desc:"所选文件‘ "+e.name+" ’大小过大, 不得超过 "+this.maxSize+"M."})},beforeUpload(){return this.loading=!0,!0},handleSuccess(e,t){this.loading=!1,e.success?(this.currentValue=e.result,this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)):this.$Message.error(e.message)},handleError(e,t,a){this.loading=!1,this.$Message.error(e.toString())},handleChange(e){this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)}},mounted(){this.init()}},c=n;var d=a(1001),u=(0,d.Z)(c,s,i,!1,null,null,null);const p=u.exports},1191:(e,t,a)=>{a.d(t,{$H:()=>l,Hc:()=>c,L6:()=>r,P4:()=>d,UR:()=>i,gn:()=>u,k1:()=>n,oT:()=>o});var s=a(7184);const i=e=>(0,s.A_)("/dish/getByPage",e),l=e=>(0,s.j0)("/dish/insert",e),r=e=>(0,s.j0)("/dish/update",e),o=e=>(0,s.j0)("/dish/delByIds",e),n=e=>(0,s.A_)("/dishType/getAll",e),c=e=>(0,s.A_)("/dishCollection/addOne",e),d=e=>(0,s.A_)("/dishCollection/deleteOne",e),u=e=>(0,s.A_)("/shoppingCart/addOne",e)}}]);