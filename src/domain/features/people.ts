export interface People {
  perform: (params: People.Params) => Promise<People.Result>
}

export namespace People {
  export type Params = { name: string; cpf: string }

  export type Result = { id: string; name: string; cpf: string }
}
