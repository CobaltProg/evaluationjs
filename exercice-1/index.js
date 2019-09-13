
class matrix {
    constructor() {

    }
        /**
         * generator table matrix
         * @param {number} xAxis, yAxis
         * @return {number} result 
         */
        var gridGenerator  = function gridGenerator(xAxis,yAxis) {
            var elTable = document.createElement('table');
            var elBody = document.querySelector('body');
    
            for (var i = 0; i < myTable.length; i++){
                var elTr = document.createElement('tr');
                var row = myTable[i];

                 for (var j = 0; j < row.length; j++){
                     var elTd = document.createElement('td');

                     elTd.textContent = row[j];
                     elTr.appendChild(elTd);
                }

                elTable.appendChild(elTr);
         }

            elBody.appendChild(elTable);
        }
            return;
         }; 
         /**
          * case Random 
          * @param {number} 
          * @return {number} result 
          */
        var caseRandom = function caseRandom(GG){


            return;
        }
        /**
          * color Random 
          * @param {number} 
          * @return {number} result 
          */
        var colorRandom = function colorRandom(){

            return;
        }
    
        
    }
  




