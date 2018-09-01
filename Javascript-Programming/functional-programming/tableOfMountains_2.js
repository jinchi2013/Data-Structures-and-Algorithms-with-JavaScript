var mountains = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"},
    {name: "Fake", height: 1110000, country: "Fake Place"}
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

function mountainsTableFactory() {

    var cache = {}

    function calcNeededWidth(title) {
        var result = title.length
        mountains.forEach(function(mountain) {
            var string  = '' + mountain[title]
            if (string.length > result) {
                result = string.length
            }
        })

        return result
    }

    function getWidthFromCache(title) {
        if (cache[title]) {
            return cache[title]
        } else {
            cache[title] = calcNeededWidth(title)
            return cache[title]
        }
    }

    function getTheTitleRow (titles, leftAlign) {
        return titles.reduce(function(line, title) {
            if (leftAlign && title !== 'name') {
                for(var i = 0; i < (getWidthFromCache(title) - title.length); i++) {
                    line += ' '
                }

                line += title

                line += ' '

                return line
                
            } else {
                line += title

                for(var i = 0; i < (getWidthFromCache(title) - title.length); i++) {
                    line += ' '
                }
    
                line += ' '
    
                return line
            }

        }, '')
    }

    function getTheDashLine(titles) {
        return titles.reduce(function(dashLine, title){
            for (var i = 0; i < getWidthFromCache(title); i++) {
                dashLine += '-'
            }
            dashLine += ' '

            return dashLine
        }, '')
    }

    function getTableRow(mountain, titles, leftAlign) {
        return titles.reduce(function(line, title) {
            var convStr = mountain[title] + ''
            if (leftAlign && title !== 'name') {
                for(var i = 0; i < (getWidthFromCache(title) - convStr.length); i++) {
                    line += ' '
                }

                line += convStr

                line += ' '

                return line
                
            } else {
                line += convStr

                for(var i = 0; i < (getWidthFromCache(title) - convStr.length); i++) {
                    line += ' '
                }
    
                line += ' '
    
                return line
            }

        }, '')
    }

    function getTheTableBody(titles, leftAlign) {
        return mountains.map( function(mountain) {
            return getTableRow(mountain, titles, leftAlign)
        }).join('\n')
    }


    function drawWholeTable(mountains, leftAlign) {
        var titles = [];
        for(var key in mountains[0]) {
            titles.push(key)
        }

        return [
            '',
            getTheTitleRow(titles, leftAlign),
            getTheDashLine(titles),
            getTheTableBody(titles, leftAlign),
            ''
        ].join('\n')
    }

    return {
        drawWholeTable: drawWholeTable,
        cache: cache
    }
}

