// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as XLSX from 'xlsx'
export default async function handler(req, res) {
  const file = "./memberData.xlsx";
  const workbook = XLSX.readFile('./memberData.xlsx',{cellDates:true})
  const workSheet2021 =XLSX.utils.sheet_to_json(workbook.Sheets['fandmal'],{header:['date','acount']})
  res.status(200).json(workSheet2021.slice(1))
}
