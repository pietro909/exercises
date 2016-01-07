function processData(input) {
    var result, 
        inputRows = input.split('\n'),
        TESTS = parseInt( inputRows[0] );
    
    for (var k = 1; k <= TESTS; k += 1) {
	// do work here
    }
}

var fs = require('fs'),
    filename = process.argv[2];

fs.readFile(
    filename,
    'utf8',
    function( err, data ) {
        if ( err ) {
            throw err;
        }
        
        processData( data );
});
