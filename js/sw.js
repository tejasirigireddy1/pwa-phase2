this.addEventListener('install',function(event){
event.waitUntil(
caches.open('my cache').then(function(ca){
ca.addAll([
'/index.html',
'/css/index.css',
'/css/resume.css',
'/css/form.css'


])
})
)
})
// fetch addEventListene
this.addEventListener('fetch' ,function(event){
event.respondWith(caches.open('my cache')
.then(function(){
return cache.match(event.request)
.then(function(result){
return result || fetch(event.request)
.then(function(result){
  cache.put(event.request,result.clone());
return result;
})
})

})




)




})
