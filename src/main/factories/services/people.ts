import { PeopleService } from '@/data/services/people'
import { PostgresPeopleRepository } from '@/infrastructure/postgres/repositories'

export const makePeopleService = (): PeopleService =>
  new PeopleService(new PostgresPeopleRepository())
