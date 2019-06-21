const fs = require("fs")
const json = require("./interests.json")

function convertInterests(json) {
  const interests = json.records.map(record => {
    return {
      id: record.id,
      ...record.fields
    }
  })

  fs.writeFileSync('../data/interests.json', JSON.stringify(interests, null, 2))
}

convertInterests(json)
