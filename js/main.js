import { images } from './image.js';

(function(){
	const content = document.querySelector(".content");
	images.forEach(e => {
		content.innerHTML += 
		`
			<div class="card col-sm-4 m-5">
				<div class="card-body">
					<img src="${e.src}" class="card-img-top"/>
					<div class="card-title mt-2 text-center font-weight-bold">
						<p>${e.name}</p>
					</div>
					<div class="card-text">
						<p>${e.description}</p>
					</div>
				</div>
			<div/>
		`;
	});

})();