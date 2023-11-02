$(document).ready(function() {
        setTimeout(() => {
                fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(data => {
                    const top10Items = data.slice(0, 10);
                    const listTodo = document.getElementById('ListTodo');
                    
                    top10Items.forEach(item => {
                        listTodo.innerHTML += `<li class="d-flex align-items-center p-2"><id class="col-5 col-sm-3">${item.id}</id><a href="#" class="col-7 col-sm-9">${item.title}</a></li>`;
                    });
                    document.getElementById('spinner').classList.add('d-none');
                    listTodo.classList.remove('d-none');
                })
                .catch(error => console.error('Error:', error));
        }, 500); 
});
