type EncoderTypes =
  | 'ascii'
  | 'base64'
  | 'binary'
  | 'hex'
  | 'latin1'
  | 'ucs-2'
  | 'ucs2'
  | 'utf-8'
  | 'utf16-le'
  | 'utf8'

interface ObjectoEncriptado {
  iv: string
  encryptedData: string | Buffer
}

interface ChavesRSA {
  chavePrivada: string
  chavePublica: string
}

interface Crypto {
  encriptarDados: (texto: string) => ObjectoEncriptado
  desencriptarDados: (texto: ObjectoEncriptado) => string
  RSAKeys: ({ length }: { length: number }) => ChavesRSA
  gerarResetToken: ({
    bytes,
    encoder,
  }: {
    bytes: number
    encoder?: EncoderTypes
  }) => string
  validarResetToken: (token: string, encoder?: EncoderTypes) => boolean
}

export function makeCrypto(): Crypto
