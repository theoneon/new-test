"use strict";(self["webpackChunkcompany_manage"]=self["webpackChunkcompany_manage"]||[]).push([[330],{8633:function(e,s,o){o.r(s),o.d(s,{default:function(){return m}});var t=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",[o("div",{staticClass:"login bg-blur"}),o("div",{staticClass:"box"},[o("h2",[e._v("后台管理系统")]),o("div",{staticClass:"loginForm"},[o("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:e.loginForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{prop:"name"}},[o("i",{staticClass:"el-icon-user"}),o("el-input",{attrs:{placeholder:"账号",autocomplete:"off"},model:{value:e.loginForm.name,callback:function(s){e.$set(e.loginForm,"name",s)},expression:"loginForm.name"}})],1),o("el-form-item",{attrs:{prop:"password"}},[o("div",{staticStyle:{float:"left",cursor:"pointer"},on:{click:function(s){e.showPass=!e.showPass}}},[o("i",{directives:[{name:"show",rawName:"v-show",value:!e.showPass,expression:"!showPass"}],staticClass:"el-icon-lock"}),o("i",{directives:[{name:"show",rawName:"v-show",value:e.showPass,expression:"showPass"}],staticClass:"el-icon-unlock"})]),o("div",{staticStyle:{float:"left"}},[o("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.showPass,expression:"!showPass"}],attrs:{type:"password",placeholder:"密码",autocomplete:"off"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.submitForm("loginForm")}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),o("el-input",{directives:[{name:"show",rawName:"v-show",value:e.showPass,expression:"showPass"}],attrs:{type:"text",placeholder:"密码",autocomplete:"off"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.submitForm("loginForm")}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}})],1)]),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(s){return e.submitForm("loginForm")}}},[e._v("登录")])],1)],1)],1)])])},a=[],r={name:"Login",data(){return{showPass:!1,loginForm:{name:"",password:""},rules:{name:[{required:!0,message:"账号不能为空",trigger:"blur"},{min:4,max:10,message:"账号为4-10位",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:4,max:12,message:"密码长度为4-12位",trigger:"blur"}]}}},methods:{login(){this.$axios.post("/login",{params:{loginData:this.loginForm}}).then((e=>{console.log(e);const{code:s,message:o,token:t}=e.data;200===s?(window.sessionStorage.setItem("token",JSON.stringify(t)),this.$router.push("/home"),this.$message({message:o,type:"success"})):alert(o)}))},submitForm(e){this.$refs[e].validate((e=>{e?(this.login(),console.log("success login!!")):console.log("error login!!")}))}}},n=r,i=o(1001),l=(0,i.Z)(n,t,a,!1,null,"52f95430",null),m=l.exports}}]);
//# sourceMappingURL=330.3ba9e029.js.map