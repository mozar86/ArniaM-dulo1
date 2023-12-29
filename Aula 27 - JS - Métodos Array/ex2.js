const io = require('../io/io')

const array = ['fulano', 'ciclano', 'beltrano']

/* for (let i = 0; index < array.length; index++) {
    const element = array[index];
    
} */

const novoArray = array.map((item) => {
    return `Olá ${item}`
})

io.write(novoArray)