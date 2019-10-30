/*ComputeNotes*/
var tablNotes = [10, 13, 13, 12, 15, 12, 11, 16, 14];

//function computeNotes
function computeNotes(table) {
    
    var tablSize = table.length;
    var sum = 0;

    for (var i = 0; i < tablSize; i++) {
        sum += table[i];
    }

    var result = sum / tablSize;

    return result;

}
alert("Voici les notes: " + tablNotes + " et la moyenne est de " + computeNotes(tablNotes));
