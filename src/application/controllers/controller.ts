import {
  HttpRequest,
  HttpResponse,
  QueueRequest,
  QueueResponse,
  serverErrorRequest
} from '@/application/helpers'

type Request = HttpRequest | QueueRequest
type Response = HttpResponse | QueueResponse | undefined

export abstract class Controller {
  public async handle(request: Request): Promise<Response> {
    if ((request as HttpRequest).requestId !== undefined) {
      try {
        return await this.perform(request)
      } catch (error) {
        return serverErrorRequest(error as Error)
      }
    }

    if ((request as QueueRequest).queueName !== undefined) {
      return await this.perform(request)
    }
  }

  abstract perform(request: Request): Promise<Response>
}
