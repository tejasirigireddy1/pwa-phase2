function submitData(){
  var career=document.querySelector("#career").value;
var name=document.querySelector("#name").value;
var mobile=document.querySelector("#mobile").value;
var email=document.querySelector("#email").value;
var address=document.querySelector("#address").value;
var ginstitute=document.querySelector("#ginstitute").value;
var gbranch=document.querySelector("#gbranch").value;
var gyear=document.querySelector("#gyear").value;
var gper=document.querySelector("#gper").value;
var dinstitute=document.querySelector("#dinstitute").value;
var dbranch=document.querySelector("#dbranch").value;
var dyear=document.querySelector("#dyear").value;
var dper=document.querySelector("#dper").value;
var sinstitute=document.querySelector("#sinstitute").value;
var sbranch=document.querySelector("#sbranch").value;
var syear=document.querySelector("#syear").value;
var sper=document.querySelector("#sper").value;
var skills=document.querySelector("#skills").value;
// Indexeddb implementation
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
  store.put({
    career:career,
    name:name,
    mobile:mobile,
    email:email,
    address:address,
    education:[
      {
        institute:ginstitute,
        branch:gbranch,
        year:gyear,
        per:gper
      },
      {
        institute:dinstitute,
        branch:dbranch,
        year:dyear,
        per:dper
      },
      {
        institute:sinstitute,
        branch:sbranch,
        year:syear,
        per:sper
      }
    ],

    skills:skills
  });
}
window.open("index.html");
}
