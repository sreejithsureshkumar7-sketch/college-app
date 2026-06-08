function showPage(id){
  document.querySelectorAll('.page').forEach(page=>page.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.getElementById('themeBtn').addEventListener('click',()=>{
  document.body.classList.toggle('dark');
});

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js');
}
