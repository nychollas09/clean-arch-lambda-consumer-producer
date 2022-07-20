export interface SavePeopleRepository {
  save: (
    params: SavePeopleRepository.Params
  ) => Promise<SavePeopleRepository.Result>
}

export namespace SavePeopleRepository {
  export type Params = { name: string; cpf: string }
  export type Result = { id: string; name: string; cpf: string }
}
