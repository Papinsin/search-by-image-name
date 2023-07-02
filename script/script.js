let key = "EDv5gQRXcN848B3CyG8GLLkstq8SdL6cJPE8cq2BUfI"

let formEl = document.querySelector('form')
let searchInpur = document.querySelector("#Search__input")
let searchResults = document.querySelector(".results")
let showMoreBtn = document.querySelector(".swow-more-btn")
console.log(showMoreBtn)

let  pageNumber = 1

let searchImgfunc = async () =>{
    let inputValue = `${searchInpur.value}`
    let url = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${inputValue}&client_id=${key}`

    let data = await(await fetch(url)).json()
    let dataResult = data.results

    if(pageNumber === 1){
        searchResults.innerHTML = ""

    }
    dataResult.forEach(res => {
        let wraperInner = document.createElement("div")
        wraperInner.classList.add("search-result")

        let wrapperImg = document.createElement("img")
        wrapperImg.src = res.urls.small
        wrapperImg.alt = res.alt_description

        let wrapperImgLink  = document.createElement("a")
        wrapperImgLink.href = res.links.html 
        wrapperImgLink.target = "_blank"
        wrapperImgLink.textContent = res.alt_description
        
        wraperInner.appendChild(wrapperImg)
        wraperInner.appendChild(wrapperImgLink)
        searchResults.appendChild(wraperInner)
    })
    pageNumber++
    
    if(pageNumber > 1){
        showMoreBtn.style.display = "block" 
    }
}
showMoreBtn.addEventListener("click" , () =>{
    searchImgfunc()     
})
formEl.addEventListener("submit", (event)=>{
    event.preventDefault()
    pageNumber = 1
    searchResults.innerHTML = ""
    searchImgfunc()
})



