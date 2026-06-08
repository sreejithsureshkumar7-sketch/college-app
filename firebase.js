import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase Console -> Project Settings -> Config values paste pannunga

const firebaseConfig = {
  apiKey: "AIzaSyCwcgXc8fRAQTM36Tjwnx94B1vbCQ19mK8",
  authDomain: "college-app-6feb1.firebaseapp.com",
  projectId: "college-app-6feb1",
  storageBucket: "college-app-6feb1.firebasestorage.app",
  messagingSenderId: "643620831036",
  appId: "1:643620831036:web:309d57c55ec201cb0ee839",
  measurementId: "G-7Z6HXF5KM8"
};

let db = null;
try{
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);
}catch(e){ console.log('Firebase config pending. Local demo mode running.'); }

window.collegeDB = { db, ref, onValue, push, set };
