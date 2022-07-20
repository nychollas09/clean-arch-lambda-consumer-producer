import { QueueRequest, QueueResponse } from '@/application/helpers'
import { People } from '@/domain/features'
import { Controller } from './controller'

export class ConsumeEventController extends Controller {
  constructor(private readonly people: People) {
    super()
  }

  async perform({ queueName, records }: QueueRequest): Promise<QueueResponse> {
    const peoples = await records.map(
      async (record) => await this.people.perform(record.body)
    )
    return { statusCode: 200, data: peoples }
  }
}
