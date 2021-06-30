import path from 'path'

const getRootFolder = function () {
  // @ts-ignore
  return path.dirname(require.main.filename || process.mainModule.filename)
}

export default getRootFolder
