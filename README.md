# Web Challenge Marvel

Prueba técnica para obtener diferentes datos desde la api pública de Marvel. Se compone de:

-   Una página para obtener los 50 primeros personajes y buscar otros mediante el nombre.
-   Otra destinada a ofrecer mas detalles sobre un personaje en concreto y mostrar información de hasta 20 de sus cómics.
-   Una última en la que poder ver y buscar entre los personajes seleccionados como favoritos.

## Como probar el proyecto

Para probarlo en entorno local:

-   `npm i`
-   `npm run dev`
-   Acceder a http://localhost:3000

Adicionalmente el proyecto se encuentra desplegado y se puede probar aquí: https://isaiasT.github.io \

_Nota: a día 28/07/2024 la api pública de Marvel tiene problemas serios de rendimiento y las peticiones se demoran demasiado. Es recomendable para probarlo en local bajar ambas constantes `LIMIT` en ambos repositorios. `/src/infrastructure/repositories`._

## Arquitectura y estructura

Con el fin de mantener una buena organización de código y que éste sea mas flexible ante los cambios en la implementación, he optado por utilizar una arquitectura hexagonal (_ports and adapters_).

El proyecto está dividido fundamentalmente en 3 capas:

-   Domain: aquí tenemos definidas todas las entidades de dominio así como los puertos que implementarán los repositorios de éstas.
-   Application: esta capa contiene todos los casos de uso con toda la lógica de negocio. Éstos hacen uso tanto de las entidades de dominio como los repositorios de éstas.
-   Infrastructure: se implementan todas las interfaces definidas en los puertos de las demás capas (para este caso, los de los repositorios de la capa domain). Tambíen esta capa se encarga de manejar las interacciones con tecnologías externas, como APIS, bases de datos... . Aquí podemos incluir los adaptadores primarios (interfaces de usuario como los componentes de React) y los secundarios (como el cliente HTTP).

Por tanto la estructura del proyecto queda de tal manera:

-   domain
    -   entities
    -   ports
-   application
    -   usecases
-   infrastructure
    -   repositories
    -   contexts

Adicionalmente tenemos 2 carpetas mas:

-   adapters
    -   ui
    -   http
-   pages

La carpeta `adapters` implementa los adaptadores primarios y secundarios. Se considera perteneciente a la capa de infra, solamente separada por organización y legibilidad del código.
En la carpeta `pages` se encuentran todas las rutas y páginas de la aplicación, ya que he optado por usar [Vike](https://vike.dev/) como framework.

## Tecnologías utilizadas

-   [React 18](https://es.react.dev/) y [TypeScript 5](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/): herramienta para la creación y desarrollo del proyecto, caracterizada por su simplicidad y velocidad. Tiene soporte para los frameworks frontend más populares.
-   [Vike](https://vike.dev/): framework alternativo a otros como Next.js. Tiene su propio sistema de enrutado a través de archivos (Ejemplo: `src/pages/favorites/+Page.js`) y permite el uso de SSR (Renderizado de páginas a través de un servidor) y SSG (Renderizar las páginas en tiempo de build), todo mediante una sencilla configuración.
-   [ESLint](https://eslint.org/) y [Prettier](https://prettier.io/), como linter y formatter respectivamente.
-   [Axios](https://axios-http.com/): simple cliente HTTP basado en promesas para manejar las consultas a la API.
-   [Vitest](https://vitest.dev/): framework de testing alternativa a Jest, optimizado para proyectos hechos con Vite.
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): librería para testear los componentes de React.
-   [Styled Components](https://styled-components.com/): biblioteca para escribir y reutilizar estilos CSS escritos directamente en archivos JavaScript (CSS-in-JS).
-   [Lodash](https://lodash.com/): librería de utilidades JavaScript, como el debounce para realizar búsquedas.

## Testing

Se pueden pasar los tests de la aplicación de 3 maneras diferentes:

-   `npm run test` para pasar todos los test.
-   `npm run test:ui` para pasarlos usando una interfaz mas amigable en el navegador.
-   `npm run test:coverage` para obtener el coverage de cada archivo tras pasarlos.

## Modo desarrollo y modo producción

Mediante la configuración de vite `vite.config.ts` se han configurado ambos modos para que solamente en modo producción se sirvan los assets concatenados y minimizados mediante [terser](https://terser.org/).

Adicionalmente con las opciones de Rollup en modo desarrollo se generan sourcemaps que ayudan a ver el código original (y no transformado) directamente desde el navegador.
