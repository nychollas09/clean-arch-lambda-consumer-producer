import '../../config/module-alias' // Tem que ser assim pois é essa configuração que vai possibilitar a utilização dos Paths "@/*"

import 'reflect-metadata'

import { adaptServerlessLambdaSQSroute } from '@/infrastructure/adapters/aws/sqs'
import { LambdaContext, LambdaSQSEvent } from '@/infrastructure/helpers/aws'
import { makeConsumeEventController } from '@/main/factories/controllers'

export const handler = async (
  event: LambdaSQSEvent,
  context: LambdaContext
): Promise<void> =>
  adaptServerlessLambdaSQSroute(makeConsumeEventController(), {
    event,
    context
  })
