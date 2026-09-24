(function(){
if(document.getElementById("af_tool"))return;
var box=document.createElement("div");
box.id="af_tool";
box.style="position:fixed;right:12px;bottom:70px;z-index:2147483647;background:#fff;border:1px solid #ccc;border-radius:12px;padding:10px;width:250px;font:14px Arial;box-shadow:0 3px 15px #777";
box.innerHTML='<b>Auto Fill</b><br><input id="af_u" placeholder="Tài khoản"><br><input id="af_p" type="password" placeholder="Mật khẩu"><br><input id="af_s" placeholder="SĐT"><br><input id="af_n" placeholder="Họ tên"><br><button id="af_save">Lưu</button> <button id="af_fill">Tự điền</button> <button id="af_x">X</button>';
document.body.appendChild(box);
var k="af_"+location.hostname;
function q(id){return document.getElementById(id)}
try{var d=JSON.parse(localStorage.getItem(k)||"{}");q("af_u").value=d.u||"";q("af_p").value=d.p||"";q("af_s").value=d.s||"";q("af_n").value=d.n||""}catch(e){}
q("af_save").onclick=function(){localStorage.setItem(k,JSON.stringify({u:q("af_u").value,p:q("af_p").value,s:q("af_s").value,n:q("af_n").value}));alert("Đã lưu")};
q("af_fill").onclick=function(){
var v=[q("af_u").value,q("af_p").value,q("af_s").value,q("af_n").value],a=[...document.querySelectorAll("input:not([type=hidden]):not([disabled]):not([readonly])")];
v.forEach(function(x,i){if(a[i]){a[i].focus();a[i].value=x;a[i].dispatchEvent(new Event("input",{bubbles:true}));a[i].dispatchEvent(new Event("change",{bubbles:true}))}});
};
q("af_x").onclick=function(){box.remove()};
})();
