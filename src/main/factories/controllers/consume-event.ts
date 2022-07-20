import { ConsumeEventController } from '@/application/controllers/consume-event'
import { makePeopleService } from '@/main/factories/services'

export const makeConsumeEventController = (): ConsumeEventController =>
  new ConsumeEventController(makePeopleService())
