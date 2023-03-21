const path = require('path')
const defaultTitle = 'freeCodeCamp projects'

export default function getTitle() {
  const rootPath = path.resolve(__dirname, '../')
  const filePath = path.relative(rootPath, __dirname)
  const title = `${filePath
    .slice(3)
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')} - ${defaultTitle}`

  return title
}