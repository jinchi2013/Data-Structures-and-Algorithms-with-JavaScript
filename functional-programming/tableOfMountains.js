var mountains = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

/*

name         height country
------------ ------ -------------
Kilimanjaro  5895   Tanzania
Everest      8848   Nepal
Mount Fuji   3776   Japan
Mont Blanc   4808   Italy/France
Vaalserberg  323    Netherlands
Denali       6168   United States
Popocatepetl 5465   Mexico

*/

var mountainsTableFactory = (function mountainsTableFactory() {
	let cache = {};

	function checkCache(title) {
		if( cache.hasOwnProperty(title) ) {
			return cache[title];
		} else {
			cache[title] = getMinColumeWith(title);
			return cache[title];
		}
	}

	function getMinColumeWith(string) {
		return Math.max.apply(null, mountains.map( mountain => mountain[string].toString().length ))
	}

	function getTheTitleRow(titleArray) {
		return titleArray.reduce( (cate, title) => {
			cate += title;
			for(let i = 0; i< ( checkCache(title) - title.length); i++ ) {
				cate += " ";
			}

			cate += "  ";

			return cate;
		}, '');
	}

	function getTheDashLine(titleArray) {
		return titleArray.reduce( (dash, title) => {
			for(let i = 0; i< ( Math.max(checkCache(title), title.length) ); i++ ) {
				dash += "-";
			}

			dash += "  ";

			return dash;
		}, ''); 
	}

	function getTableLine(mountain, titles) {

		return titles.reduce( (row, title) => {
			row += mountain[title];

			for(let i = 0; i< ( Math.max(checkCache(title), title.length) - mountain[title].toString().length ); i++ ) {
				row += " ";
			}

			row += "  ";

			return row;
		}, '' )
	}

	function drawTableBody(mountains, titles) {
		return mountains.map( mountain => getTableLine(mountain, titles) ).join('\n');
	}

	function drawWholeTable(mountains) {
		const titles = Object.keys(mountains[0]);
		return [
			'',
			getTheTitleRow(titles),
			getTheDashLine(titles),
			drawTableBody(mountains, titles),
			''
		].join('\n');
	}

	return {
		drawWholeTable: drawWholeTable
	}
})();
