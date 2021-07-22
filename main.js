
var array = new Array(1000);
var i = 0;

function contentopen(){
  document.getElementById("modal").style.display ="block";
  document.getElementById("modalcontent").style.display ="block";
}

function modalclose(){
  document.getElementById("modal").style.display ="none";
  document.getElementById("modalcontent").style.display ="none";
}

function updateClose(){
  document.getElementById("updatemodal").style.display ="none";
  document.getElementById("updatemodalcontent").style.display ="none";
}

function Register(){

  var text = document.getElementById("modalinput").value;
  var node = document.getElementById("content");

  if(text==""){
    alert("일정을 등록하세요")
  }
  else{

    var contentbutton = document.createElement("button");
    var textnode = document.createElement("p");
    var inputnode = document.createElement('input');

    textnode.setAttribute('id','textnode'+i);
    contentbutton.setAttribute('id','contentbutton'+i);
    contentbutton.setAttribute('name','contentbtn');
    inputnode.setAttribute('id','inputID'+i);
    inputnode.setAttribute('type','checkbox');
    inputnode.setAttribute('name','check');

    node.appendChild(contentbutton);
    contentbutton.appendChild(textnode);
    contentbutton.appendChild(inputnode);
    document.getElementById("inputID"+i).addEventListener("click",remove);

    array[i] = text;
    document.getElementById('textnode'+i).innerText = array[i];

    i++;

    modalclose();

  }

}

function remove(){

  var confirmText = confirm("삭제하겠습니까?");

  if(confirmText==true){
     var obj_length = document.getElementsByName("check").length;

     for(var i=0;i<obj_length;i++){
       if (document.getElementsByName("check")[i].checked == true) {
          var object = document.getElementsByName("contentbtn")[i];
           object.remove();
           break;
       }
     }
  }

}

function removeall(){
    location.reload(true);
}
