var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
paravalue=parseInt(para[1]);

}


var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
if(!idb in window){
 console.log("indexedDB is not supported");

}
// IndexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDb is created");
open.onupgradeneeded=function (e){
 var request=e.target.result;
 request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");

}
open.oneerror=function(error){
 console.log("Error is created");
}
open.onsuccess=function(e){
 request=e.target.result;
 var transaction=request.transaction("formdata","readwrite");
 store=transaction.objectStore("formdata");
var info=store.get(paravalue);
info.onsuccess=function(data){
  console.log(data.target.result);
  personalinfo(data.target.result);
}
}


var left=document.querySelector(".left");
var right=document.querySelector(".right");

function personalinfo(pi){
  var career=document.createElement("h1");
  career.textContent=pi.career;
  left.append(career);

  var image=document.createElement("img");
  image.src="images/icon1.svg";
  image.alt=pi.name;
  left.append(image);

  var hh=document.createElement("h2");
  hh.textContent=pi.name;
  left.append(hh);

  var hy=document.createElement("h3");
  hy.textContent=pi.mobile;
  left.append(hy);

  var hs=document.createElement("h3");
  hs.textContent=pi.email;
  left.append(hs);

  var ht=document.createElement("h3");
  ht.textContent=pi.address;
  left.append(ht);

// education details
var head11=document.createElement("h2");
head11.textContent="Education Details";
right.append(head11);
var hr=document.createElement("hr");
right.append(hr);
var table=document.createElement("table");
table.border="1";

var tr1="<tr><th>institute</th><th>branch</th><th>per</th><th>year</th></tr>";
var tr2="";
for(var i in pi.education)
{
  tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].per+"</td><td>"+pi.education[i].year+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);
// skills
var head1=document.createElement("h1");
head1.textContent="Skills";
right.appendChild(head1);
var hr=document.createElement("hr");
right.append(hr);
var s1=document.createElement("h2");
s1.textContent=pi.skills;
right.append(s1);


}
