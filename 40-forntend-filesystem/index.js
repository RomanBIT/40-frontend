import { file } from './lib/file.js'

console.log(file)

file.create('data/users', 'petras.json', { name: 'Petras', age: 99 })
