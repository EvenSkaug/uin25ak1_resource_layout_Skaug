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

const htmlbtn = document.getElementById("html")
const cssbtn = document.getElementById("css")
const jsbtn = document.getElementById("js")
const reactbtn = document.getElementById("react")
const cmsbtn = document.getElementById("cms")

//HTML kategorien blir startup siden
print.innerHTML = HTMLtab

//Funksjon for å bytte mellom tabs
function activetabHtml() {
    print.innerHTML = HTMLtab

    htmlbtn.classList.add("whitebutton")
    htmlbtn.classList.remove("bluebutton")
    
    cssbtn.classList.add("bluebutton")
    cssbtn.classList.remove("whitebutton")

    jsbtn.classList.add("bluebutton")
    jsbtn.classList.remove("whitebutton")

    reactbtn.classList.add("bluebutton")
    reactbtn.classList.remove("whitebutton")

    cmsbtn.classList.add("bluebutton")
    cmsbtn.classList.remove("whitebutton")
}

function activetabCss() {
    print.innerHTML = CSStab
    
    cssbtn.classList.add("whitebutton")
    cssbtn.classList.remove("bluebutton")
    
    htmlbtn.classList.add("bluebutton")
    htmlbtn.classList.remove("whitebutton")

    jsbtn.classList.add("bluebutton")
    jsbtn.classList.remove("whitebutton")

    reactbtn.classList.add("bluebutton")
    reactbtn.classList.remove("whitebutton")

    cmsbtn.classList.add("bluebutton")
    cmsbtn.classList.remove("whitebutton")
}

function activetabJs() {
    print.innerHTML = JStab

    jsbtn.classList.add("whitebutton")
    jsbtn.classList.remove("bluebutton")
    
    cssbtn.classList.add("bluebutton")
    cssbtn.classList.remove("whitebutton")

    htmlbtn.classList.add("bluebutton")
    htmlbtn.classList.remove("whitebutton")

    reactbtn.classList.add("bluebutton")
    reactbtn.classList.remove("whitebutton")

    cmsbtn.classList.add("bluebutton")
    cmsbtn.classList.remove("whitebutton")
    
}

function activetabReact() {
    print.innerHTML = Reacttab

    reactbtn.classList.add("whitebutton")
    reactbtn.classList.remove("bluebutton")
    
    cssbtn.classList.add("bluebutton")
    cssbtn.classList.remove("whitebutton")

    jsbtn.classList.add("bluebutton")
    jsbtn.classList.remove("whitebutton")

    htmlbtn.classList.add("bluebutton")
    htmlbtn.classList.remove("whitebutton")

    cmsbtn.classList.add("bluebutton")
    cmsbtn.classList.remove("whitebutton")
}

function activetabCms() {
    print.innerHTML = CMStab

    cmsbtn.classList.add("whitebutton")
    cmsbtn.classList.remove("bluebutton")
    
    cssbtn.classList.add("bluebutton")
    cssbtn.classList.remove("whitebutton")

    jsbtn.classList.add("bluebutton")
    jsbtn.classList.remove("whitebutton")

    reactbtn.classList.add("bluebutton")
    reactbtn.classList.remove("whitebutton")

    htmlbtn.classList.add("bluebutton")
    htmlbtn.classList.remove("whitebutton")
}






  