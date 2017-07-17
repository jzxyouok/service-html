define(function(require,exports,module){function e(){var e={},t={};t.infor_title=$(".form-control.infor-title").val(),t.infor_context=$(".form-control.infor-context").val().replace(/\'/g,"‘"),t.infor_type=$("input[name=type-radio]:checked").val(),t.infor_grade=$("input[name=grade-radio]:checked").val(),t.infor_link=$(".form-control.infor-link").val(),t.infor_site=$(".form-control.infor-site").val(),t.infor_status="0",t.infor_source=$("input[name=info-resource]:checked").val(),t.infor_creater=p.user.user_loginname;var a=[];return $(".tag .label").each(function(){a.push($(this).attr("tag-id"))}),e.infor=t,e.inforTag=a,e}function t(){$("#all-infor").bootstrapTable("destroy"),$("#all-infor").bootstrapTable({columns:[{checkbox:!0},{field:"infor_title",searchable:!0,title:"信息标题",formatter:function(e,t,a){return e.length<=20?e:e.substring(0,15)+"......"}},{field:"infor_context",searchable:!0,title:"信息内容",formatter:function(e,t,a){return e.length<=80?e:e.substring(0,76)+"......"}},{field:"tag_names",title:"信息标签",formatter:function(e,t,a){return e.length<=10?e:e.substring(0,6)+"......"}},{field:"infor_type",title:"信息类型",formatter:function(e,t,a){return 1==e?"正面":"负面"}},{field:"infor_grade",title:"信息等级"},{field:"infor_source",title:"信息来源"},{field:"infor_createtime",searchable:!0,title:"提交时间"},{field:"user_name",searchable:!0,title:"创建者"},{field:"infor_status",title:"发送状态"}],pageNumber:1,pageSize:10,dataField:"data",undefinedText:"--",sidePagination:"server",showColumns:"true",classes:"table table-bordered table-hover",method:"post",showExport:!0,exportDataType:"basic",url:o.baseUrl+"/getAllInfor",queryParamsType:"undefined",queryParams:function(e){return{pageNumber:e.pageNumber,pageSize:e.pageSize,searchTagId:g.join(","),searchInfoData:JSON.stringify(u),customerName:h}},pagination:!0,paginationHAlign:"left",paginationDetailHAlign:"right",onDblClickRow:function(e){i=e.id,r=!1,l=layer.open({title:" 编辑信息 (创建者:"+e.user_name+")",type:1,area:["52%","98%"],content:$("#add-infor")}),n(e,!1)},onLoadSuccess:function(e){}})}function a(e,t,a){for(var n=$.fn.zTree.getZTreeObj("scheme-area-tree"),i=n.transformToArray(a),r=i.length,l=[],c=0;c<r;c++)l.push(i[c].id);o.movement.severCustomer.getAllServeCustomers(l.join(","),function(e){for(var t=e.data,a=e.total,n=[],o=0;o<a;o++)n.push('<label class="radio-inline">'),n.push('<input type="radio" name="schemeOptions" schemeName="'+t[o].customer_name+'"  value="'+t[o].id+'" checked>'),n.push(""+t[o].customer_name),n.push("</label>");$("#search-scheme-name").val(""),$(".scheme-info").empty(),$(".scheme-info").append(n.join(""))})}function n(e,t){if(m.tagOperation.writeTagData(!1,"","tag-tree"),t)$(".form-control.infor-title").val(""),$(".form-control.infor-context").val(""),$("input[name=type-radio][value = 0]").prop("checked",!0),$("input[name=grade-radio][value = 3]").prop("checked",!0),$(".form-control.infor-link").val(""),$(".form-control.infor-site").val(""),$(".tag").empty(),$(".my-tag-show .label").removeClass("label-primary"),$(".my-tag-show .label").addClass("label-danger"),$(".my-tag-show .label").children("span").removeClass("glyphicon-ok"),$(".my-tag-show .label").children("span").addClass("glyphicon-arrow-up");else{$(".my-tag-show .label").removeClass("label-primary"),$(".my-tag-show .label").addClass("label-danger"),$(".my-tag-show .label").children("span").removeClass("glyphicon-ok"),$(".my-tag-show .label").children("span").addClass("glyphicon-arrow-up"),$(".form-control.infor-title").val(e.infor_title),$(".form-control.infor-context").val(e.infor_context),$("input[name=info-resource][value="+e.infor_source+"]").prop("checked",!0),$("input[name=type-radio][value = "+e.infor_type+"]").prop("checked",!0),$("input[name=grade-radio][value = "+e.infor_grade+"]").prop("checked",!0),$(".form-control.infor-link").val(e.infor_link),$(".form-control.infor-site").val(e.infor_site);for(var a=e.tag_ids.split(","),n=e.tag_names.split(","),o=a.length,i=[],r=0;r<o;r++)i.push('<span class="label  label-warning span-icon-cursor" tag-id="'+a[r]+'">'+n[r]+"&nbsp;&nbsp;"),i.push('<span class="glyphicon glyphicon-remove"></span></span>'),$(".my-tag-show .label[tag-id = "+a[r]+"]").removeClass("label-danger"),$(".my-tag-show .label[tag-id = "+a[r]+"]").addClass("label-primary"),$(".my-tag-show .label[tag-id = "+a[r]+"]").children("span").removeClass("glyphicon-arrow-up"),$(".my-tag-show .label[tag-id = "+a[r]+"]").children("span").addClass("glyphicon-ok"),m.tagOperation.writeTagData(!0,a[r],"tag-tree");$(".tag").empty(),$(".tag").append(i.join(""))}}var o=require("../../common/api");require("../../../spm_modules/datepicker/jquery.datetimepicker.full.min");var i,r,l,c,s,f,m=require("../../common/tagshow"),d=require("../../common/tagshow"),p=window.parent.SYSTEM,g=[],u={},h="",b="";$.datetimepicker.setLocale("zh"),$("#choose-start-time").datetimepicker({format:"Y-m-d H:i",onShow:function(e){this.setOptions({maxDate:!!$("#choose-end-time").val()&&$("#choose-end-time").val()})}}),$("#choose-end-time").datetimepicker({format:"Y-m-d H:i",onShow:function(e){this.setOptions({minDate:!!$("#choose-start-time").val()&&$("#choose-start-time").val()})}}),$("#contact-info-time").focus(function(){$("#choose-time-section").stop().slideDown()}),$("#remove-choose-time").unbind("click").click(function(){$("#choose-time-section").stop().slideUp()}),$("#sure-choose-time").unbind("click").click(function(){var e=$("#choose-start-time").val(),t=$("#choose-end-time").val();if(""==e)$("#contact-info-time").val("");else{var a=e+"&"+t;$("#contact-info-time").val(a),$("#choose-start-time").val(""),$("#choose-end-time").val("")}$("#choose-time-section").stop().slideUp()}),m.tagOperation.writeDomTag(!1,"tag-tree"),d.tagOperation.writeDomTag(!1,"choose-tag-tree"),$("#add-infor-btn").unbind("click").click(function(){n(null,!0),r=!0,l=layer.open({title:" 新增信息 (监测信息员:"+p.user.user_name+")",type:1,area:["52%","98%"],content:$("#add-infor")})}),$("#add-other-tag").unbind("click").click(function(){c=layer.open({title:"标 签 选 择（额 外 标 签）",type:1,area:["32%","98%"],content:$("#other-tag-choose"),zIndex:layer.zIndex,success:function(e){layer.setTop(e)}})}),$("#cancel-btn").unbind("click").click(function(){$(".form-control.infor-write").val(""),layer.close(l)}),$("#contact-info-tag").focus(function(){f=layer.open({title:"标 签 选 择（额 外 标 签）",type:1,area:["32%","98%"],content:$("#search-tag-choose"),zIndex:layer.zIndex,success:function(e){layer.setTop(e)}})}),$("#delete-infor-btn").unbind("click").click(function(){var e=$("#all-infor").bootstrapTable("getSelections",null),a=e.length,n=[];if(0===a)layer.msg(" 没 有 选 中 任 何 数 据 ");else{for(var i=0;i<a;i++)n.push(e[i].id);o.information.infoShow.deleteInfoData(n.join(","),function(e){e.result?(t(),layer.msg(" 删 除 成 功 ",{icon:1,time:1200})):layer.msg(" 删 除 失 败 ",{icon:2,time:1200})})}}),$("#choose-tag-post-btn").unbind("click").click(function(){layer.close(f);for(var e=[],t=d.tagOperation.getTreeValue(!0,"choose-tag-tree"),a=t.length,n=[],o=0;o<a;o++)n.push(t[o].name),e.push(t[o].id);$("#contact-info-tag").val(n.join("|")),g=e}),o.tag.personTag.getMyTag(p.user.user_loginname,function(e){for(var t=e.data,a=e.data.length,n=[],o=0;o<a;o++)n.push('<span class="label label-danger span-icon-cursor add" tag-id="'+t[o].id+'">'+t[o].name+'&nbsp;&nbsp;<span  class="glyphicon glyphicon-arrow-up "></span></span>');$(".my-tag-show").empty(),$(".my-tag-show").append(n.join("")),$(".my-tag-show .label").unbind("click").click(function(){var e=$(this).attr("tag-id"),t='<span class="label animated zoomIn label-warning span-icon-cursor" tag-id="'+e+'">'+$(this).text()+'&nbsp;&nbsp;<span class="glyphicon glyphicon-remove"></span></span>';0==$(".tag .label[tag-id = "+e+"]").length&&($(".tag").append(t),setTimeout(function(){$(".tag .label").removeClass("animated zoomIn")},500),$(".tag .label").unbind("click").click(function(){$(this).addClass("animated zoomOut");var e=$(this).attr("tag-id");m.tagOperation.writeTagData(!1,e,"tag-tree"),$(".my-tag-show .label[tag-id = "+e+"]").removeClass("label-primary"),$(".my-tag-show .label[tag-id = "+e+"]").addClass("label-danger"),$(".my-tag-show .label[tag-id = "+e+"]").children().removeClass("glyphicon-ok"),$(".my-tag-show .label[tag-id = "+e+"]").children().addClass("glyphicon-arrow-up");var t=this;setTimeout(function(){$(t).remove()},500)}),$(this).removeClass("label-danger"),$(this).addClass("label-primary"),$(this).children("span").removeClass("glyphicon-arrow-up"),$(this).children("span").addClass("glyphicon-ok"))})}),$("#post-btn").unbind("click").click(function(){var t=e();$(".form-control.infor-write").val("");var a=t.infor;""==a.infor_title||""==a.infor_context||""==a.infor_link||0==t.inforTag.length?layer.msg("抱歉,数据没有填写完整！",{time:1500,zIndex:layer.zIndex,success:function(e){layer.setTop(e)}}):r?o.information.infoShow.postInforData(a,t.inforTag.join(","),function(e){layer.close(l),1==e.result?($("#all-infor").bootstrapTable("refresh",null),layer.msg(" 添 加 成 功 ！",{icon:1,time:1200})):layer.msg(" 添 加 失 败 ！",{icon:2,time:1200})}):o.information.infoShow.updateInfoData(JSON.stringify(t.infor),t.inforTag.join(","),i,function(e){layer.close(l),1==e.result?($("#all-infor").bootstrapTable("refresh",null),layer.msg(" 修 改 成 功 ！",{icon:1,time:1200})):layer.msg(" 修 改 失 败 ！",{icon:2,time:1200})})}),$("#choose-infor-btn").unbind("click").click(function(){$(".infor-search").stop().slideToggle()}),$("#post-infor-btn").unbind("click").click(function(){b=1;var e=$("#all-infor").bootstrapTable("getSelections",null),t=e.length,a=[];if(0===t)layer.msg(" 没 有 选 中 任 何 数 据 ");else{for(var n=0;n<t;n++)a.push(e[n].id);s=layer.open({title:"手 动 发 送",type:1,area:["50%","96%"],content:$("#scheme-choose-dialog")})}}),$("#choose-contact-customer-btn").unbind("click").click(function(){b=0,s=layer.open({title:"筛 选 客 户",type:1,area:["50%","96%"],content:$("#scheme-choose-dialog")})}),$(".export-infor-btn").click(function(){var e={};h=$("#contact-info-customer").val();var t=$("#contact-info-title").val(),a=$("#contact-info-context").val(),n=$("#contact-info-type").val(),i=$("#contact-info-grade").val(),r=$("#contact-info-user").val(),l=$("#contact-info-status").val(),c=$("#contact-info-time").val();""!==t&&(e.infor_title=t),""!==a&&(e.infor_context=a),""!==n&&(e.infor_type=n),""!==i&&(e.infor_grade=i),""!==r&&(e.user_name=r),""!==l&&(e.infor_status=l),""!==c&&(e.infor_createtime=c),""==$("#contact-info-tag").val()&&(g=[]),u=e,o.information.infoShow.exportData(g.join(","),JSON.stringify(u),h,$(this).attr("exportType"),function(e){window.open("http://118.178.237.219:8080/dummyPath/"+e.result)})}),$("#post-scheme-btn").unbind("click").click(function(){if(0==b){layer.close(s);var e=[];$("input[name = schemeOptions]:checked").each(function(){e.push($(this).attr("schemeName"))}),$("#contact-info-customer").val(e.join("|"))}else{var t;$("input[name = schemeOptions]:checked").each(function(){t=$(this).val()});for(var a=$("#all-infor").bootstrapTable("getSelections",null),n=a.length,i=[],r=0;r<n;r++)i.push(a[r].id);layer.close(s),o.information.infoShow.manualPost(i.join(","),t,function(e){})}}),$("#cancel-scheme-btn").unbind("click").click(function(){layer.close(s)}),$("#choose-infor").unbind("click").click(function(){var e={};h=$("#contact-info-customer").val();var a=$("#contact-info-title").val(),n=$("#contact-info-context").val(),o=$("#contact-info-type").val(),i=$("#contact-info-grade").val(),r=$("#contact-info-user").val(),l=$("#contact-info-status").val(),c=$("#contact-info-time").val();""!==a&&(e.infor_title=a),""!==n&&(e.infor_context=n),""!==o&&(e.infor_type=o),""!==i&&(e.infor_grade=i),""!==r&&(e.user_name=r),""!==l&&(e.infor_status=l),""!==c&&(e.infor_createtime=c),""==$("#contact-info-tag").val()&&(g=[]),u=e,t()}),$(".infor-write").change(function(){var e=$(".form-control.infor-write").val();$(".form-control.infor-title").val(e.substring(e.indexOf("标题:")+3,e.indexOf("内容:"))),$(".form-control.infor-context").val(e.substring(e.indexOf("内容:")+3,e.indexOf("链接:")).trim()),$(".form-control.infor-link").val(e.substring(e.indexOf("链接:")+3,e.indexOf("来源:"))),$(".form-control.infor-site").val(e.substring(e.indexOf("站点:")+3)),$("input[name=info-resource][value="+e.substring(e.indexOf("来源:")+3,e.indexOf("属性:")).trim()+"]").prop("checked",!0)}),t(),$("#tag-cancel-btn").unbind("click").click(function(){layer.close(c)}),$("#tag-post-btn").unbind("click").click(function(){layer.close(c);var e=m.tagOperation.getTreeValue(!0,"tag-tree"),t=e.length,a=[];$(".tag .other-tag").remove();for(var n=0;n<t;n++)0==$(".tag .label[tag-id = "+e[n].id+"]").length&&a.push('<span class="label other-tag label-warning span-icon-cursor" tag-id="'+e[n].id+'">'+e[n].name+'&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-remove"></span></span>');$(".tag").append(a.join("")),$(".tag .label").unbind("click").click(function(){$(this).addClass("animated zoomOut");var e=$(this).attr("tag-id");m.tagOperation.writeTagData(!1,e,"tag-tree"),$(".my-tag-show .label[tag-id = "+e+"]").removeClass("label-primary"),$(".my-tag-show .label[tag-id = "+e+"]").addClass("label-danger"),$(".my-tag-show .label[tag-id = "+e+"]").children().removeClass("glyphicon-ok"),$(".my-tag-show .label[tag-id = "+e+"]").children().addClass("glyphicon-arrow-up");var t=this;setTimeout(function(){$(t).remove()},500)})});var v={callback:{onClick:a},data:{simpleData:{enable:!0,idKey:"id",pIdKey:"area_parent",rootPId:0}}},y=null;o.system.areaManage.getAllArea(function(e){y=e.data,$.fn.zTree.init($("#scheme-area-tree"),v,y)})});