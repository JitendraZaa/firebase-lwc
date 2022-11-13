import { LightningElement } from 'lwc';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getDatabase, ref, set  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

export default class App extends LightningElement {

    connectedCallback(){
        const firebaseConfig = {
            apiKey: "AIzaSyAexjz399TSXtgkiis5_SzqFssY4E-PKxY",
            authDomain: "indiaplots-7e41a.firebaseapp.com",
            projectId: "indiaplots-7e41a",
            storageBucket: "indiaplots-7e41a.appspot.com",
            messagingSenderId: "1063530964899",
            appId: "1:1063530964899:web:dbc4af18fb7bcfe4fa5c16",
            measurementId: "G-7MF1GD1TX9"
        };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const database = getDatabase();

        console.log('All looks good');

    }

}
