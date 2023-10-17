import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDC8SLrbJFpjhh1g57SqTes6SOWKh7miD0",
  authDomain: "fir-mypos.firebaseapp.com",
  projectId: "fir-mypos",
  storageBucket: "fir-mypos.appspot.com",
  messagingSenderId: "610813598752",
  appId: "1:610813598752:web:4c4bf7153553ed60947045",
  measurementId: "G-1NE7G95740"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);