import { file } from './lib/file.js'

console.log(file)

// const user = {
//     name: 'Petras',
//     age: 99,
//     isMarried: true 
// }

file.create('data/users', 'petras.json', { name: 'Petras', age: 99 })


const readStatus = await file.read('users', 'petras.json')
console.log('readStatus', readStatus)

const readStatus2 = await file.read('users', 'maryte.json')
console.log(readStatus2)

const readStatus3 = await file.read('///users//', 'petras.json')
console.log(readStatus3)
