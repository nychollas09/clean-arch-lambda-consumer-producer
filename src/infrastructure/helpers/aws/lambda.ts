export type LambdaHttpEvent = {
  resource: string
  path: string
  httpMethod: string
  headers: { [key: string]: string }
  queryStringParameters: { [key: string]: string }
  requestContext: {
    path: string
    requestId: string
  }
  body: { [key: string]: any }
}

export type SQSRecord = {
  messageId: string
  receiptHandle: string
  body: string
  attributes: {
    ApproximateReceiveCount: number
    SentTimestamp: number
    SenderId: string
    ApproximateFirstReceiveTimestamp: number
  }
  messageAttributes: { [k: string]: any }
  md5OfBody: string
  eventSource: string
  eventSourceARN: string
  awsRegion: string
}

export type LambdaSQSEvent = {
  Records: SQSRecord[]
}

export type LambdaContext = {
  awsRequestId: string
  functionName: string
  invokedFunctionArn: string
}

export type LambdaArgs = {
  event: LambdaHttpEvent | LambdaSQSEvent
  context: LambdaContext
}

export type LambdaHttpResponse = {
  statusCode: number
  body: string
}
