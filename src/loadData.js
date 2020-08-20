import Papa from 'papaparse';
import csvPhotos from './photos.csv';

async function GetData() {
    const data = Papa.parse(await fetchCsv());
    const result = csvJSON(data.data);
    return result;
}

async function fetchCsv() {
    const response = await fetch(csvPhotos);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    return csv;
}

function csvJSON(lines) {
	let result = [];
	let headers=lines[0];

	for(let i=1;i<lines.length;i++){

		let obj = {};
		let currentline=lines[i];

		for(let j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
		}

		result.push(obj);

	}

	return result;
}

export default GetData;