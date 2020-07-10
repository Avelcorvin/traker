const fs = require('fs')



const engi1=(filePath,options, callback)=>{
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        const rendered = content.toString()
          .replace(`{${options.text}}`,options.value)
        return callback(null,rendered)
    })
}

module.exports=engi1;