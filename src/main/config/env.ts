export const env = {
  aws: {
    accessKeyId: process.env.ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.SECRET_ACCESS_KEY ?? '',
    sqsUrl: process.env.SQS_URL ?? ''
  },
  database: {
    host: process.env.DATABASE_HOST ?? '',
    port: process.env.DATABASE_PORT ?? '',
    user: process.env.DATABASE_USER ?? '',
    password: process.env.DATABASE_PASSWORD ?? '',
    name: process.env.DATABASE_NAME ?? ''
  }
}
