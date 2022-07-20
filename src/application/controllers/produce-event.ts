import {
  HttpRequest,
  HttpResponse,
  succeedRequest
} from '@/application/helpers'
import { CreateNewPeopleEvent } from '@/domain/features'
import { Controller } from './controller'

type HttpRequestBody = { name: string; cpf: string }

type SucceedData = HttpRequestBody

export class ProduceEventController extends Controller {
  constructor(private readonly createNewPeopleEvent: CreateNewPeopleEvent) {
    super()
  }

  async perform({ body }: HttpRequest<HttpRequestBody>): Promise<HttpResponse> {
    await this.createNewPeopleEvent.perform({ name: body.name, cpf: body.cpf })

    return succeedRequest<SucceedData>(body)
  }
}
