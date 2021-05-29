import crypto from 'crypto'
import { promisify } from 'util'

const gerarChaves = promisify(crypto.generateKeyPair)
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

export const makeCrypto = () => {
  class Crypto {
    constructor(crypto) {
      this.crypto = crypto
    }

    encriptarDados(texto) {
      let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
      let textoEncriptado = cipher.update(texto)
      textoEncriptado = Buffer.concat([textoEncriptado, cipher.final()])
      return {
        iv: iv.toString('hex'),
        encryptedData: textoEncriptado.toString('hex'),
      }
    }

    desencriptarDados(texto) {
      let iv = Buffer.from(texto.iv, 'hex')
      let textoEncriptado = Buffer.from(texto.encryptedData, 'hex')
      let decifrador = crypto.createDecipheriv(algorithm, Buffer.from(key), iv)
      let textoDesencriptado = decifrador.update(textoEncriptado)
      textoDesencriptado = Buffer.concat([
        textoDesencriptado,
        decifrador.final(),
      ])
      return textoDesencriptado.toString()
    }

    async RSAKeys({ length }) {
      let chavePublica, chavePrivada
      const options = {
        modulusLength: length,
        publicKeyEncoding: {
          type: 'spki',
          format: 'pem',
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem',
        },
      }

      const { privateKey, publicKey } = await gerarChaves('rsa', options)

      chavePrivada = privateKey
        // @ts-ignore
        .split('\n')
        .join()
        .replace(/,/g, '')
        .replace('-----BEGIN PRIVATE KEY-----', '')
        .replace('-----END PRIVATE KEY-----', '')

      chavePublica = publicKey
        // @ts-ignore
        .split('\n')
        .join()
        .replace(/,/g, '')
        .replace('-----BEGIN PUBLIC KEY-----', '')
        .replace('-----END PUBLIC KEY-----', '')

      return { chavePrivada, chavePublica }
    }

    gerarResetToken({ bytes, encoder }) {
      return crypto.randomBytes(Number(bytes)).toString(encoder || 'hex')
    }

    validarResetToken(token, encoder) {
      return crypto
        .createHash('sha256')
        .update(token)
        .digest(encoder || 'hex')
    }
  }
  return new Crypto(crypto)
}

// const crypx = makeCrypto()
// const mensagem = '056.123.123.03'
// console.log(crypx.encriptarDados(mensagem))
// console.log(mensagem)
