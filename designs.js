// Select color input
const picker = document.querySelector('#colorPicker');
// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWeight');
const table = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', makeGrid);

function makeGrid(e) {
    e.preventDefault();
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
            if(this.classList.contains('colored')){
                this.style.background = '#fff'
                this.classList.remove('colored')
            }else{
                this.classList.add('colored');
                this.style.background = picker.value;
            }
        })
    })
}
