var h=document.querySelector("h5");
var btn=document.querySelector("button");
var flag=0;

btn.addEventListener("click",function(){
    if(flag==0){
        h.innerHTML="Friend";
        h.style.color="green";
        btn.innerHTML="Remove Friend";
        flag=1;
    }
    else{
        h.innerHTML="Stranger";
        h.style.color="red";
        btn.innerHTML="Add Friend";
        flag=0;
    }
})