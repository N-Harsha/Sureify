LINK="https://api.pexels.com/v1/search?query=nature&per_page=10";

const row = document.getElementById("row");

const fetchImages = async ()=>{
    const response = await fetch(LINK,{headers:{'Authorization' : 'DPj3k1ewXxWSrnqsg4XOWSOPctMkShYOsB0GKmbdhDWpT0E074hWaLwE'}});
    const images = await response.json();
    LINK = images.next_page;
    col = document.createElement('div');
    col.classList.add("column");
    imgStr = ''
    for(image of images.photos){
        imgStr += '<img src=\"'+image.src.large+'\">'
    }

    col.innerHTML = imgStr
    row.appendChild(col);
}

(async ()=> {
    for(let i=0;i<4;i++)
        await fetchImages();
})();

