import { CreateNewPeopleEvent } from '@/domain/features'
import { NewPeople } from '@/data/contracts/repositories'

export class CreateNewPeopleEventService implements CreateNewPeopleEvent {
  constructor(private readonly newPeople: NewPeople) {}

  async perform({
    cpf,
    name
  }: CreateNewPeopleEvent.Params): Promise<CreateNewPeopleEvent.Result> {
    await this.newPeople.perform({ cpf, name })
  }
}
