export type QueueResponse<T = any> = {
  statusCode: number
  data: T
}

export type QueueRecord<T = any> = {
  messageId: string
  body: T
}

export type QueueRequest<T = any> = {
  records: Array<QueueRecord<T>>
  queueName: string
}
