define(function(require,exports,module){function e(e,t){var e=new Date(e),t=new Date(t),i=t.getTime()-e.getTime(),o=(Math.floor(i/864e5),i%864e5),n=Math.floor(o/36e5),r=o%36e5;return n+"时 "+Math.floor(r/6e4)+"分"}function t(){$("#all-infor-history").bootstrapTable("destroy"),$("#all-infor-history").bootstrapTable({columns:[{checkbox:!0},{field:"infor_context",searchable:!0,sortable:!0,title:"信息内容",formatter:function(e,t,i){return e.length<=50?e:e.substring(0,44)+"......"}},{field:"infor_post_type",searchable:!0,sortable:!0,title:"信息类型",formatter:function(e,t,i){var o="";switch(e){case"qq":o="QQ";break;case"qqGroup":o="QQ群";break;case"weixin":o="微信";break;case"weixinGroup":o="微信群"}return o}},{field:"infor_post_people",title:"发送方",formatter:function(e,t,i){return e+"--"+t.number_name}},{field:"infor_get_people",title:"接收方",formatter:function(e,t,i){return e+"--"+t.get_remark}},{field:"infor_post_time",title:"推送时间",formatter:function(e,t,i){return e.substring(0,16)}},{field:"infor_finish_time",title:"完成时间",formatter:function(e,t,i){return e.substring(0,16)}},{field:"infor_finish_time",title:"时间差",formatter:function(t,i,o){return e(i.infor_post_time.substring(0,16).replace(/-/g,"/"),i.infor_finish_time.substring(0,16).replace(/-/g,"/"))}},{field:"user_name",searchable:!0,title:"完成者"}],pageNumber:1,pageSize:25,dataField:"data",undefinedText:"--",sidePagination:"server",classes:"table table-bordered table-hover",method:"post",url:i.baseUrl+"/getAllHistory",queryParamsType:"undefined",queryParams:function(e){return{pageNumber:e.pageNumber,pageSize:e.pageSize,tableChoiceData:JSON.stringify(o)}},pagination:!0,paginationHAlign:"left",paginationDetailHAlign:"right",onDblClickRow:function(e){console.log(e)},onLoadSuccess:function(e){}})}var i=require("../../common/api"),o=(window.parent.SYSTEM,{});$.datetimepicker.setLocale("zh"),$("#choose-start-time").datetimepicker({format:"Y-m-d H:i",onShow:function(e){this.setOptions({maxDate:!!$("#choose-end-time").val()&&$("#choose-end-time").val()})}}),$("#choose-end-time").datetimepicker({format:"Y-m-d H:i",onShow:function(e){this.setOptions({minDate:!!$("#choose-start-time").val()&&$("#choose-start-time").val()})}}),$("#finish-time").focus(function(){$("#choose-time-section").stop().slideDown()}),$("#remove-choose-time").unbind("click").click(function(){$("#choose-time-section").stop().slideUp()}),$("#sure-choose-time").unbind("click").click(function(){var e=$("#choose-start-time").val(),t=$("#choose-end-time").val();if(""==e)$("#finish-time").val("");else{var i=e+"&"+t;$("#finish-time").val(i),$("#choose-start-time").val(""),$("#choose-end-time").val("")}$("#choose-time-section").stop().slideUp()}),$("#search-history-data").unbind("click").click(function(){var e={},i=$("#post-number").val(),n=$("#get-number").val(),r=$("#finish-time").val(),a=$("#finish-people").val(),s=$("#history-type").val(),l=$("#customer-name").val();""!==i&&(e.infor_post_people=i),""!==n&&(e.infor_get_people=n),""!==r&&(e.infor_finish_time=r),""!==a&&(e.user_name=a),""!==s&&(e.infor_post_type=s),""!==l&&(e.customer_name=l),o=e,t()}),t()});