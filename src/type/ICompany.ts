interface ICompany {
	id: number;
	dateStart: number;
	dateFinish: number;
	name: string;
	author: string;
	textfirst: string;
	textsecond: string;
	schedule?:[
		{days:["mon","wen","thue","fri","sut","sun"],
		_id:"5c3db0fc3ebad74278c9bb5f",
		start: 1545696638,
		end:1559175038}
	],
	groups?: "5c38c9679fbfdd8e28958cbe",
	rates?: "5c362c884284762b081ffefe",
	zones?: ["5c3da8af5429cc3f88043e4c"],
	__v?:0;
	numberHits?: number;
	duration?: number
}



export default ICompany;


