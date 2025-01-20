//Skrive ut de ulike tab knappene
resources.map((resource, index) => {
    document.getElementById("navbar").innerHTML += `<li><button onclick="activetab()" class="bluebutton">${resource.category}</button></li>`
})

//Variabler for å lagre informasjon
let HTMLtab = ""
let CSStab = ""
let JStab = ""
let Reacttab = ""
let CMStab = ""

//Mappe arrayet en gang per kategori for å lagre informasjonen
//HTML tab
resources.filter(rescourcedata => rescourcedata.category === "HTML").map(rescourcedata => HTMLtab += 
    `<h1>${rescourcedata.category}</h1>
    <p>${rescourcedata.text}</p>
    <ul>
        ${rescourcedata.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}
    </ul>`                                           
)

//CSS tab
resources.filter(rescourcedata => rescourcedata.category === "CSS").map(rescourcedata => CSStab += 
    `<h1>${rescourcedata.category}</h1>
    <p>${rescourcedata.text}</p>
    <ul>
    ${rescourcedata.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}
    </ul>`                                              
)

//JS tab
resources.filter(rescourcedata => rescourcedata.category === "JavaScript").map(rescourcedata => JStab += 
    `<h1>${rescourcedata.category}</h1>
    <p>${rescourcedata.text}</p>
    <ul>
    ${rescourcedata.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}
    </ul>`                                              
)

//React tab
resources.filter(rescourcedata => rescourcedata.category === "React").map(rescourcedata => Reacttab += 
    `<h1>${rescourcedata.category}</h1>
    <p>${rescourcedata.text}</p>
    <ul>
    ${rescourcedata.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}
    </ul>`                                              
)

//CMS tab
resources.filter(rescourcedata => rescourcedata.category === "Sanity and headless CMS").map(rescourcedata => CMStab += 
    `<h1>${rescourcedata.category}</h1>
    <p>${rescourcedata.text}</p>
    <ul>
    ${rescourcedata.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}
    </ul>`                                                
)

//Variabelen print for å skrive ut ønsket info til html seksjonen "content"
const print = document.getElementById("content")

//HTML kategorien blir startup siden
print.innerHTML = HTMLtab

//Funksjon for å bytte mellom tabs
activetab()







  