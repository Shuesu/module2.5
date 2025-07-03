import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyCCkS5syco6iKxd1BwIOgt-3DGBGhfz9eY",
   authDomain: "todos-68fdf.firebaseapp.com",
   projectId: "todos-68fdf",
   storageBucket: "todos-68fdf.firebasestorage.app",
   messagingSenderId: "1037102841633",
   appId: "1:1037102841633:web:8565890d45246e74624860",
   databaseURL: "https://todos-68fdf-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);