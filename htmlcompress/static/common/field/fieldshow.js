!function($,e){$.fieldshow={init:function(e,l,i){function s(e){var l=[];return $(e).each(function(){l.push($(this).val())}),l.join(",")}this.writeDom=function(){for(var i=[],s=0;s<l;s++){var o=e[s],t=e[s].length;if("input"==o[0].field_type)console.log(o[0].field_type),i.push('<div class="form-group" field-content-dialog = "单行文本" field-id="'+o[0].id+'" field-type="'+o[0].field_type+'">'),i.push('<span class="glyphicon glyphicon-remove span-white span-icon-cursor delete-field" style="display:none"></span>'),i.push('<label class="col-sm-2 control-label">'+o[0].field_title+":</label>"),i.push('<div class="col-sm-10">'),i.push('<input type="text" class="form-control '+o[0].field_name+' " placeholder="'+o[0].field_hint+'">'),i.push("</div>"),i.push("</div>");else if("inputtime"==o[0].field_type)i.push('<div class="form-group" field-content-dialog = "时间控件" field-id="'+o[0].id+'" field-type="'+o[0].field_type+'">'),i.push('<span class="glyphicon glyphicon-remove span-white span-icon-cursor delete-field" style="display:none"></span>'),i.push('<label class="col-sm-2 control-label">'+o[0].field_title+":</label>"),i.push('<div class="col-sm-10">'),i.push('<input type="text" class="form-control datepicker-controller '+o[0].field_name+'" placeholder="'+o[0].field_hint+'">'),i.push("</div>"),i.push("</div>");else if("textarea"==o[0].field_type)i.push('<div class="form-group" field-content-dialog = "多行文本" field-id="'+o[0].id+'" field-type="'+o[0].field_type+'">'),i.push('<span class="glyphicon glyphicon-remove span-white span-icon-cursor delete-field" style="display:none"></span>'),i.push(' <label class="col-sm-2 control-label">'+o[0].field_title+":</label>"),i.push('<div class="col-sm-10">'),i.push('<textarea class="form-control '+o[0].field_name+'" rows="3" placeholder="'+o[0].field_hint+'"></textarea>'),i.push("</div>"),i.push("</div>");else if("checkbox"==o[0].field_type){i.push(' <div class="form-group" field-content-dialog = "多选按钮" field-id="'+o[0].id+'" field-type="'+o[0].field_type+'">'),i.push('<span class="glyphicon glyphicon-remove span-white span-icon-cursor delete-field" style="display:none"></span>'),i.push('<label class="col-sm-2 control-label">'+o[0].field_title+":</label>"),i.push('<div class="col-sm-10">');for(var a=0;a<t;a++)i.push('<label class="checkbox-inline">'),i.push(' <input type="checkbox" name="inlineRadioOptions" class="'+o[0].field_name+'" value="'+o[a].custom_value+'">'+o[a].custom_value),i.push("</label>");i.push("</div></div>")}else if("radiobox"==o[0].field_type){i.push(' <div class="form-group" field-content-dialog = "单选按钮" field-id="'+o[0].id+'" field-type="'+o[0].field_type+'">'),i.push('<span class="glyphicon glyphicon-remove span-white span-icon-cursor delete-field" style="display:none"></span>'),i.push('<label class="col-sm-2 control-label">'+o[0].field_title+":</label>"),i.push('<div class="col-sm-10">');for(var a=0;a<t;a++)i.push('<label class="radio-inline">'),i.push(' <input type="radio" name="inlineRadioOptions" class="'+o[0].field_name+'" value="'+o[a].custom_value+'">'+o[a].custom_value),i.push("</label>");i.push("</div></div>")}else if("select"==o[0].field_type){i.push(' <div class="form-group" field-content-dialog = "下拉控件" field-id="'+o[0].id+'" field-type="'+o[0].field_type+'">'),i.push('<span class="glyphicon glyphicon-remove span-white span-icon-cursor delete-field" style="display:none"></span>'),i.push('<label class="col-sm-2 control-label">'+o[0].field_title+":</label>"),i.push('<div class="col-sm-10">'),i.push('<select class="form-control  '+o[0].field_name+'">');for(var a=0;a<t;a++)i.push('<option value="'+o[a].custom_value+'">'+o[a].custom_value+"</option>");i.push("</select>"),i.push("</div></div>")}}return i.join("")},this.writeChoiceDom=function(){for(var i=[],s=0;s<l;s++){var o=e[s],t=e[s].length;if("input"==o[0].field_type)i.push('<div class="form-group">'),i.push('<input type="text" class="form-control choice'+o[0].field_name+' " placeholder="'+o[0].field_hint+'">'),i.push("</div>");else if("inputtime"==o[0].field_type)i.push('<div class="form-group">'),i.push('<input type="text" class="form-control datepicker-controller choice'+o[0].field_name+'" placeholder="'+o[0].field_hint+'">'),i.push("</div>");else if("textarea"==o[0].field_type)i.push('<div class="form-group">'),i.push('<input type="text" class="form-control choice'+o[0].field_name+' " placeholder="'+o[0].field_hint+'">'),i.push("</div>");else{i.push(' <div class="form-group">'),i.push('<select class="form-control  choice'+o[0].field_name+'">'),i.push('<option value="">请选择</option>');for(var a=0;a<t;a++)i.push('<option value="'+o[a].custom_value+'">'+o[a].custom_value+"</option>");i.push("</select>"),i.push("</div>")}}return i.join("")},this.postCustomData=function(i,o,t,a,n){$.ajax({url:"http://118.178.237.219:8080/yuqingmanage/manage/postCustomData",type:"POST",dataType:"json",data:{customData:JSON.stringify(function(){for(var i={},a=0;a<l;a++)if("checkbox"==e[a][0].field_type){var n="."+e[a][0].field_name+":checked";i[e[a][0].field_name]=s(n)}else if("radiobox"==e[a][0].field_type){var n="."+e[a][0].field_name+":checked";i[e[a][0].field_name]=$(n).val()}else i[e[a][0].field_name]=$("."+e[a][0].field_name).val();return i=$.extend(!0,i,o),i=$.extend(!0,i,t)}()),customId:i,customInfo:a},success:function(e){1==e.result?layer.msg(" 添 加 成 功",{icon:1,time:1200}):layer.msg(" 添 加 失 败",{icon:2,time:1200})},error:function(e){alert("方法异常")}}),null!=n&&n(1)}}}}($,window);