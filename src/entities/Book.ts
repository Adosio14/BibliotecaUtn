import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("book")
export class Book {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    author!: string

    @Column()
    publisher!: string

    @Column()
    genre!: string

    @Column()
    location!: string

    @Column()
    stock!: number

    @DeleteDateColumn()
    deletedAt!: Date
}