

var arrTranzactions = [
	{	id: '1',
		status:'Заявка подтверждена',
		statusMes: '',
		debet: '700', 
		credit: '800',
		details: 'A-bank',
		time: '25.03.19 17:05:33'
	},
	{
		id: '2',
		status:'Заявка отклонена',
		statusMes: 'Средства не поступили  на указанные реквизиты, требуется предоставить доказательства оплаті',
	 	debet: '2700',
		credit: '3800',
		details: 'UkrEximBank',
		time: '25.03.19 17:05:33'
	},
	{
		id: '5',
		status:'В обработке',
		statusMes: '',
	 	debet: '2700',
		credit: '3800',
		details: 'UkrEximBank',
		time: '25.03.19 17:05:33'
	},
	{	id: '3',
		status:'Заявка подтверждена',
		statusMes: '',
		debet: '700', 
		credit: '800',
		details: 'A-bank',
		time: '25.03.19 17:05:33'
	},
	{	id: '4',
		status:'Заявка подтверждена',
		statusMes: '',
		debet: '700', 
		credit: '800',
		details: 'A-bank',
		time: '25.03.19 17:05:33'
	},
	{	id: '6',
		status:'Заявка подтверждена',
		statusMes: '',
		debet: '700', 
		credit: '800',
		details: 'A-bank',
		time: '25.03.19 17:05:33'
	},
	{	id: '7',
		status:'Заявка подтверждена',
		statusMes: '',
		debet: '700', 
		credit: '800',
		details: 'A-bank',
		time: '25.03.19 17:05:33'
	}
	];
	function statusClass(arrTranzactions, last='') {
		function setStatus(item) {
			if (item.status == 'Заявка подтверждена') item.statusClass = 'confirm';
			if (item.status == 'Заявка отклонена') item.statusClass = 'reject';
			if (item.status == 'В обработке') item.statusClass = 'processing';
		}
		if (!last) arrTranzactions.forEach((item) => { setStatus(item);})
			else setStatus(arrTranzactions[arrTranzactions.length-1]);
	}
	statusClass(arrTranzactions);

Vue.component('ttr', {
	props: ['tranzaction'],
	template: `
		<tr>
                <td class='id'>{{tranzaction.id}}</td>
                <td class='status'><p v-bind:class="tranzaction.statusClass">{{tranzaction.status}}</p>{{tranzaction.statusMes}}</td>
                <td class='debet'><b>{{tranzaction.debet}}</b></td>
                <td class='credit'>{{tranzaction.credit}}</td>
                <td class='details'>{{tranzaction.details}}</td>
                <td class='dateOper'>{{tranzaction.time}}</td>
   		</tr>
	`
})

var app = new Vue ({
	el:"#container",
	data: {
		tranzactions : arrTranzactions
	},
	methods: {
	    	replenish: function () {
	      		this.tranzactions.push(
      				{	id: '14',
						status:'Заявка подтверждена',
						statusMes: '',
						debet: '7', 
						credit: '8',
						details: 'A-bank',
						time: '25.03.19 17:05:33'
					})
	      		statusClass(arrTranzactions, true)
	    	}
	}
})


