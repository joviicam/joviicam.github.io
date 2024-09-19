//Pregunta si el navegador si soporta el serviceworker
if (navigator.serviceWorker) {
  //Lo registra en la raiz del proyecto, lo que hará que el serviceworker se ejecute
  navigator.serviceWorker.register("./sw.js");
}
