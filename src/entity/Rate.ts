import { Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Rate {
    @PrimaryGeneratedColumn()
    id: number
}
