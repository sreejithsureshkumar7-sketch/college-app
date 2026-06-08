const defaultUpdates=[{title:'Semester Exam Update',message:'Timetable will be published soon.',date:'2026-06-10'},{title:'Holiday Notice',message:'College holiday on Friday.',date:'2026-06-12'}];
const defaultEvents=[{title:'Tech Fest 2026',date:'2026-06-20',venue:'Auditorium'},{title:'AI Workshop',date:'2026-06-25',venue:'Lab 2'}];
const $=id=>document.getElementById(id);
const dbAPI=window.collegeDB;

document.querySelectorAll('[data-tab]').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));$(btn.dataset.tab).classList.add('active')});
$('themeBtn').onclick=()=>{document.body.classList.toggle('light');$('themeBtn').textContent=document.body.classList.contains('light')?'☀️':'🌙'};

function renderUpdates(items){$('updatesList').innerHTML=items.map(u=>`<div class="card"><b>${u.title}</b><p>${u.message}</p><small>${u.date||'Today'}</small></div>`).join('')}
function renderEvents(items){$('eventsList').innerHTML=items.map(e=>`<div class="card event-card"><div><b>${e.title}</b><p>${e.date} • ${e.venue}</p></div><button onclick="alert('Registered for ${e.title}')">Register</button></div>`).join(''); if(items[0]) $('nextEvent').textContent=items[0].title;}

function loadData(){
  renderUpdates(defaultUpdates); renderEvents(defaultEvents);
  if(!dbAPI?.db) return;
  dbAPI.onValue(dbAPI.ref(dbAPI.db,'updates'),snap=>{const v=snap.val(); if(v) renderUpdates(Object.values(v));});
  dbAPI.onValue(dbAPI.ref(dbAPI.db,'events'),snap=>{const v=snap.val(); if(v) renderEvents(Object.values(v));});
}
loadData();

$('addUpdateBtn').onclick=()=>{const data={title:$('updateTitle').value,message:$('updateMsg').value,date:new Date().toISOString().slice(0,10)}; if(!data.title)return alert('Title type pannunga'); if(dbAPI?.db)set(dbAPI.push(dbAPI.ref(dbAPI.db,'updates')),data); else {defaultUpdates.unshift(data);renderUpdates(defaultUpdates)}};
$('addEventBtn').onclick=()=>{const data={title:$('eventTitle').value,date:$('eventDate').value,venue:$('eventVenue').value}; if(!data.title)return alert('Event title type pannunga'); if(dbAPI?.db)set(dbAPI.push(dbAPI.ref(dbAPI.db,'events')),data); else {defaultEvents.unshift(data);renderEvents(defaultEvents)}};

$('chatToggle').onclick=()=>$('chatBox').classList.toggle('hidden');
$('chatInput').addEventListener('keydown',e=>{if(e.key==='Enter'){const q=e.target.value.toLowerCase();let ans='Ask about exam, attendance, event, timetable.'; if(q.includes('attendance'))ans='Your attendance is 86%.'; if(q.includes('event'))ans='Upcoming event: '+$('nextEvent').textContent; if(q.includes('exam'))ans='Exam timetable update will appear in College Updates.'; if(q.includes('timetable'))ans='Today: JavaScript at 10:00 AM.'; $('chatMessages').innerHTML+=`<div class="msg">You: ${e.target.value}</div><div class="msg">Bot: ${ans}</div>`; e.target.value='';}});
