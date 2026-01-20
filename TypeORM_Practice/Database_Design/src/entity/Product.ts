import {Entity,PrimaryGeneratedColumn,Column,OneToMany} from "typeorm";

import {ProductOption} from "./ProductOption";
import {PerUnitPricing} from "./PerUnitPricing";
import {BundlePricing} from "./BundlePricing";
import {SizeBasedPricing} from "./SizeBasedPricing";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    name!:string;

    @Column()
    description!:string;

    @OneToMany(() => ProductOption, option => option.product)
    options!: ProductOption[];

    @OneToMany(() => PerUnitPricing, perUnitPricing => perUnitPricing.product)
    perUnitPricings!: PerUnitPricing[];

    @OneToMany(() => BundlePricing, bundlePricing => bundlePricing.product)
    bundlePricings!: BundlePricing[];

    @OneToMany(() => SizeBasedPricing, sizeBasedPricing => sizeBasedPricing.product)
    sizeBasedPricings!: SizeBasedPricing[];
}
