import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { TopLevelCategory } from '../util/constans';


export class djiniData {
	@prop()
	count: number;

	@prop()
	juniorSelety: number;

	@prop()
	middleSelery: number;

	@prop()
	seniorSelety: number;
};

export class TopPageAdvantage {
	@prop()
	title: string;

	@prop()
	description: string;
} [];

export interface TopPageModel extends Base { }
export class TopPageModel extends TimeStamps {

	@prop({ enum: TopLevelCategory })
	firtsCategory: TopLevelCategory;

	@prop()
	secongCategory: string;

	@prop({ unique: true })
	alias: string

	@prop()
	title: string;

	@prop()
	category: string;

	@prop({ type: () => [djiniData] })
	djinni?: djiniData;

	@prop({ type: () => [TopPageAdvantage] })
	advantages: TopPageAdvantage[];

	@prop()
	seoText: string;

	@prop()
	tagsTitle: string;

	@prop({ type: () => [String] })
	tags: string[];
}
