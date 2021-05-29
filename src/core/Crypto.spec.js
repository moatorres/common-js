import { makeCrypto } from './Crypto'

const Crypto = makeCrypto()

describe('Crypto Module', () => {
  describe('.encriptarDados()', () => {
    it('Should be defined', () => {
      expect(Crypto.encriptarDados).toBeDefined()
    })

    it('Should return an ecrypted-data object', () => {
      let encriptado = Crypto.encriptarDados('Moka esteve aqui')
      expect(encriptado.iv).toBeDefined()
      expect(encriptado.encryptedData).toBeDefined()
    })
  })

  describe('.desencriptarDados()', () => {
    it('Should be defined', () => {
      expect(Crypto.desencriptarDados).toBeDefined()
    })

    it('Should return an unencrypted text string', () => {
      let frase = 'Moka esteve aqui'
      let encriptado = Crypto.encriptarDados(frase)
      let texto = Crypto.desencriptarDados(encriptado)
      expect(texto).toEqual(frase)
    })
  })

  describe('.RSAKeys()', () => {
    it('Should be defined', () => {
      expect(Crypto.RSAKeys).toBeDefined()
    })

    it('Should return valid public and private keys', async () => {
      let chaves = await Crypto.RSAKeys({ length: 2048 })
      expect(chaves.chavePrivada).toBeDefined()
      expect(chaves.chavePublica).toBeDefined()

      expect(typeof chaves.chavePrivada).toEqual('string')
      expect(typeof chaves.chavePublica).toEqual('string')
    })
  })

  describe('.gerarResetToken()', () => {
    it('Should be defined', () => {
      expect(Crypto.gerarResetToken).toBeDefined()
    })

    it('Should return a valid token', () => {
      let token = Crypto.gerarResetToken({ bytes: 16, encoder: 'hex' })

      expect(token).not.toBeNull()
      expect(token.length).toEqual(32)
    })
  })

  describe('.validarResetToken()', () => {
    it('Should be defined', () => {
      expect(Crypto.validarResetToken).toBeDefined()
    })

    it('Should generate a valid "digested-token" provided the same token', () => {
      let token = Crypto.gerarResetToken({ bytes: 16, encoder: 'hex' })

      let valido = Crypto.validarResetToken(token, 'hex')
      let mesmo = Crypto.validarResetToken(token)

      expect(typeof valido).toEqual('string')
      expect(typeof mesmo).toEqual('string')
      expect(valido).toEqual(mesmo)
    })
  })
})
