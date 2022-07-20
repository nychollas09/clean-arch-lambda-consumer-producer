export class ServerException extends Error {
  constructor(error?: Error) {
    super('Server failed. Try again soon')
    this.name = 'ServerException'
    this.stack = error?.stack
    this.message = error?.message ?? 'Internal Server Error'
  }
}
