import { Controller } from '@/application/controllers/controller'
import { QueueRequest } from '@/application/helpers'
import { LambdaArgs, LambdaSQSEvent } from '@/infrastructure/helpers/aws'

export const adaptLambdaSQSArgsToQueueRequest = (
  event: LambdaSQSEvent
): QueueRequest => {
  return {
    queueName: event.Records[0].eventSourceARN.split(':').at(-1) as string,
    records: event.Records.map((record) => ({
      body: JSON.parse(record.body),
      messageId: record.messageId
    }))
  }
}

export const adaptServerlessLambdaSQSroute = async (
  controller: Controller,
  args: LambdaArgs
): Promise<void> => {
  await controller.handle(
    adaptLambdaSQSArgsToQueueRequest(args.event as LambdaSQSEvent)
  )
}
