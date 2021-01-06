const img = [
	{
		path: 'https://pbs.twimg.com/media/C8GHEJwXUAEEYiG.jpg',
		name: '',
		dataValue: 'cake'
	},
	{
		path: 'https://img2.goodfon.ru/original/5250x3500/a/55/cupcake-dessert-sweet-cream-2239.jpg',
		name: '',
		dataValue: 'cupcakes'
	},
	{
		path: 'https://s6.hostingkartinok.com/uploads/images/2014/05/12474bf8c0876f87fe57edec8e914a1a.jpg',
		name: '',
		dataValue: 'sweet'
	},
	{
		path: 'https://s1.1zoom.ru/big3/609/Donuts_Closeup_553930_6016x4016.jpg',
		name: '',
		dataValue: 'doughnuts'
	},
	{
		path: 'https://www.yolandascakes.net/wp-content/uploads/2018/10/cupcakes-3-colores.jpg',
		name: '',
		dataValue: 'cupcakes'
	},
	{
		path: 'http://www.picshunger.com/wp-content/uploads/2014/05/1120.jpg',
		name: '',
		dataValue: 'cake'
	},

	{
		path: 'https://www.experiencekissimmee.com/sites/default/files/donut-miss.jpeg',
		name: '',
		dataValue: 'doughnuts'
	},

	{
		path: 'http://cdn.shopify.com/s/files/1/0116/2008/9956/collections/sweets_1200x1200.jpg?v=1563018091',
		name: '',
		dataValue: 'sweet'
	},
	{
		path: 'https://data.whicdn.com/images/28890738/original.jpg',
		name: '',
		dataValue: 'cupcakes'
	},
	{
		path: 'https://wallbox.ru/wallpapers/main2/201714/149141537658e53150a4d6f7.61218937.jpg',
		name: '',
		dataValue: 'cake'
	},


]

const wrapper = document.querySelector('.wrapper')

for(let i = 0; i < img.length; i++) {
	wrapper.innerHTML += `<div class='img-wrapper'><div class=" item-img item" data-value='${img[i].dataValue}'><img class='item__img' src="${img[i].path}" alt="" /></div></div>`
}



let btn = document.querySelectorAll('button');
let item = document.querySelectorAll('.item-img');
let wrapItem = document.querySelectorAll('.img-wrapper')
let popupWrapper = document.querySelector('.popup')
let popup = document.querySelector('.popup__item')
let itemImg = document.querySelectorAll('.item__img')

btn.forEach((e) => {
	e.addEventListener('click', choiceItem)
})

function choiceItem () {
	filterAttribute = this.dataset.value;
	item.forEach(e=>{
		e.classList.remove('hide')
		if(e.dataset.value != filterAttribute && this.dataset.value != 'all') {
			e.classList.add('hide')
		}
	})
}

// itemImg.forEach((e, i)=>{
// 	e.addEventListener ('click', openPopup)
// })

// function openPopup () {
// 	console.log(i)
// 	let path = this.getAttribute('src')
// 	popup.classList.remove('hide')
// 	popup.style.background = `url('${path}') center/cover no-repeat`
// 	popupWrapper.classList.remove('hide')

	
// }

popup.onclick = function () {
	event.stopPropagation()
}

let count = 0;

itemImg.forEach((e, i) => {
	e.addEventListener('click', function () {
	popup.classList.remove('hide')
	popup.style.background = `url('${img[i].path}') center/cover no-repeat`
	popupWrapper.classList.remove('hide')
	
	count = i;

	})
})

popupWrapper.onclick = close;

function close () {
	popup.classList.add('hide')
	popupWrapper.classList.add('hide')
}

let btnL = document.querySelector('.btn-left');
let btnR = document.querySelector('.btn-right');


btnR.onclick = function () {
	changeImg(1)
}

btnL.onclick = function () {
	changeImg(0)
}

function changeImg(i) {
	event.stopPropagation()
	if(i) {
		if(count >= img.length - 1) {
			count = 0
		} else {
			count++
		}
	} else {
		if(count <= 0){
			count = img.length - 1
		} else {
			count--	
		}
	
	}
	popup.style.background = `url('${img[count].path}') center/cover no-repeat`
}