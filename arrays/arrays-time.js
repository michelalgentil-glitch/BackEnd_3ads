// Um array é um grupo indexado de valores
// Podem ser homogêneos / heterogêneos
// Seus índices vão de "0"..."infinito"
// Possuem funções nativas (prontas)
// Podem ser Interados e Checados

const time = ['Petter', 'Pan', true, , 56]
    // indices   0        1       2 
time[55] // undefined

for (const jogador of time) {
    console.log("Jogador: " +jogador)

}