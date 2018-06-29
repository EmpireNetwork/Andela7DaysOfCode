// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWeight');

document.querySelector('#sizePicker').addEventListener('submit', makeGrid);

function makeGrid(e) {
    e.preventDefault();
    let table = document.querySelector('#pixelCanvas');
    table.innerHTML = '';
    for(let h = 0; h < height.value; h++){
        let tr = document.createElement('tr');
        for(let w = 0; w < width.value; w++){
            let td = document.createElement('td');
            td.innerHTML = '&nbsp;'
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    // Your code goes here!
    document.querySelectorAll('td').forEach(td => {
        td.addEventListener('click', function(){
            let picker = document.querySelector('#colorPicker');
            this.style.background = picker.value;
        })
    })
}
