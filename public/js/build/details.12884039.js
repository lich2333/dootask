import{n as T,I as x}from"./app.4c333b9d.js";import{I as b}from"./ImgUpload.13174543.js";var S=function(){var a,i,n,r,o,v,p,m,u,h,t=this,w=t.$createElement,e=t._self._c||w;return e("div",{staticClass:"approve-details",style:{"z-index":t.modalTransferIndex}},[e("div",{staticClass:"approve-details-box"},[e("h2",{staticClass:"approve-details-title"},[e("span",[t._v(t._s(t.$L(t.datas.proc_def_name)))]),t.datas.state==0?e("Tag",{attrs:{color:"cyan"}},[t._v(t._s(t.$L("\u5F85\u5BA1\u6279")))]):t._e(),t.datas.state==1?e("Tag",{attrs:{color:"cyan"}},[t._v(t._s(t.$L("\u5BA1\u6279\u4E2D")))]):t._e(),t.datas.state==2?e("Tag",{attrs:{color:"green"}},[t._v(t._s(t.$L("\u5DF2\u901A\u8FC7")))]):t._e(),t.datas.state==3?e("Tag",{attrs:{color:"red"}},[t._v(t._s(t.$L("\u5DF2\u62D2\u7EDD")))]):t._e(),t.datas.state==4?e("Tag",{attrs:{color:"red"}},[t._v(t._s(t.$L("\u5DF2\u64A4\u56DE")))]):t._e()],1),e("h3",{staticClass:"approve-details-subtitle"},[e("Avatar",{attrs:{src:t.datas.userimg,size:"24"}}),e("span",[t._v(t._s(t.datas.start_user_name))])],1),e("h3",{staticClass:"approve-details-subtitle"},[e("span",[t._v(t._s(t.$L("\u63D0\u4EA4\u4E8E"))+" "+t._s(t.datas.start_time))])]),e("Divider"),(t.datas.proc_def_name||"").indexOf("\u73ED")==-1?e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u5047\u671F\u7C7B\u578B")))]),e("p",[t._v(t._s(t.$L((a=t.datas.var)===null||a===void 0?void 0:a.type)))])]):t._e(),e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u5F00\u59CB\u65F6\u95F4")))]),e("p",[t._v(t._s((i=t.datas.var)===null||i===void 0?void 0:i.start_time))])]),e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u7ED3\u675F\u65F6\u95F4")))]),e("p",[t._v(t._s((n=t.datas.var)===null||n===void 0?void 0:n.end_time))])]),e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u65F6\u957F"))+"\uFF08"+t._s(t.getTimeDifference((r=t.datas.var)===null||r===void 0?void 0:r.start_time,(o=t.datas.var)===null||o===void 0?void 0:o.end_time).unit)+"\uFF09")]),e("p",[t._v(t._s((v=t.datas.var)!==null&&v!==void 0&&v.start_time?t.getTimeDifference((p=t.datas.var)===null||p===void 0?void 0:p.start_time,(m=t.datas.var)===null||m===void 0?void 0:m.end_time).time:0))])]),e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u8BF7\u5047\u4E8B\u7531")))]),e("p",[t._v(t._s((u=t.datas.var)===null||u===void 0?void 0:u.description))])]),(h=t.datas.var)!==null&&h!==void 0&&h.other?e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u56FE\u7247")))]),e("div",{staticClass:"img-body"},t._l(t.datas.var.other.split(","),function(s,l){return e("div",{on:{click:function(d){return t.onViewPicture(s)}}},[e("ImgView",{key:l,staticClass:"img-view",attrs:{src:s}})],1)}),0)]):t._e(),e("Divider"),e("h3",{staticClass:"approve-details-subtitle"},[t._v(t._s(t.$L("\u5BA1\u6279\u8BB0\u5F55")))]),e("Timeline",{staticClass:"approve-record-timeline"},[t._l(t.datas.node_infos,function(s,l){var d,c,_,$,f,g,y,L,C;return[s.type=="starter"?e("TimelineItem",{key:l,attrs:{color:"green"}},[e("p",{staticClass:"timeline-title"},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),e("div",{staticClass:"timeline-body"},[e("Avatar",{attrs:{src:t.data.userimg||t.datas.userimg,size:"38"}}),e("div",{staticClass:"approve-process-left"},[e("p",{staticClass:"approve-process-name"},[t._v(t._s(t.data.start_user_name||t.datas.start_user_name))]),e("p",{staticClass:"approve-process-state"},[t._v(t._s(t.$L("\u5DF2\u63D0\u4EA4")))])]),e("div",{staticClass:"approve-process-right"},[parseInt(t.getTimeAgo(s.claim_time))<t.showTimeNum?e("p",[t._v(t._s(t.getTimeAgo(s.claim_time)))]):t._e(),e("p",[t._v(t._s((d=s.claim_time)===null||d===void 0?void 0:d.substr(0,16)))])])],1)]):t._e(),s.type=="approver"&&s._show?e("TimelineItem",{key:l,attrs:{color:s.identitylink?((c=s.identitylink)===null||c===void 0?void 0:c.state)>1?"#f03f3f":"green":"#ccc"}},[e("p",{staticClass:"timeline-title"},[t._v(t._s(t.$L("\u5BA1\u6279")))]),e("div",{staticClass:"timeline-body"},[e("Avatar",{attrs:{src:s.node_user_list&&((_=s.node_user_list[0])===null||_===void 0?void 0:_.userimg)||s.userimg,size:"38"}}),e("div",{staticClass:"approve-process-left"},[e("p",{staticClass:"approve-process-name"},[t._v(t._s(s.approver))]),s.identitylink?t._e():e("p",{staticClass:"approve-process-state",staticStyle:{color:"#6d6d6d"}},[t._v("\u5F85\u5BA1\u6279")]),s.identitylink?e("p",{staticClass:"approve-process-state"},[s.identitylink.state==0?e("span",{staticStyle:{color:"#496dff"}},[t._v(t._s(t.$L("\u5BA1\u6279\u4E2D")))]):t._e(),s.identitylink.state==1?e("span",[t._v(t._s(t.$L("\u5DF2\u901A\u8FC7")))]):t._e(),s.identitylink.state==2?e("span",{staticStyle:{color:"#f03f3f"}},[t._v(t._s(t.$L("\u5DF2\u62D2\u7EDD")))]):t._e(),s.identitylink.state==3?e("span",{staticStyle:{color:"#f03f3f"}},[t._v(t._s(t.$L("\u5DF2\u64A4\u56DE")))]):t._e()]):t._e()]),e("div",{staticClass:"approve-process-right"},[parseInt(t.getTimeAgo(s.claim_time))<t.showTimeNum?e("p",[t._v(" "+t._s((($=s.identitylink)===null||$===void 0?void 0:$.state)==0?t.$L("\u5DF2\u7B49\u5F85")+" "+t.getTimeAgo(t.datas.node_infos[l-1].claim_time,2):s.claim_time?t.getTimeAgo(s.claim_time):"")+" ")]):t._e(),e("p",[t._v(t._s((f=s.claim_time)===null||f===void 0?void 0:f.substr(0,16)))])])],1),(g=s.identitylink)!==null&&g!==void 0&&g.comment?e("p",{staticClass:"comment"},[e("span",[t._v("\u201C"+t._s((y=s.identitylink)===null||y===void 0?void 0:y.comment)+"\u201D")])]):t._e()]):t._e(),s.type=="notifier"&&s._show?e("TimelineItem",{key:l,attrs:{color:s.is_finished?"green":"#ccc"}},[e("p",{staticClass:"timeline-title"},[t._v(t._s(t.$L("\u6284\u9001")))]),e("div",{staticClass:"timeline-body"},[e("Avatar",{attrs:{src:t.$A.apiUrl("../images/avatar/default_approval.png"),size:"38"}}),e("div",{staticClass:"approve-process-left"},[e("p",{staticClass:"approve-process-name"},[t._v(t._s(t.$L("\u7CFB\u7EDF")))]),e("p",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.$L("\u81EA\u52A8\u6284\u9001"))+" "),e("span",{staticStyle:{color:"#486fed"}},[t._v(" "+t._s((L=s.node_user_list)===null||L===void 0?void 0:L.map(function(I){return I.name}).join(","))+" "+t._s(t.$L("\u7B49"+((C=s.node_user_list)===null||C===void 0?void 0:C.length)+"\u4EBA"))+" ")])])])],1)]):t._e(),s.aprover_type=="end"?e("TimelineItem",{key:l,attrs:{color:s.is_finished?"green":"#ccc"}},[e("p",{staticClass:"timeline-title"},[t._v(t._s(t.$L("\u7ED3\u675F")))]),e("div",{staticClass:"timeline-body"},[e("Avatar",{attrs:{src:t.$A.apiUrl("../images/avatar/default_approval.png"),size:"38"}}),e("div",{staticClass:"approve-process-left"},[e("p",{staticClass:"approve-process-name"},[t._v(t._s(t.$L("\u7CFB\u7EDF")))]),e("p",{staticStyle:{"font-size":"12px"}},[t._v(" "+t._s(t.datas.is_finished?t.$L("\u5DF2\u7ED3\u675F"):t.$L("\u672A\u7ED3\u675F")))])])],1)]):t._e()]})],2),t.datas.global_comment?[e("Divider"),e("h3",{staticClass:"approve-details-subtitle"},[t._v(t._s(t.$L("\u5168\u6587\u8BC4\u8BBA")))]),e("div",{staticClass:"approve-record-comment"},[e("List",{attrs:{split:!1,border:!1}},t._l(t.datas.global_comments,function(s,l){return e("ListItem",{key:l},[e("div",[e("div",{staticClass:"top"},[e("Avatar",{attrs:{src:s.userimg,size:"38"}}),e("div",[e("p",[t._v(t._s(s.nickname))]),e("p",{staticClass:"time"},[t._v(t._s(s.created_at))])]),e("span",[t._v(t._s(t.getTimeAgo(s.created_at,2)))])],1),e("div",{staticClass:"content"},[t._v(" "+t._s(t.getContent(s.content))+" ")]),e("div",{staticClass:"content",staticStyle:{display:"flex",gap:"10px"}},t._l(t.getPictures(s.content),function(d,c){return e("div",{key:c,on:{click:function(_){return t.onViewPicture(d)}}},[e("ImgView",{staticClass:"img-view",attrs:{src:d}})],1)}),0)])])}),1)],1)]:t._e()],2),e("div",{staticClass:"approve-operation"},[e("div",{staticStyle:{flex:"1"}}),(t.datas.candidate||"").split(",").indexOf(t.userId+"")!=-1?e("Button",{attrs:{type:"success"},on:{click:function(s){return t.approve(1)}}},[t._v(t._s(t.$L("\u540C\u610F")))]):t._e(),(t.datas.candidate||"").split(",").indexOf(t.userId+"")!=-1?e("Button",{attrs:{type:"error"},on:{click:function(s){return t.approve(2)}}},[t._v(t._s(t.$L("\u62D2\u7EDD")))]):t._e(),t.isShowWarningBtn?e("Button",{attrs:{type:"warning"},on:{click:t.revocation}},[t._v(t._s(t.$L("\u64A4\u9500")))]):t._e(),e("Button",{attrs:{type:"success",ghost:""},on:{click:t.comment}},[t._v("+"+t._s(t.$L("\u6DFB\u52A0\u8BC4\u8BBA")))])],1),e("Modal",{staticClass:"page-approve-initiate",attrs:{title:t.$L("\u8BC4\u8BBA"),"mask-closable":!1},model:{value:t.commentShow,callback:function(s){t.commentShow=s},expression:"commentShow"}},[e("Form",{ref:"initiateRef",attrs:{model:t.commentData,rules:t.commentRule,"label-width":"auto"},nativeOn:{submit:function(s){s.preventDefault()}}},[e("FormItem",{attrs:{prop:"content",label:t.$L("\u5185\u5BB9")}},[e("Input",{attrs:{type:"textarea"},model:{value:t.commentData.content,callback:function(s){t.$set(t.commentData,"content",s)},expression:"commentData.content"}})],1),e("FormItem",{attrs:{prop:"pictures",label:t.$L("\u56FE\u7247")}},[e("ImgUpload",{attrs:{num:3,width:512,height:512,whcut:1},model:{value:t.commentData.pictures,callback:function(s){t.$set(t.commentData,"pictures",s)},expression:"commentData.pictures"}})],1)],1),e("div",{staticClass:"adaption",attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"default"},on:{click:function(s){t.commentShow=!1}}},[t._v(t._s(t.$L("\u53D6\u6D88")))]),e("Button",{attrs:{type:"primary",loading:t.loadIng>0},on:{click:t.confirmComment}},[t._v(t._s(t.$L("\u786E\u8BA4")))])],1)],1)],1)},A=[];const D={name:"details",components:{ImgView:x,ImgUpload:b},props:{data:{type:Object,default(){return{}}}},data(){return{modalTransferIndex:window.modalTransferIndex,datas:{},showTimeNum:24,commentShow:!1,loadIng:0,commentData:{content:"",pictures:[]},commentRule:{content:{type:"string",required:!0,message:this.$L("\u8BF7\u8F93\u5165\u5185\u5BB9\uFF01"),trigger:"change"}}}},watch:{$route(a,i){a.name=="manage-approve-details"&&this.init()},data:{handler(a,i){a.id&&this.getInfo()},deep:!0}},computed:{isShowWarningBtn(){var i;let a=this.userId==this.datas.start_user_id&&((i=this.datas)==null?void 0:i.is_finished)!=!0;return(this.datas.node_infos||[]).map(n=>{var r;n.type!="starter"&&n.is_finished==!0&&((r=n.identitylink)==null?void 0:r.userid)!=this.userId&&(a=!1)}),a}},mounted(){this.init()},methods:{init(){this.modalTransferIndex=window.modalTransferIndex=window.modalTransferIndex+1,this.$route.query.id&&(this.data.id=this.$route.query.id,this.getInfo())},getTimeAgo(a,i){const r=(new Date-new Date((a+"").replace(/-/g,"/")))/1e3;if(r<60)return i==2?"0"+this.$L("\u5206\u949F"):this.$L("\u521A\u521A");if(r<3600){const o=Math.floor(r/60);return i==2?`${o}${this.$L("\u5206\u949F")}`:`${o} ${this.$L("\u5206\u949F\u524D")}`}else if(r<3600*24){const o=Math.floor(r/3600);return i==2?`${o}${this.$L("\u5C0F\u65F6")}`:`${o} ${this.$L("\u5C0F\u65F6\u524D")}`}else{const o=Math.floor(r/3600/24);return i==2?`${o+1}${this.$L("\u5929")}`:`${o+1} ${this.$L("\u5929")}`}},getTimeDifference(a,i){const r=(new Date((i+"").replace(/-/g,"/"))-new Date((a+"").replace(/-/g,"/")))/1e3;return r<60?{time:r,unit:this.$L("\u79D2")}:r<3600?{time:Math.floor(r/60),unit:this.$L("\u5206\u949F")}:r<3600*24?{time:Math.floor(r/3600),unit:this.$L("\u5C0F\u65F6")}:{time:Math.floor(r/3600/24)+1,unit:this.$L("\u5929")}},getInfo(){this.datas=this.data,this.$store.dispatch("call",{method:"get",url:"approve/process/detail",data:{id:this.data.id}}).then(({data:a})=>{var i=!0;a.node_infos=a.node_infos.map(n=>{var r,o;return n._show=i,(((r=n.identitylink)==null?void 0:r.state)==2||((o=n.identitylink)==null?void 0:o.state)==3)&&(i=!1),n}),this.datas=a}).catch(({msg:a})=>{$A.modalError(a)}).finally(a=>{this.loadIng--})},approve(a){$A.modalInput({title:"\u5BA1\u6279",placeholder:"\u8BF7\u8F93\u5165\u5BA1\u6279\u610F\u89C1",type:"textarea",okText:a==1?"\u540C\u610F":"\u62D2\u7EDD",onOk:i=>a!=1&&!i?"\u8BF7\u8F93\u5165\u5BA1\u6279\u610F\u89C1":(this.$store.dispatch("call",{url:"approve/task/complete",data:{task_id:this.datas.task_id,pass:a==1,comment:i}}).then(({msg:n})=>{$A.messageSuccess(n),this.$route.name=="manage-approve-details"||this.$route.name=="manage-messenger"?this.getInfo():this.$emit("approve")}).catch(({msg:n})=>{$A.modalError(n)}),!1)})},revocation(){$A.modalConfirm({content:"\u4F60\u786E\u5B9A\u8981\u64A4\u9500\u5417\uFF1F",loading:!0,onOk:()=>new Promise((a,i)=>(this.$store.dispatch("call",{url:"approve/task/withdraw",data:{task_id:this.datas.task_id,proc_inst_id:this.datas.id}}).then(({msg:n})=>{$A.messageSuccess(n),a(),this.$route.name=="manage-approve-details"||this.$route.name=="manage-messenger"?this.getInfo():this.$emit("revocation")}).catch(({msg:n})=>{$A.modalError(n),a()}),!1))})},comment(){this.commentShow=!0},confirmComment(){this.loadIng++,this.$store.dispatch("call",{method:"post",url:"approve/process/addGlobalComment",data:{proc_inst_id:this.data.id,content:JSON.stringify({content:this.commentData.content,pictures:this.commentData.pictures.map(a=>a.path)})}}).then(({msg:a})=>{$A.messageSuccess("\u6DFB\u52A0\u6210\u529F"),this.$route.name=="manage-approve-details"||this.$route.name=="manage-messenger"?this.getInfo():this.$emit("approve"),this.commentShow=!1}).catch(({msg:a})=>{$A.modalError(a)}).finally(a=>{this.loadIng--})},getContent(a){try{return JSON.parse(a).content||""}catch{return""}},getPictures(a){try{return JSON.parse(a).pictures||[]}catch{return""}},onViewPicture(a){this.$store.dispatch("previewImage","/"+a)}}},k={};var z=T(D,S,A,!1,O,null,null,null);function O(a){for(let i in k)this[i]=k[i]}var V=function(){return z.exports}();export{V as default};
