function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


var messCol=document.getElementById("messColumn");
  var btn=document.getElementById("btn");
 var con=document.getElementById("content");
   btn.onclick=function(){
      if(messCol.value.trim()==""){
        alert("The input cannot be empty or blank");
        return;
     }
     var messDiv=document.createElement("div");
     messDiv.setAttribute("style","width:450px;height:30px;border:2px dotted #808080;margin-bottom:5px;");
     {
          //This code block is used to store the build messDiv Code for content:Message content and delete key style
         var messCon = document.createElement("div");
       messCon.setAttribute("style","float:left;width:350px;height=30px;line-height:30px;overflow:auto;");
        var del = document.createElement("a");
        del.setAttribute("style","float:left;width:50px;height:30px;line-height:30px;");
         del.setAttribute("href","javascript:;");
         del.innerHTML = "delete";
             messDiv.appendChild(messCon);
       messDiv.appendChild(del);
           messCon.innerHTML=messCol.value;
      del.onclick=function(){
           con.removeChild(this.parentNode);   //Let parent element content Delete child element's messDiv
       }
   }
     con.appendChild(messDiv);
    messCol.value="";   //Clear the character content of the input box

  }
