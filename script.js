let btn = document.querySelectorAll('button');
let item = document.querySelectorAll('.item')


btn.forEach((e) => {
	e.addEventListener('click', choiceItem)
})

function choiceItem () {
	console.log(this.dataset.value)
	filterAttribute = this.dataset.value;
	item.forEach(e=>{
		e.classList.remove('hide')
		if(e.dataset.value != filterAttribute && this.dataset.value != 'all') {
			e.classList.add('hide')
		}
	})
}