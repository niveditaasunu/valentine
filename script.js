```javascript
function start(){
    document.getElementById("question").classList.remove("hidden");
}

function yes(){
    document.body.innerHTML =
    "<h1 style='text-align:center;margin-top:20%;font-size:50px;'>YAYYY 💕<br>You are my Valentine 🥰</h1>";
}

function moveButton(){
    let btn = document.querySelector(".no");
    btn.style.position="absolute";
    btn.style.left=Math.random()*80+"%";
    btn.style.top=Math.random()*80+"%";
}
```
