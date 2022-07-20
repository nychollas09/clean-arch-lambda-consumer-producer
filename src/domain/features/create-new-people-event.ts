export interface CreateNewPeopleEvent {
  perform: (
    params: CreateNewPeopleEvent.Params
  ) => Promise<CreateNewPeopleEvent.Result>
}

export namespace CreateNewPeopleEvent {
  export type Params = { name: string; cpf: string }
  export type Result = void | never
}
