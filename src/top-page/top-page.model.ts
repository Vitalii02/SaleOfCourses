import { TopLevelCategory } from '../util/constans';

export class TopPageModel {
	_id: string;
	firtsCategory: TopLevelCategory;
	secongCategory: string;
	title: string;
	category: string;
	djinni?: {
		count: number;
		juniorSelety: number;
		middleSelery: number;
		seniorSelety: number;
	};
	advantages: {
		title: string;
		description: string;
	}[];
	seoText: string;
	tagsTitle: string;
	tags: string[];
}
