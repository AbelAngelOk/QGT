26-05-2023

Pude solucionar el problema con el Header, si no me equivoco en los map() faltaba el return dentro de la función
map(), por eso no se renderizaba el popup.

También ordené (creo) un poco el código, poniendo los map() fuera del return() principal del componente.

El problema con compromisos, creo que era que no te deja pasar objetos hacia un componente hijo, entonces no le podías pasar la data del JSON a cada card de la página. Lo que hice fue hacer un JSON para cada card e ingresé los datos de esa forma.

Ahora se puede ingresar a la página informes usando el Header. Informes también tenía un problema de renderización de elementos de la tabla si no me equivoco, y era causado por el mismo problema de antes, le faltaba el return() a las funciones map().

Además, tuve que sacar las propiedades flex y flex-wrap a "*" en un archivo CSS porque estaba afectando al Header (raro), así que se las apliqué a cada selector en ese archivo.

Por último, agregué el Footer a los componentes Home, Promises y Reports. También, instalé FontAwesome para el uso de iconos. 