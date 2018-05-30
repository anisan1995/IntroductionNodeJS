const path = require('path')
const fs = require('fs')
const fileS = path.join(__dirname, 'customer-data.csv')

const csv=require('csvtojson')
csv()
.fromFile(fileS)
.then((jsonObj)=>{
fs.writeFile('customer-data.json',JSON.stringify(jsonObj), function (error) {
  if (error) return console.error(error)
  console.log('Writing is done.')
})	 
})
const jsonArray=csv().fromFile(fileS);
