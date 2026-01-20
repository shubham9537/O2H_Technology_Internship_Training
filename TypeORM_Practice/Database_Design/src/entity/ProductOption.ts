import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";
]import { Product } from "./Product";
import {OptionValue} from "./OptionValue";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    name!:string;

    @Column()
    description!:string;

    @ManyToOne(() => Product, product => product.options)
    product!: Product;

    @OneToMany(() => OptionValue, values => values.productOption)
    values!: OptionValue[];
}   