let searchbox=document.getElementById("search-box")
let searchresult=document.getElementById("search-result")
let showmorebtn=document.getElementById("show-more-btn")
let searchform=document.getElementById("search-form")

let access_key="04M6x6LkHWeejH5XqLO_bzpaLXnklrVjdeUjvvsY0aI";
let keyWord="";
let page=1;

async function searchImages() {
    keyWord=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${access_key}&per_page=12`
    const response=await fetch(url);
    const data=await response.json();

    if(page===1){
        searchresult.innerHTML=" ";
    }
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchresult.appendChild(imageLink)
    })  
    showmorebtn.style.display="block"  
}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showmorebtn.addEventListener("click",()=>{
    page++;
    searchImages()
})