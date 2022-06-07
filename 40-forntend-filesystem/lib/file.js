import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

// async / await
// dokumentacija
// try / catch


const file = {}

file.fullPath = (dir, fileName) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    return path.join(__dirname, '../data', dir, fileName)
}

// dir - folderis kur bus failas
// fileName - failo pavadinimas su pletyniu
// content - turinys, kuri reikia irasyti i kuriama faila

/**
 * Sukueiamas failas
 * @param {string} dir Reliatvus kelias iki direktorijos kur laikomi norimi failai, pvz.: /data/users
 * @param {string} fileName Norimo failo pavadinimas su jo pletiniu
 * @param {*} content Objektas (PVZ.: {...}), kuri norim irasyti i kuriama faila
 * @returns {boolean|string} Sekmes atveju - `true`; Klaidos atveju - klaidos pranesimas
*/

file.create = (dir, fileName, content) => {
    console.log('Kuriamas failas..');
}

file.read = async (dir, fileName) => {
    try {
        const filePath = 'data/' + dir + '/' + fileName
        const fileContent = await fs.readFile(filePath, 'utf-8')
        return fileContent
    } catch (error) {
        return 'Ups..FALSE bruh'
    }
}

file.update = () => {
    console.log('Atnaujinamas failas..');
}

file.delete = () => {
    console.log('Trinamas failas..');
}




export { file }