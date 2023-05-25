import type { GoodsItem } from "./home";


export type ChildrenC = {
	id: string;
	name: string; 
	picture: string;
	goods: GoodsItem[];
}

export type topCategory  ={
	id: string;
	name: string; 
	children: ChildrenC[];
}