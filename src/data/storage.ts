import moment, { Moment } from "moment";
import times from "lodash/times";

// export const month = month => {
//   month--;
//   let oneMonth = [];
//   let oneWeek = [];
//   for (const week in yearData()[month].weeks) {
//     for (const day in yearData()[month].weeks[week]) {
//       oneWeek.push(yearData()[month].weeks[week][day].date.getDate());
//     }
//     oneMonth.push(oneWeek);
//     oneWeek = [];
//   }
//   while (oneMonth[0].length !== 7) {
//     oneMonth[0].unshift("");
//   }
//   return oneMonth;
// };
// //подучение одного года
// export const yearData = () => {
//   let data = [];
//   for (let m = 0; m < 12; ++m) {
//     let day = moment({ year: 2019, month: m, day: 1 }); // формируем дату на первый день каждого месяца
//     let daysInMonth = day.daysInMonth(); // количество дней в месяце
//     let month = {
//       // готовим объект месяца
//       title: day.format("MMMM"),
//       weeks: {}
//     };
//     // итерируем по количеству дней в месяце
//     for (let d = 0; d < daysInMonth; ++d) {
//       let week = day.week();
//       // небольшой хак, момент считает
//       // последние дни декабря за первую неделю,
//       // но мне надо чтобы считалось за 53
//       if (m === 11 && week === 1) {
//         week = 53;
//       }
//       // если неделя еще не присутствует в месяце, то добавляем ее
//       if (!month.weeks.hasOwnProperty(week)) {
//         month.weeks[week] = {};
//       }
//       // добавляем день, у weekday() нумерация с нуля,
//       // поэтому добавляю единицу, можно и не добавлять,
//       // но так будет удобнее
//       month.weeks[week][day.weekday() + 1] = {
//         date: day.toDate()
//       };
//       // итерируем день на единицу, moment мутирует исходное значение
//       day.add(1, "d");
//     }
//     // добавлям данные по месяцу в год
//     data.push(month);
//   }
//   return data;
// };

export function getMonth(monthNumber: string): Moment[][] {
	const month = [];
	let week = [];
	let day = moment(`2019-${monthNumber}-01`);
	let weekDay = day.day();
	week[weekDay] = day;

	if (weekDay > 0) {
		let first = moment(day);
		do {
			first = moment(first).subtract(1, "days");
			week[first.day()] = first;
		} while (first.day() > 0);
	}

	do {
		day = moment(day).add(1, "days");
		weekDay = day.day();
		week[weekDay] = day;

		if (weekDay >= 6) {
			month.push(week);
			week = [];
		}
	} while (day.month() + 1 === parseInt(monthNumber));

	if (weekDay < 6) {
		let last = moment(day);
		do {
			last = moment(last).add(1, "days");
			week[last.day()] = last;
		} while (last.day() < 6);
	}

	month.push(week);
	return month;
}
