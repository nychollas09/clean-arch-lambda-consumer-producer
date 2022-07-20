import { CreateNewPeopleEventService } from '@/data/services'
import { SQSNewPeopleRepository } from '@/infrastructure/aws/repositories/simple-queue-service'

export const makeCreateNewPeopleEventService =
  (): CreateNewPeopleEventService =>
    new CreateNewPeopleEventService(new SQSNewPeopleRepository())
