# Ejercicio 3

### a) ¿Qué son los interceptores?

Los interceptores son un tipo de servicio que se utiliza para modificar las llamadas HTTP tanto entrantes
como salientes a nivel global de aplicación.

### b) Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:
 
``` typescript
this.wines$ = this.searchSubject
.startWith(this.searchTerm)
.debounceTime(300)
.distinctUntilChanged()
.merge(this.reloadProductsList)
.switchMap((query) =>
this.wineService.getWine(this.searchTerm));
```

Es un observable que empieza con valor `this.searchTerm`.

Que se ejecuta siempre y cuando el intervalo de tiempo entre un cambio de valor y otro sea superior a 0.3 segundos (`.debounceTime(300)`).

Solo emitirá valor si el searchTerm nuevo es diferente al anterior (`.distinctUntilChanged()`).

Combina el evento con el Observable (`this.reloadProductsList`).

Resuelve todos los observables anteriores y modifica el retorno `.switchMap((query) =>
this.wineService.getWine(this.searchTerm));`
