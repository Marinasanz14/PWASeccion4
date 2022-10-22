


self.addEventListener('fetch', event => {

    if( event.request.url.includes( 'style.css') ) {
        

        let respuesta = new Response(`
            body {
                backgroung-color: red ¡important!
                color: pink:
            }
        `, {
            geaders: {
                'Content-Type': 'text/css'
            }
        });

        event.respondWith( respuesta );
         
    }
})