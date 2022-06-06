// async / await
// dokumentacija
// try / catch


const file = {}

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
file.read = () => {
    console.log('Skaitomas failas..');
}
file.update = () => {
    console.log('Atnaujinamas failas..');
}
file.delete = () => {
    console.log('Trinamas failas..');
}




export { file }