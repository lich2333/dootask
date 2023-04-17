import{n as r,d as c}from"./app.e5957493.js";var u=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:["common-user",e.maxHiddenClass]},[t("Select",{ref:"select",attrs:{transfer:e.transfer,placeholder:e.placeholder,size:e.size,loading:e.loadIng>0,"loading-text":e.$L("\u52A0\u8F7D\u4E2D..."),"default-label":e.value,"default-event-object":!0,"multiple-max":e.multipleMax,"multiple-uncancelable":e.uncancelable,"remote-method":e.remoteMethod,multiple:"",filterable:"","transfer-class-name":"common-user-transfer"},on:{"on-query-change":e.searchUser,"on-open-change":e.openChange},model:{value:e.selects,callback:function(i){e.selects=i},expression:"selects"}},[e.multipleMax?t("div",{staticClass:"user-drop-prepend",attrs:{slot:"drop-prepend"},slot:"drop-prepend"},[t("div",{staticClass:"user-drop-text"},[e._v(" "+e._s(e.$L("\u6700\u591A\u53EA\u80FD\u9009\u62E9"+e.multipleMax+"\u4E2A"))+" "),e.selects.length?t("em",[e._v("("+e._s(e.$L(`\u5DF2\u9009${e.selects.length}\u4E2A`))+")")]):e._e()]),t("Checkbox",{staticClass:"user-drop-check",on:{"on-change":e.onMultipleChange},model:{value:e.multipleCheck,callback:function(i){e.multipleCheck=i},expression:"multipleCheck"}})],1):e._e(),e._t("option-prepend"),e._l(e.list,function(i,l){return t("Option",{key:l,attrs:{value:i.userid,"key-value":`${i.email}|${i.pinyin}`,label:i.nickname,avatar:i.userimg,disabled:e.isDisabled(i.userid)}},[t("div",{staticClass:"user-input-option"},[t("div",{staticClass:"user-input-avatar"},[t("EAvatar",{staticClass:"avatar",attrs:{src:i.userimg}})],1),i.bot?t("div",{staticClass:"taskfont user-input-bot"},[e._v("\uE68C")]):e._e(),i.disable_at?t("div",{staticClass:"user-input-disable"},[e._v("["+e._s(e.$L("\u79BB\u804C"))+"]")]):e._e(),t("div",{staticClass:"user-input-nickname"},[e._v(e._s(i.nickname))]),t("div",{staticClass:"user-input-userid"},[e._v("ID: "+e._s(i.userid))])])])})],2),e.loadIng>0?t("div",{staticClass:"common-user-loading"},[t("Loading")],1):e._e()],1)},h=[];const o={name:"UserInput",props:{value:{type:[String,Number,Array],default:""},uncancelable:{type:Array,default:()=>[]},disabledChoice:{type:Array,default:()=>[]},placeholder:{default:""},size:{default:"default"},transfer:{type:Boolean,default:!0},multipleMax:{type:Number},maxHiddenInput:{type:Boolean,default:!0},maxHiddenSelect:{type:Boolean,default:!1},projectId:{type:Number,default:0},noProjectId:{type:Number,default:0},dialogId:{type:Number,default:0},showBot:{type:Boolean,default:!1},showDisable:{type:Boolean,default:!1}},data(){return{loadIng:0,selects:[],list:[],multipleCheck:!1,searchKey:null,searchHistory:[],subscribe:null}},mounted(){this.subscribe=c.Store.subscribe("cacheUserActive",e=>{let s=this.list.findIndex(({userid:t})=>t==e.userid);s>-1&&(this.$set(this.list,s,Object.assign({},this.list[s],e)),this.handleSelectData())})},beforeDestroy(){this.subscribe&&(this.subscribe.unsubscribe(),this.subscribe=null)},computed:{maxHiddenClass(){const{multipleMax:e,maxHiddenInput:s,selects:t}=this;return e&&s&&t.length>=e?"hidden-input":""}},watch:{value:{handler(){const e=this._tmpId=$A.randomString(6);setTimeout(()=>{e===this._tmpId&&this.valueChange()},10)},immediate:!0},selects(e){this.$emit("input",e),this.maxHiddenSelect&&e.length>=this.maxHiddenSelect&&this.$refs.select&&this.$refs.select.hideMenu(),this.calcMultipleSelect()}},methods:{searchUser(e){typeof e!="string"&&(e=""),this.searchKey=e;const s=this.searchHistory.find(t=>t.key==e);s&&(this.list=s.data,this.calcMultipleSelect()),s||this.loadIng++,setTimeout(()=>{if(this.searchKey!=e){s||this.loadIng--;return}this.$store.dispatch("call",{url:"users/search",data:{keys:{key:e,project_id:this.projectId,no_project_id:this.noProjectId,dialog_id:this.dialogId,bot:this.showBot&&e?2:0,disable:this.showDisable&&e?2:0},take:50}}).then(({data:t})=>{this.list=t,this.calcMultipleSelect();const i=this.searchHistory.findIndex(n=>n.key==e),l={key:e,data:t,time:$A.Time()};i>-1?this.searchHistory.splice(i,1,l):this.searchHistory.push(l)}).catch(({msg:t})=>{this.list=[],this.calcMultipleSelect(),$A.messageWarning(t)}).finally(t=>{s||this.loadIng--})},this.searchHistory.length>0?300:0)},isDisabled(e){return this.disabledChoice.length===0?!1:this.disabledChoice.includes(e)},openChange(e){e&&this.$nextTick(this.searchUser),this.calcMultipleSelect()},remoteMethod(){},valueChange(){this.selects!=this.value&&($A.isArray(this.value)?this.selects=$A.cloneJSON(this.value):this.value?this.selects=[this.value]:this.selects=[],this.selects.some(e=>{this.list.find(s=>s.userid==e)||(this.list.push({userid:e,nickname:e}),this.calcMultipleSelect(),this.$store.dispatch("getUserBasic",{userid:e}))}))},handleSelectData(){this.__handleSelectTimeout&&clearTimeout(this.__handleSelectTimeout),this.__handleSelectTimeout=setTimeout(()=>{if(!this.$refs.select)return;const e=this.$refs.select.getValue();e&&e.some(s=>{const t=this.list.find(({userid:i})=>i==s.value);t&&(this.$set(s,"label",t.nickname),this.$set(s,"avatar",t.userimg))})},100)},calcMultipleSelect(){this.multipleMax&&this.list.length>0?(this.calcMultipleTime&&clearTimeout(this.calcMultipleTime),this.calcMultipleTime=setTimeout(e=>{let s=!0;this.$refs.select.selectOptions.some(({componentInstance:t})=>{this.selects.includes(t.value)||(s=!1)}),this.multipleCheck=s},10)):this.multipleCheck=!1},onMultipleChange(e){if(e){let s=this.multipleMax-this.selects.length;this.$refs.select.selectOptions.some(({componentInstance:t})=>{if(this.multipleMax&&s<=0)return this.$nextTick(i=>{$A.messageWarning("\u5DF2\u8D85\u8FC7\u6700\u5927\u9009\u62E9\u6570\u91CF"),this.multipleCheck=!1}),!0;this.selects.includes(t.value)||(t.select(),s--)})}else this.selects=[]}}},a={};var d=r(o,u,h,!1,p,null,null,null);function p(e){for(let s in a)this[s]=a[s]}var m=function(){return d.exports}();export{m as U};
