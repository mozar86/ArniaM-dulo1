const io = require('../io/io')

function funcaoTradicional() {
    io.write('Esta é uma função tradicional')
}

funcaoTradicional()

const funcaoAnonima = function () {
    io.write('Esta é uma função tradicional anônima')
}

funcaoAnonima()

const funcaoArrow = () => {
    io.write('Esta é uma Arrow Function(sempre anônima')
}

funcaoArrow()