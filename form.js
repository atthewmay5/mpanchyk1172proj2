
var listItems = [];

var tasktitle;

document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#tasks').onsubmit = function(){
		
		let tasktitle = document.querySelector('#title').value;
		let taskpriority = document.querySelector('#priority').value;
		taskstatus = "na";
		if(document.getElementById('pending').checked){
			taskstatus = document.getElementById('pending').value;
		}else{
			taskstatus = document.getElementById('complete').value;
		}
		
		var task = {
			"title": tasktitle,
			"priority": taskpriority,
			"status": taskstatus
		}
		listItems.push(task);
		
		const li = document.createElement('li');
		
		let new_task = `
							<style>
							.remove{
								background-color: red;
								position: absolute;
								right: 0;
								top: 0;
								padding: 12px 16px 12px 16px;
								border: none;
							}
							</style>
							<span> ${tasktitle+", Priority: "+taskpriority} </span>
							<button class="remove"> X </button>
							
								
							`;
		
		
		li.innerHTML = new_task
		
		document.querySelector('#task').append(li);
		document.querySelector('#task').value = '';
		
		return false;
		
		
	}
		
	document.addEventListener('click', function(ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('finished');
		}
	}, false);
		
		
	document.addEventListener('click', function(event){
		element=event.target;
		if(element.className === 'remove'){
			element.parentElement.remove();
		}
	});

}

)
