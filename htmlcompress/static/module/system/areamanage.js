define(function(require,exports,module){function a(){$(".form-control.area-name").val(""),$(".module-context.add").remove(),n=layer.open({title:" 添 加 地 区",type:1,area:["35%","50%"],content:$("#area-add-dialog")})}function e(){s.system.areaManage.getTypeArea("",function(a){if(console.log(a),1==a.result){for(var e=a.data,l=a.data.length,i=[],n=0;n<l;n++)i.push(' <li class="area-li" areaId = "'+e[n].id+'">'+e[n].area_name+"</li>");$(".left-html ul").empty(),$(".left-html ul").append(i.join("")),$(".left-html ul .area-li").unbind("click").click(function(){$(".left-html ul .area-li").removeClass("li-active"),$(this).addClass("li-active");var a=$(this).attr("areaId");c=$(this).attr("areaId"),t(a)}),$(".left-html ul .area-li:first").trigger("click")}else $(".left-html ul").empty()})}function t(a){s.system.areaManage.getTypeArea(a,function(a){if(console.log(a),1==a.result){for(var e=a.data,t=a.data.length,i=[],n=0;n<t;n++)i.push(' <li class="area-li" areaId = "'+e[n].id+'">'+e[n].area_name+"</li>");$(".center-html ul").empty(),$(".center-html ul").append(i.join("")),$(".center-html ul .area-li").unbind("click").click(function(){$(".center-html ul .area-li").removeClass("li-active"),$(this).addClass("li-active");var a=$(this).attr("areaId");o=$(this).attr("areaId"),l(a)}),$(".center-html ul .area-li:first").trigger("click")}else $(".center-html ul").empty(),$(".right-html ul").empty(),$(".center-html ul").append('<li class="area-li no-data"> 数 据 为 空 ！</li>'),$(".right-html ul").append('<li class="area-li no-data"> 数 据 为 空 ！</li>')})}function l(a){s.system.areaManage.getTypeArea(a,function(a){if(1==a.result){for(var e=a.data,t=a.data.length,l=[],i=0;i<t;i++)l.push(' <li class="area-li" areaId = "'+e[i].id+'">'+e[i].area_name+"</li>");$(".right-html ul").empty(),$(".right-html ul").append(l.join(""))}else $(".right-html ul").empty(),$(".right-html ul").append('<li class="area-li no-data"> 数 据 为 空 ！</li>')})}function i(a){var i="",d="";"first"==r?(i=0,d=1):"second"==r?(i=c,d=2):"third"==r&&(i=o,d=3),s.system.areaManage.postAreaData(i,a,d,function(a){1==a.result&&(layer.close(n),"first"==r?e():"second"==r?t(c):"third"==r&&l(o))})}var n,r,c,o,s=require("../../common/api");window.parent.SYSTEM;e(),$("#add-first-button").unbind("click").click(function(){r="first",a()}),$("#add-second-button").unbind("click").click(function(){r="second",a()}),$("#add-third-button").unbind("click").click(function(){r="third",a()}),$("#cancel-area").unbind("click").click(function(){layer.close(n)}),$(".module-context .fix").click(function(){var a=[];a.push('<div class="module-context add animated zoomIn">'),a.push('<input type="text" class="form-control area-name" placeholder="地区称">'),a.push('<div class="operationicon">'),a.push('<span class="glyphicon glyphicon-trash span-icon span-icon-cursor delete-module span-red"></span>'),a.push("</div>"),a.push('<div style="clear: both"></div>'),a.push("</div>"),$("#area-add-dialog .context").append(a.join("")),$(".delete-module").click(function(){$(this).parent().parent().addClass("animated zoomOut");var a=this;setTimeout(function(){$(a).parent().parent().remove()},500)})}),$("#add-area").unbind("click").click(function(){var a=[];$(".form-control.area-name").each(function(){a.push($(this).val())}),i(a.join("@"))})});