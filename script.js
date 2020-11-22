

const xlabels = [];
const ytemps = [];
chartIt();



async function chartIt(){
	await getData();
	const ctx = document.getElementById('chart').getContext('2d');
	const chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'line',

		// The data for our dataset
		data: {
			labels: xlabels,
			datasets: [{
				label: 'Combined Land-Surface Air and Sea-Surface Water Temperature Anomalies (Land-Ocean Temperature Index, LOTI)',
				backgroundColor: 'rgb(3, 102, 49)',
				borderColor: 'rgb(3, 102, 49)',
				fill : false,
				
				data: ytemps
			}]
		},

		// Configuration options go here
		options: {}
	});
}

async function getData() {
	const response = await fetch('data.csv');
	const data = await response.text();
	

	const table = data.split('\n').slice(1);
	table.forEach(row => {
		const columns = row.split(',');
		const year = columns[0];
		xlabels.push(year);
		const temp = columns[1];
		ytemps.push(parseFloat(temp)+ 14);
		
	});
}

