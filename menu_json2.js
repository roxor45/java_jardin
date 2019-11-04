$(document).ready(function(){        
var url = "data.json";
	$.getJSON(url, function(json) {
	var select = $("<select></select>").attr("id", "menuselect").attr("name", "image");
		$.each(json,function(index,json){
		select.append($("<option></option>").attr("value", json.image).text(json.variete));
		});     
	$("#container").html(select);
	
	var sel = document.getElementById('menuselect');
	var el = document.getElementById('display');
		document.getElementById('showVal').onclick = function () {
			
		el.value = sel.value;
		createlegume();
		}
		document.getElementById('showTxt').onclick = function () {
		el.value = sel.options[sel.selectedIndex].text;
		}
	});
});