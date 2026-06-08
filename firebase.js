import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase Console-la irundhu unga config paste pannunga
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  databaseURL: "https://PASTE_PROJECT-default-rtdb.firebaseio.com",
  projectId: "PASTE_PROJECT",
  storageBucket: "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const updatesList = document.getElementById('updatesList');
const eventsList = document.getElementById('eventsList');

onValue(ref(db, 'updates'), snapshot => {
  updatesList.innerHTML = '';
  const data = snapshot.val();
  if(!data){ updatesList.innerHTML = '<div class="card">No updates found</div>'; return; }
  Object.values(data).forEach(item => {
    updatesList.innerHTML += `<div class="card"><h3>${item.title}</h3><p>${item.message}</p><small>${item.date}</small></div>`;
  });
});

onValue(ref(db, 'events'), snapshot => {
  eventsList.innerHTML = '';
  const data = snapshot.val();
  if(!data){ eventsList.innerHTML = '<div class="card">No events found</div>'; return; }
  Object.values(data).forEach(item => {
    eventsList.innerHTML += `<div class="card"><h3>${item.title}</h3><p>📅 ${item.date}</p><p>📍 ${item.venue}</p><button onclick="alert('Registered Successfully')">Register</button></div>`;
  });
});
