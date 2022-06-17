        type="module"

        // Import the functions you need from the SDKs you need
      
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
      
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
      
        // TODO: Add SDKs for Firebase products that you want to use
      
        // https://firebase.google.com/docs/web/setup#available-libraries
      
      
        // Your web app's Firebase configuration
      
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      
        const firebaseConfig = {
      
          apiKey: "AIzaSyDBD5g2c9hbJPMIib337IkjN4lIH8cD7yY",
      
          authDomain: "crud-fb-ad46d.firebaseapp.com",
      
          projectId: "crud-fb-ad46d",
      
          storageBucket: "crud-fb-ad46d.appspot.com",
      
          messagingSenderId: "1028177546589",
      
          appId: "1:1028177546589:web:4d73a6c9b469adcac72cb4",
      
          measurementId: "G-KGCMN8VPJR"
      
        };
      
      
        // Initialize Firebase
      
        const app = initializeApp(firebaseConfig);
      
        const analytics = getAnalytics(app);
