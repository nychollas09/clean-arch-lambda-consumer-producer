import { SavePeopleRepository } from '@/data/contracts/repositories'
import { DatabaseUtil } from '../connection'
import { PostgresPeople } from '../entities'

export class PostgresPeopleRepository implements SavePeopleRepository {
  async save(
    params: SavePeopleRepository.Params
  ): Promise<SavePeopleRepository.Result> {
    const repository = (await new DatabaseUtil().getConnection()).getRepository(
      PostgresPeople
    )

    const { id, name, cpf } = await repository.save(params)

    return { id: String(id), name, cpf }
  }
}
