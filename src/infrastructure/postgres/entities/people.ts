import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'pessoa' })
export class PostgresPeople {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column({ name: 'nome' })
  public name!: string

  @Column()
  public cpf!: string
}
