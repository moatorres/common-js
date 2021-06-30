import getRootFolder from './get-root-folder'

describe('getRootFolder()', () => {
  it('Should be defined', () => {
    expect(getRootFolder).toBeDefined()
  })

  it('Should return the root folder path', () => {
    let path = getRootFolder()
    expect(path).toContain('common-js/src/utils')
  })
})
