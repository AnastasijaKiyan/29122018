interface ICompany {
	id: number;
	dateStart: number;
	dateFinish: number;
	name: string;
	author: string;
	textfirst: string;
	textsecond: string;
	schedule?: [
		{
			days: string[], // ["mon","wen","thue","fri","sut","sun"]
			_id: string, // "5c3db0fc3ebad74278c9bb5f"
			start: Date, // 1545696638
			end: Date // 1559175038
		} 
	],
	groups?: string, // "5c38c9679fbfdd8e28958cbe"
	rates?: string, // "5c362c884284762b081ffefe"
	zones?: string[], // ["5c3da8af5429cc3f88043e4c"]
	__v?: number; // только 0
	numberHits?: number; //1,10,20,30,60
	duration?: number // 10 сек
}



export default ICompany;


