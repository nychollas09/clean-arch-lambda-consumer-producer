import { People } from '@/domain/features'
import { SavePeopleRepository } from '../contracts/repositories'

export class PeopleService implements People {
  constructor(private readonly repository: SavePeopleRepository) {}

  async perform(params: People.Params): Promise<People.Result> {
    return this.repository.save(params)
  }
}
