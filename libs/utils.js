const chalk = require('chalk')
const path = require('path')
const fs = require('fs')

exports.generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}已存在`)
    return
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

exports.doExistDirectoryCreate = (directory) => {
  return new Promise(resolve => {
    mkdirs(directory, function () {
      resolve(true)
    })
  })
}

function mkdirs (directory, callback) {
  const exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), () => {
      fs.mkdirSync(directory)
      callback()
    })
  }
}

exports.toUpperCase = (str) => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()


exports.resolve = (...file) => path.resolve(__dirname, ...file)
exports.log = message => console.log(chalk.green(`${message}`))
exports.successLog = message => console.log(chalk.blue(`${message}`))
exports.errorLog = error => console.log(chalk.red(`${error}`))

