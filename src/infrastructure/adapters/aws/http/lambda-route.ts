import { Controller } from '@/application/controllers/controller'
import { HttpRequest, HttpResponse } from '@/application/helpers'
import {
  LambdaArgs,
  LambdaHttpEvent,
  LambdaHttpResponse
} from '@/infrastructure/helpers/aws'

export const adaptLambdaHttpArgsToHttpRequest = (
  event: LambdaHttpEvent
): HttpRequest => {
  return {
    body: event?.body,
    fullPath: event.requestContext.path,
    headers: event.headers,
    method: event.httpMethod,
    queryParams: event.queryStringParameters,
    requestId: event.requestContext.requestId
  }
}

export const adaptServerlessLambdaHttpRoute = async (
  controller: Controller,
  args: LambdaArgs
): Promise<LambdaHttpResponse> => {
  const { statusCode, data } = (await controller.handle(
    adaptLambdaHttpArgsToHttpRequest(args.event as LambdaHttpEvent)
  )) as HttpResponse

  return {
    statusCode,
    body: data instanceof Error ? { error: data.message } : data
  }
}
