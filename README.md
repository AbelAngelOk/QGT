# Quilmes Gestion Transparente

## Descarga e Instalacion 

### precondiciones
- tener instalado git
- tener instalado npm
- tener visual studio code (recomendado)
  
### Descarga 
Al abrir Git Bash:
1. ``` git clone url ``` para descargar el proyecto
2. ``` git checkout develop ``` para crear una carpeta de la rama develop
3. ``` git pull origin develop ``` para traer contenido de la rama develop a la pc

### Instalacion proyecto y liberias
Al abrir cmd desde la carpeta o dentro del proyecto
1. ``` npm install ``` para instalar vite (dato que reconoce que es un proyecto Vite)
2. ``` npm install react-router-dom ``` para instalar paquete de rutas
3. ``` npm install -D tailwindcss postcss autoprefixer ``` para instalar paquete de estilos
4. ``` npx tailwindcss init -p ``` para iniciar archivos configurables del paquete de estilos

En lugar de utilizar los comandos tambien se puede optar por ejecutar los archivos **.bat** en el orden numero.

## Sobre el proyecto

## Sobre componentes

Cada componente esta compuesto de uno o varios archivos **.jsx** y **.json** los archivos .jsons tienen el mismo nombre que el .jsx y se dividen en const y vars. 
- **const** hace referencia a los datos en elementos fijos como por ejemplo el texto "ver mas" de un boton o un titulo. 
- **vars** hace referencia a los elementos variables como los datos de un miembro o una publicacion. 
- **.jsx** contienen la estructura en donde se tratan los datos.

Los componentes dependen de las librerias anteriormente mencionadas. Y la paleta de colores de los componentes dependen del archivo **tailwind.config.js**

### Tecnologias utilizadas
- React con Vite
- Tailwind
- router dom

## Estructura
```
| src
| | assets
| | | img |
| | components
| | | commons |
| | | context |
| | | deprecated |
| | | home |
| | | promises |
| | | reports |
| | pages
| | | home.jsx
| | | promises.jsx
| | | reports.jsx
| app.jsx
| index.jsx
| main.jsx
(archivos de config)

**main.jsx --> App.jsx --> | pages | --> | components |
**
```

## Inicializacion

ejecutar el proyecto ingresar en la terminal: 
```
npm run dev
```

para configurar las ejecuciones:
```
package.json
```

## Historial de comentarios importantes

 ### 9-06-2023

Sección Secretarias creada.
Encontré una forma de importar imagenes desde el json, se puede hacer de esta manera: 
/*<img src={import.meta.env.BASE_URL + dirección relativa a la carpeta principal del proyecto}*/
La expresión import.meta.env.BASE_URL es una forma de acceder a la variable BASE_URL definida en el entorno de ejecución de la aplicación. En el contexto de una aplicación React, esta variable generalmente se utiliza para obtener la URL base del servidor o la ubicación del directorio raíz de la aplicación.
En el JSON, entonces, hay que poner la dirección de la imagen desde el directorio raíz.

### 2-06-2023

Estilos de página compromisos, app, footer y header convertidos a tailwind, instalé eslint standard, te ayuda a identar y escribir código más prolijo. Se instala con "npm install standard -D" e instalando también una extensión en el visual que se llama ESLint.

### 26-05-2023

Pude solucionar el problema con el Header, si no me equivoco en los map() faltaba el return dentro de la función
map(), por eso no se renderizaba el popup.

También ordené (creo) un poco el código, poniendo los map() fuera del return() principal del componente.

El problema con compromisos, creo que era que no te deja pasar objetos hacia un componente hijo, entonces no le podías pasar la data del JSON a cada card de la página. Lo que hice fue hacer un JSON para cada card e ingresé los datos de esa forma.

Ahora se puede ingresar a la página informes usando el Header. Informes también tenía un problema de renderización de elementos de la tabla si no me equivoco, y era causado por el mismo problema de antes, le faltaba el return() a las funciones map().

Además, tuve que sacar las propiedades flex y flex-wrap a "*" en un archivo CSS porque estaba afectando al Header (raro), así que se las apliqué a cada selector en ese archivo.

Por último, agregué el Footer a los componentes Home, Promises y Reports. También, instalé FontAwesome para el uso de iconos. 
