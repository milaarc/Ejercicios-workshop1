// Estafania Martinez
// Maria Camila Arcos



// Ejercicio 1.a
// De un operario se conoce su sueldo y años de antigüedad. 
// Se pide crear un programa que lea los datos de entrada y
//  muestre en consola el valor booleano de las siguientes 
//  comparaciones:
// i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o 
// superior a 10 años?



// const sueldo = prompt("Por favor ingrese su sueldo");
// const antiguedad = prompt("Por favor ingrese su antiguedad");
// // alert("Su sueldo es "+ sueldo);

// const sueldoInferior2000 = Number(sueldo) < 2000;
// const antiguedad10 = Number(antiguedad) == 10 || Number(antiguedad) > 10;
// const ejercicio1ai = sueldoInferior2000 && antiguedad10;

// console.log("Respuesta 1.ai: " + ejercicio1ai);

// // ejercicio 1 a ii
// // ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 
// // años?

// const antiguedadmenor10 = Number(antiguedad) < 10;
// const ejercicio1aii = sueldoInferior2000 || antiguedadmenor10;

// console.log("Respuesta 1.aii " + ejercicio1aii);

// // ejercicio 1 a iii
// // iii. ¿El sueldo es mayor o igual a $2000 US?

// const ejercicio1aiii = !sueldoInferior2000;

// console.log("Respuesta 1.aiii: "+ ejercicio1aiii);


// b. La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando 
// un descuento del 50% para compras mayores o iguales a los $100.000 
// COP. Se le pide realizar un algoritmo que reciba el valor de una compra y 
// muestre en consola el valor booleano que indique si la compra recibe o no 
// el descuento.

// const valor = prompt ("Ingrese el valor de la compra en COP: ");
// alert ("El valor de su compra es: "+ valor);

// const descuento = Number(valor) > 100000 || Number(valor) == 100000;

// console.log ("Recibe el descuento: " + descuento);

// c. Crear una fórmula para saber si un número es o no es un múltiplo de 2.

// const numeromultiplo = prompt ("Ingrese un número para saber si es múltiplo de 2: ");
// const multiplo = numeromultiplo % 2 === 0 ;

// console.log("El numero ingresado es multiplo de 2: "+ multiplo);

// d. Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario 
// básico por horas y el número de horas trabajadas en un mes y realice lo 
// siguiente:
// i. Calcular su salario básico mensual.

// const nombre = prompt ("Ingresa el nombre: ");
// const salario = prompt ("Ingresa salario por horas: ");
// const horas = prompt ("Ingresa horas trabajadas al mes: ");

// const salariomes = salario * horas;

// console.log ("El salario basico al mes es: "+ salariomes);

// ii. Determinar si recibe o no subsidio de transportes. Un empleado 
// recibe este subsidio cuando el salario mensual básico es menor o 
// igual a $700.000 COP

// const subsidio = salariomes < 700000 || salariomes == 700000;
// console.log ("El empleado recibe subsidio de transportes: "+ subsidio);

// iii. Mostrar en consola el nombre del empleado, su salario básico 
// mensual y si recibe o no subsidio de transporte.

// console.log ("El nombre del empleado es: "+ nombre, "El salario basico mensual es: "+ salariomes, "El empleado recibe subsidio: "+ subsidio);

// e. Hacer un algoritmo con JavaScript que reciba cualquier letra del 
// abecedario y muestre en consola el valor booleano que indique si es o no 
// una vocal.

// const letra = prompt ("Ingrese una letra del abecedario: ");
// const vocal = letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u';

// console.log ("La letra ingresada es vocal: "+ vocal);


// f. El aeropuerto El Dorado se encuentra en remodelación y requiere un 
// programa para suministrarlo a su personal de seguridad con el objetivo de 
// brindar información a los turistas sobre donde se debe tramitar las salidas 
// internacionales para nacionales y extranjeros. Se le solicita diseñar este 
// programa para que reciba el primer dígito de un número de pasaporte y 
// que muestre el valor booleano que indique si el turista es del país o 
// extranjero. Todos los No. de pasaporte que inicien con la letra A son 
// nacionales. 


// const numeropasaporte = prompt ("Ingrese el primer digito de numero de pasaporte: ");

// const nacional = numeropasaporte == 'A';

// console.log( "El turista es del pais: "+ nacional);

// 2. Considerando que 𝑎 = 4, 𝑏 = 7, 𝑐 = 2𝑏, 𝑥 = 𝑎 , 𝑦 = 3𝑥, 𝑢 = 6, 𝑤 = 10, z = 2; crear 
// un algoritmo con JavaScript que realice y muestre el resultado en consola de las 
// siguientes operaciones algebraica:

//  a. a/b*c

// let a = 4, b = 7, c = 2*b, x = a, y = 3*x, u = 6, w = 10, z = 2;

// const operacion = a / b* c;

// console.log ("Operacion 4/7*14: "+ operacion);

// b. a^2 + b^92
// const operacion2 = Math.pow(a, 2) + Math.pow(b, 92);
// console.log ("Operacion 4^2 + 7^92: "+ operacion2);
// c. x+y / (u + (w/a))

// const operacion3 = (x + y ) / (u + (w/a));
// console.log ("Operacion 4 + 12 / (6 + (10/4)): "+ operacion3);

// d. (x/y)*(z+w)
// const operacion4 = (x / y) * (z+ w);
// console.log("Operacion (4/12)*(2+10): "+ operacion4);
// 3. Ahora tu trabajo será completar las siguientes tablas de verdad, resolviendo cada 
// expresión lógica desde un algoritmo usando JavaScript y modificando los 
// diferentes valores que toma las variables de proposición p y q:

// A 

// let p = true;
// let q = true;
// let notp = !p;
// let notpandq = notp && q;

// console.log ("Resultado 3.a: p:T y q:T " + notpandq);

// p = true;
// q = false;
// notp = !p;
// notpandq = notp && q;

// console.log ("Resultado 3.a: p:T y q:F " + notpandq);

// p= false;
// q= true;
// notp = !p;
// notpandq = notp && q;

// console.log ("Resultado 3.a: p:F y q:T " + notpandq);

// p = false;
// q = false;
// notp = !p;
// notpandq = notp && q;

// console.log ("Resultado 3.a: p:F y q:F " + notpandq);

// // B

// p = true;
// q = true;
// notp = !p;
// let notq = !q;
// let notpandnotq = notp && notq;

// console.log ("Resultado 3.b p: T y q: T "+ notpandnotq);


// p = true;
// q = false;
// notp = !p;
// notq = !q;
// notpandnotq = notp && notq;

// console.log ("Resultado 3.b p:T y q: F "+ notpandnotq);

// p = false;
// q = true;
// notp = !p;
// notq = !q;
// notpandnotq = notp && notq;

// console.log ("Resultado 3.b p:F y q: T "+ notpandnotq);

// p = false;
// q = false;
// notp = !p;
// notq = !q;
// notpandnotq = notp && notq;

// console.log ("Resultado 3.b p:F y q: F "+ notpandnotq);