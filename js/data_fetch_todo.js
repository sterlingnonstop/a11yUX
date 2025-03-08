

$(document).ready(function() {
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const top10Items = data.slice(0, 10);
            const listTodo = document.getElementById('ListTodo');
            
            top10Items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'd-flex align-items-center p-2';

                const idElement = document.createElement('id');
                idElement.className = 'col-5 col-sm-3';
                idElement.textContent = item.id;

                const titleElement = document.createElement('a');
                titleElement.href = '#';
                titleElement.className = 'col-7 col-sm-9';
                titleElement.innerHTML = sanitizeHTML(item.title);

                listItem.appendChild(idElement);
                listItem.appendChild(titleElement);
                listTodo.appendChild(listItem);
            });
            document.getElementById('spinner').classList.add('d-none');
            listTodo.classList.remove('d-none');
        })
        .catch(error => console.error('Error:', error));
    }, 500); 
});
