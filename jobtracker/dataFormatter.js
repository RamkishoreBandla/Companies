const fs = require('fs');

function readFileLineByLine(filePath) {
    const fileStream = fs.createReadStream(filePath);
    let lines = [];
    const FormattedData = [];
    const rl = require('readline').createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        lines.push(line);
        // console.log(line);  // Process each line here
    });

    rl.on('close', () => {
        console.log('File read completed.');
        // Process entire content or end of file
        // console.log(lines);

        lines = lines.filter(e => e !== '')
        for (let i = 0; i < lines.length; i += 3) {
            FormattedData.push({
                companyName: lines[i],
                salary: lines[i + 2],
                status: 'Not Applied'
            })
        }
       fs.writeFileSync("companies.json",JSON.stringify(FormattedData));

    });


}

// Example usage:
const filePath = 'src/companies.txt';
readFileLineByLine(filePath);
