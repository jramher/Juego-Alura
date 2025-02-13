                let numeroSecreto = 0;
                let intentos = 0;
                let listaNumerosSorteados = [];
                let numeromaximo = 10 ;
                        
                function asignarTextoElemento(elemento, texto) {
                        let elementoHTML = document.querySelector(elemento);
                        elementoHTML.innerHTML = texto;
                        return;
                        }

                        console.log(numeroSecreto);
                function verificarintento() {
                        let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
                                        
                        if (numeroDeUsuario === numeroSecreto) {
                                asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
                                document.getElementById('reiniciar').removeAttribute('disabled');
                        } else {
                                //El usuario no acertó
                        if (numeroDeUsuario > numeroSecreto) {
                                asignarTextoElemento('p','El número secreto es menor');
                        } else {
                                asignarTextoElemento('p','El número secreto es mayor');
                        }
                        intentos++;
                        limpiarcaja();
                }
                        return;
                        }

                function limpiarcaja() {
                        document.querySelector('#ValorUsuario').value = '';
                }

                
                function generarNumeroSecreto() {
                        let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;

                console.log(numerogenerado);
                console.log(listaNumerosSorteados);

                //Si ya sorteamos todos los números
                if (listaNumerosSorteados.length == numeromaximo) {
                        asignarTextoElemento ('p','Ya se sortearon todos los números');
                } else {

                //Si el número generado está incluido en la lista
                        if (listaNumerosSorteados.includes(numerogenerado)){
                        return generarNumeroSecreto();

                        } else {
                        listaNumerosSorteados.push(numerogenerado);
                        return numerogenerado;
                        }

                }
                        }
                        
                function condicionesIniciales() {
                        asignarTextoElemento('h1','Juego del número secreto');
                        asignarTextoElemento('p',`Inserte un número del 1 al ${numeromaximo}`);
                        numeroSecreto = generarNumeroSecreto();
                        intentos = 1;
                        
                }
                
                function reiniciarjuego() {
                        //limpiar caja, generar nuevo número, deshabilitar el botón al nuevo juego, Inicializar el # de intentos
                        limpiarcaja();
                        condicionesIniciales();
                        document.querySelector('#reiniciar').setAttribute('disabled','true');
                }         
                                //return math.floor(Math.random()*10)+1;         
                                
                condicionesIniciales();