activeLink = document.currentScript.getAttribute('active')

//generating the header.
header = document.createElement("header");
heading = document.createElement('h1');
ulElement = document.createElement('ul');
heading.innerHTML = "Project Gallary";
header.appendChild(heading);

aElement = document.createElement('a');
aElement.href = "index.html"
liElement = document.createElement('li')
liElement.appendChild(document.createTextNode("Home"));
if(activeLink=='Home')
    liElement.classList.add("active");
aElement.appendChild(liElement);
ulElement.appendChild(aElement);

for(let i=1;i<=4;i++){
    aElement = document.createElement('a');
    aElement.href = "ex"+i+".html";
    liElement = document.createElement('li')
    liElement.appendChild(document.createTextNode("Exercise - "+i ));
    if(activeLink==i)
        liElement.classList.add("active");
    aElement.appendChild(liElement);
    ulElement.appendChild(aElement);
}

header.appendChild(ulElement);
document.body.prepend(header);

//adding font to the documbet
head = document.head;

link1 = document.createElement('link');
link1.rel = "preconnect";
link1.href = "https://fonts.googleapis.com";
head.appendChild(link1);

link2 = document.createElement('link');
link2.rel = "preconnect";
link2.href = "https://fonts.gstatic.com";
link2.crossOrigin = true;
head.appendChild(link2);

link3 = document.createElement('link');
link3.rel = 'stylesheet';
link3.href = "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500&family=Poppins:wght@100;200&family=Signika+Negative&display=swap";
head.appendChild(link3);


link4 = document.createElement('link');
link4.rel = 'stylesheet';
link4.href = "./css/common.css"
head.appendChild(link4);
