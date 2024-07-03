import { Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number
}
