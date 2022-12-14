import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController]
})
export class ProductModule {
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	calculatedRating: number;
	decription: string;
	advantages: string;
	disAdvantages: string;
	categories: string[];
	tags: string;
	characteristics: {
		[key: string]: string;
	};
}