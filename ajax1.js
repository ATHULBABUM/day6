function loadDoc(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){

            var myobj = JSON.parse(this.responseText);

            document.getElementById("demo").innerHTML=myobj.text_out;
        }
    }
    xhttp.open("GET","https://www.randomtext.me/api/lorem/ul-5/5-15",true);
    xhttp.send();


}