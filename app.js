const { readFile, writeFile, copyFileSync } = require('fs')
const http = require('http')
const util = require('util')
const RFP = util.promisify(readFile)
const WFP = util.promisify(writeFile)

const print = async () => {
    try {
        const first = await RFP('./content.txt','utf-8')
        const second = await RFP('./content2.txt','utf-8')
        console.log(`${first}\n${second}`)
        await WFP('./content3.txt',"This is the sample 3 in content3.txt")
        console.log(await RFP('./content3.txt','utf-8'))
    } catch (error) {
        console.log(error)
    }

}

print()