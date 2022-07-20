import { ProduceEventController } from '@/application/controllers'
import { makeCreateNewPeopleEventService } from '@/main/factories/services'

export const makeProduceEventController = (): ProduceEventController =>
  new ProduceEventController(makeCreateNewPeopleEventService())
