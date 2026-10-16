// Ternário é uma forma simplifica de escrever
// if-else

    let solteiro = true 

    if (solteiro == true) {
        console.log('Tá na pista!')
    } else {
        console.log('Se liga, tenho compromisso')
    }
    // Expressão Ternária
    const estadoCivil = solteiro == true? 'Tá na pista!' : 'Se liga, tenho compromisso!'
    console.log(estadoCivil)