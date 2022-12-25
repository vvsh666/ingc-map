const xlsx = require('xlsx')
const workbook = xlsx.readFile('./src/db/ng_db.xlsx')
const sheet_name_list = workbook.SheetNames // получаем список листов

sheet_name_list.forEach(list => {
    const worksheet = workbook.Sheets[list]

    let headers = {}
    let data = []

    for (z in worksheet) {
        if (z[0] === '!') continue
        let col = z.substring(0, 1)
        let row = z.substring(1)
        console.log(col, row);
    }
})



