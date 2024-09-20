console.log("SW Hola mundo !!");

self.addEventListener("install", (event) => {
  //Si se instala correctamente el SW se ejecuta este console.log
  console.log("SW: Instalado");
});

//Cuando el SW toma el control de la aplicación y lo instala correctamente, se activa
self.addEventListener("fetch", (event) => {
  console.log(event.request.url);

  if (event.request.url.includes("style.css")) {
    const respuesta = new Response(
      `body{
                color: blue;
                background-color: #000;
            }`,
      {
        headers: {
          "Content-Type": "text/css",
        },
      }
    );
    event.respondWith(respuesta);
  } 
});
