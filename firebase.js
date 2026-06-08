import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase Console -> Project Settings -> Config values paste pannunga
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  databaseURL: "https://PASTE_PROJECT-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "PASTE_PROJECT",
  storageBucket: "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

let db = null;
try{
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);
}catch(e){ console.log('Firebase config pending. Local demo mode running.'); }

window.collegeDB = { db, ref, onValue, push, set };
