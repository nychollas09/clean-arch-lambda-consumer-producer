export interface NewPeople {
  perform: (params: NewPeople.Params) => Promise<NewPeople.Result>
}

export namespace NewPeople {
  export type Params = { name: string; cpf: string }
  export type Result = void | never
}
