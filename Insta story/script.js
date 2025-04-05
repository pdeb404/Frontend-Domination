var arr=[
    {dp:"https://images.unsplash.com/photo-1741788863558-a4ff13cbf815?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1656019674844-3040aba0350b?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1678802013089-574e360074d7?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

]

var clutter="";

arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
                    <img id="${idx}"src="${elem.dp}" alt="">
                </div>`;
})
document.querySelector("#stories").innerHTML=clutter;

var grow=0;
document.querySelector("#stories").addEventListener("click",function(that){
    console.log(arr[that.target.id].dp);
    document.querySelector("#full-scr").style.display="block";
    document.querySelector("#full-scr").style.backgroundImage=`url(${arr[that.target.id].dp})`

    setTimeout(function(){
        document.querySelector("#full-scr").style.display="none";
    },3000)
    if(grow<100){
    setInterval(function(){
        document.querySelector("#growth").style.width=`${grow}%`
        grow++;
    },30)
}
else{
    grow=0;
}
})
