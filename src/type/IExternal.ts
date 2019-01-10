export interface ISchedule {
	start: number;
	end: number;
	days: string[];
}

export interface ICampaign {
	_id: string;
	name: string;
	autor: string;
	periodStart: number;
	periodEnd: number;
	schedule: ISchedule[];
}

// Example
export const _campaign = {
	_id: "sadfasfasf",
	name: "Coca",
	author: "Batman",
	periodStart: 1547138903,
	periodEnd: 1547195903,
	schedule: [
		{
			start: 1547138903,
			end: 1547138903,
			days: ["mon", "wed", "fri"]
		}
	]
};
