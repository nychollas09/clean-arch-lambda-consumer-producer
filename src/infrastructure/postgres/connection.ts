import { env } from '@/main/config/env'
import {
  Connection,
  ConnectionManager,
  getConnectionManager,
  createConnection
} from 'typeorm'
import { resolve } from 'path'

export class DatabaseUtil {
  private readonly connectionManager: ConnectionManager

  constructor() {
    this.connectionManager = getConnectionManager()
  }

  public async getConnection(): Promise<Connection> {
    const CONNECTION_NAME = 'default'

    let connection: Connection

    if (this.connectionManager.has(CONNECTION_NAME)) {
      connection = await this.connectionManager.get(CONNECTION_NAME)

      if (!connection.isConnected) {
        connection = await connection.connect()
      }
    } else {
      connection = await createConnection({
        type: 'postgres',
        port: Number(env.database.port),
        host: env.database.host,
        username: env.database.user,
        password: env.database.password,
        database: env.database.name,
        entities: [...[resolve(__dirname, 'entities', 'index.ts')]]
      })
    }

    await connection.synchronize()

    return connection
  }
}
