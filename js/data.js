const contentBox = document.querySelector(".table-content")



const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

const menesiai = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", 'Gruodis']

// for(let i = 0; i< account.length;i++){

//     let objektass  = account.I


// for (var prop in objektass) {
//     if(objektass[prop] == "month"){
//         objektass[prop]  = menesiai[i]

//         console.log(prop)
//     }
//     break;
// }
// }

let islaidos 

let HTML = ""

function pusinsRows ( menesioNumeris, income, islaidos){
   
    let balansas = 0
    if(income != undefined && islaidos != undefined ){
        balansas = income - islaidos
        console.log(balansas)
        console.log(income, islaidos)
    }
    if(balansas === 0){
        balansas = "-"
    }

        let HTML = 
        `   <div class="table-row">
        <div class="cell">${menesioNumeris}</div>
        <div class="cell">${menesiai[menesioNumeris-1]}</div>
        <div class="cell">${income} Eur</div>
        <div class="cell">${balansas}</div>
        <div class="cell">${income} Eur</div>
        </div>`

    contentBox.insertAdjacentHTML("beforeend", HTML )
}

pusinsRows ( 1, 200, 50)
pusinsRows ( 2, 50, undefined)
pusinsRows ( 3, 450, 200)
pusinsRows ( 4, 10, 300)
pusinsRows ( 5, 150, 50)
pusinsRows ( 6, 50, undefined)
pusinsRows ( 7, 50, undefined)
pusinsRows ( 8, 450, 120)
pusinsRows ( 9, 700, 400)
pusinsRows ( 10, 150, undefined)
pusinsRows ( 11, 150,30)
pusinsRows ( 12, 200, undefined)


