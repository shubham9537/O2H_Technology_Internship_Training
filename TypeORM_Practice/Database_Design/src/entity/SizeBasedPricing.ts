import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class SizeBasedPricing  {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    content!: string;


}