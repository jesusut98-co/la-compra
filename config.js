// 1. Borra el bloque de ejemplo que va desde "const firebaseConfig" hasta "};"
// 2. Pega en su lugar el bloque "const firebaseConfig = { ... };" que te da Firebase.
// Estos datos no son secretos: lo que protege la lista son las reglas de Firestore.

const firebaseConfig = {
  apiKey: "AIzaSyCVQPZF2Zp6Wbtj03l0UV-ZikjOvxEGR1o",
  authDomain: "lista-de-la-compra-521e8.firebaseapp.com",
  projectId: "lista-de-la-compra-521e8",
  storageBucket: "lista-de-la-compra-521e8.firebasestorage.app",
  messagingSenderId: "204977178248",
  appId: "1:204977178248:web:432acb879f643914c1413d"
};

// No toques esta línea.
window.CONFIG = { firebase: firebaseConfig };
