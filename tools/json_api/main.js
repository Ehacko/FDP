const fs = require('fs')
const path = require('path');

module.exports = ([table, id], data, action) => {
  const
    file_path = path.join(__dirname, `../../store/${table}.json`),
    records = fs.existsSync(file_path) ? require(file_path) : [],
    res = (records && require(`./${action}`)(records, data, id) )|| 'NOT FOUND';

  console.log('res =>', res)
  fs.writeFileSync(file_path, JSON.stringify(records))

  return res
};