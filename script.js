var container = document.createElement('div')
container.className = 'container';
var row = document.createElement('div')
row.className = 'row'
container.append(row);
var res = fetch('https://restcountries.com/v3.1/all')
    .then((data) => data.json())
    .then((data1) => foo(data1));
function foo(data1) {
    console.log(data1);
    for (var i = 0; i <= data1.length; i++) {
        row.innerHTML += `<div class='col-md-4'>
            <div class="card border-primary mb-3" style="max-width: 18rem;">
            <img class="card-img-top" src="${data1[i].flags.svg}">
            <div class="card text-center">
            <div class="card-header">${data1[i].name.common}</div>
            </div>     
        <div class="card-body ">
            <ul>
            <li>Capital:${data1[i].capital}</li>
            <li>Region:${data1[i].region}</li>
            </ul>
        </div>
      </div>
        </div>`
        document.body.append(container);
    }
}
