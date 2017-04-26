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
Kilimanjaro    5895 Tanzania
Everest        8848 Nepal
Mount Fuji     3776 Japan
Mont Blanc     4808 Italy/France
Vaalserberg     323 Netherlands
Denali         6168 United States
Popocatepetl   5465 Mexico

*/

function mountainsTableFactory(mountains) {
	const titles = Object.keys(mountains[0]);
	const minNameColLength = getMinColumeWith('name');
	const minHeightColLength = getMinColumeWith('height');
	const minCountryColLength = getMinColumeWith('country');

	function getMinColumeWith(string) {
		return Math.max.apply(null, mountains.map( mountain => mountain[string].toString().length ))
	}

	function getTheTitleRow(titleArray) {
		
	}

	function getTheDashLine() {

	}

	return mountainsTable;
}
