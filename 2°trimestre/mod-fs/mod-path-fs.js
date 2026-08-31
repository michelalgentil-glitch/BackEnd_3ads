const fs = require('fs')
const path = require('node:path')
const chalk = require('chalk').default



try {
    // resulta ler arquivo caminho pasta arquivo codificador
    // const arquivo = fs.readFileSync(path.join(__dirname+"/README.MD"), "utf-8")
    const arquivo = fs.readFileSync(path.resolve(__dirname+"/README.MD"), "utf-8")
    console.log(chalk.bgGreen.white('✔️​ arquivo carregado com sucesso!...'))
    console.log(arquivo)
} catch (error) {
    console.error(chalk.bgRed.white('❌​ deu ruim...'))
    console.error(error.message)
}