const io = require('../io/io')

let = io.write('Preencha a:')
a = io.readInt()
let = io.write('Preencha b:')
b = io.readInt()
let = io.write('Preencha c:')
c = io.readInt()

let delta = (b ** 2) - (4 * a * c)

if (delta > 0) {
    let x1Linhas = (-b + Math.sqrt(delta)) / 2 * a
} else if (delta < 0) {
    let x2Linhas = (+b + Math.sqrt(delta)) / 2 * a
}

