import { NewPeople } from '@/data/contracts/repositories'
import { env } from '@/main/config/env'
import { SQS } from 'aws-sdk'

export class SQSNewPeopleRepository implements NewPeople {
  private readonly sqsClient: SQS

  constructor() {
    this.sqsClient = new SQS({
      apiVersion: '2012-11-05',
      credentials: {
        accessKeyId: env.aws.accessKeyId,
        secretAccessKey: env.aws.secretAccessKey
      }
    })
  }

  async perform({ name, cpf }: NewPeople.Params): Promise<NewPeople.Result> {
    await this.sqsClient
      .sendMessage({
        QueueUrl: env.aws.sqsUrl,
        MessageBody: JSON.stringify({ name, cpf })
      })
      .promise()
  }
}
