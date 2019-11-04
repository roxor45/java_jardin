$(function() {

  // User clicks the "getData" button
  $("#getData").click(function() {
  
    // Put artistList element and JSON file location into a variable
 //   var variete = $("#variete");
    var url = "data.json";

    // Get the JSON file
    $.getJSON(url, function(datas) {
            $.each(datas,function(index,data){

           $('#menu').append('<input type=\"button\" onclick=\"createlegume()\" name=\"lea\" id =\"hu\" value=\" ' + data.variete + '\" /><br>');

            // $('#menu').append('image : ' + data.image + '<br>');

      //        $('#menu').append('rayon : ' + d.rayon + '<br><br>');
	
	
	
	
	
      // Put variete info into a variable
      // var legumes = data.legumes.map(function(item) {
        // return item.variete + " (" + item.rayon + ")";

      // });
   				 
      // Remove all child nodes (including text nodes) 
       // variete.empty();

	    
      // Format legumes with HTML tags 
   //   if (legumes.length) {
// console.log(legumes);  
        // var content = "<li><input type=\"button\" onclick=\"createlegume()\" value=\" " + legumes.join("\" /></li><li>") + "</li>";
        // var list = $("<ul>").html(content);
        // variete.append(list);
   //   }
    });
  });
});
});