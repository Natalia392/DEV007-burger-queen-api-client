* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Diseño del producto](#4-diseño-del-producto)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
* [6. Herramientas utilizadas](#6-herramientas-utilizadas)
  
## 1. Preámbulo
Este es un proyecto pensado para la administración de pedidos, productos
y trabajadores de un restaurante.
Usted podrá ver una interfaz para tres roles distintos según el uso que 
necesiten dar a la aplicación: Mesera, cocinera, administradora.
El principal objetivo al desarrollar este proyecto, fue aprender a desarrollar
utilizando [Angular](https://angular.io/).
Esto permitió descubrir cómo "pensar en componentes" al desarrollar, 
para seguir las buenas prácticas como la modularización y reutilización
del código, por ejemplo. Esto ayuda a un mejor mantenimiento de una aplicación
y también facilita mucho el trabajo durante el desarrollo, gracias 
a la estructura propuesta por este framework.
Se ha leído la [documentación de Angular](https://docs.angular.lat/docs), así como utilizado otros recursos, 
por ejemplo, cursos y tutoriales, para hacer un buen uso de esta herramienta 
y para entender y conocer mejor la **arquitectura**, los **principios de diseño**,
el **paradigma**, las **abstracciones**, el **vocabulario** y la **comunidad**,
entre otras cosas.
Para desarrollar el proyecto, se nos facilito esta [API](https://github.com/Laboratoria/burger-queen-api-mock), 
esta es la [documentación de la API](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0)
y recibimos definidas seis historias de usuario.
## 2. Resumen del proyecto
Un pequeño restaurante de hamburguesas, que está creciendo, necesita un
sistema a través del cual puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.
Este proyecto tiene dos áreas: interfaz (cliente) y API (servidor).
Información de la clienta:
> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestrxs clientxs.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural    |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> Nuestrxs clientxs son bastante indecisos, por lo que es muy común que cambien
> el pedido varias veces antes de finalizarlo.
Idea de cómo debería verse el menú:
![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)
Características de la aplicación:
La aplicación es un *SPA*, diseñada y pensada para ser utilizada
desde una tablet, es decir, **mobile-first**.
Se consideró el aspecto UX de de quienes van a tomar los pedidos,
el tamaño y aspecto de los botones, la visibilidad del estado actual del
pedido, las condiciones en que los distintos usuarios necesitan
usar la aplicación. Por ejemplo, los meseros van de las mesas
a la cocina y necesitan poder acceder fácilmente a la información
de los pedidos, mesas y clientes.
---- en proceso ----
La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.
La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.
Los tests unitarios deben cubrir un mínimo del 90% de _statements_, _functions_,
_lines_ y _branches_.
Por otro lado, deberás definir la estructura de carpetas y archivos que consideres
necesaria. Puedes guiarte de las convenciones del _framework_ elegido. Por ende,
los _tests_ y el _setup_ necesario para ejecutarlos, serán hechos por ti.
---- fin -----
## 3. Historias de Usuario:
### Definición del producto
El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.
***
#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales
Yo como meserx quiero poder ingresar al sistema de pedidos.
##### Criterios de aceptación
Lo que debe ocurrir para que se satisfagan las necesidades del usuario.
* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.
##### Definición de terminado
Lo acordado que debe ocurrir para decir que la historia está terminada.
* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
***
#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a
Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.
##### Criterios de aceptación
Lo que debe ocurrir para que se satisfagan las necesidades del usuario
* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_
##### Definición de terminado
Lo acordado que debe ocurrir para decir que la historia está terminada.
* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
***
#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos
Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.
##### Criterios de aceptación
* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.
##### Definición de terminado
* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
***
#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir
Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.
##### Criterios de aceptación
* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.
##### Definición de terminado
* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.
***
#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs
Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.
##### Criterios de aceptación
* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.
##### Definición de terminado
* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
***
#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos
Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.
##### Criterios de aceptación
* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.
##### Definición de terminado
* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
***
## 4. Diseño del producto
A partir de lo solicitado, creamos los siguientes diseños:
La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. La usuaria debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

(Readme en proceso)
