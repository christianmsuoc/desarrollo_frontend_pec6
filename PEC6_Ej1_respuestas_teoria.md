# Ejercicio 1

### ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)

La función de los componentes es la presentación de información y la interacción con el usuario. Mientras que
la función de los servicios es el intercambio o almacenamiento de información.

Un componente recoge información del usuario y la presenta y hace uso de los servicios para almacenarla o transferirla


### a) ¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?

La inyección de dependencias sirve para no replicar un mismo servicio por ejemplo en cada componente, 
mediante @Injectable en el service se hace posible que un mismo service esté disponible para todos los
 component que quieran usarlos con una sola instancia del service.

###  b) Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:

- Observable: Es un objeto que es susceptible de cambiar, se llama observable debido a que es posible que "observar" o
 estar pendiente de los cambios que suceden en el Observable. Esto se hace mediante una suscripción al objeto
  observable. Se puede entender como una cinta en la que el valor actual va cambiando.
  

- Subscription: Se utiliza para realizar una acción cuando el valor de un observable cambia.


- Operators: Es una función que toma como valor un Observable y devuelve lo mismo. Esta función puede realizar cambios
 en el Observable o simplemente realizar acciones cuando se da una condición en dicho Observable.
  

- Subject: Se puede explicar como un Observable desde el cual se pueden emitir valores. No sirve para que todas
las subscripciones sobre un Subject (Observable) reciban la misma información que hemos enviado.
  

- Schedulers: Sirven para cambiar la forma en que se resuelven los Observables. Ver la tabla siguiente
 
  | Scheduler | Approach |
  | --- | --- |
  | Queue |	Executes task synchronously but waits for current task to be finished |
  | Asap |	Schedules on the micro task queue |
  | Async |	Schedules on the macro task queue |
  | AnimationFrame |	Relies on ‘requestAnimationFrame’ |
  | VirtualTime |	Will execute everything synchronous ordered by delay and mainly used in testing |

### d) ¿Cuál es la diferencia entre promesas y observables?

La diferencia es que un Observable es un 'stream' de eventos y la promesa es uno solo.

### e) ¿Cuál es la función de la tubería (pipe) async?

La función es "recuperar" los datos o hacerlos disponibles una vez se complete el evento. Puede compararse a
 hacer una arrow function sobre una subscription. El async pipe se utiliza en el HTML.
