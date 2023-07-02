

let AKey = "EDv5gQRXcN848B3CyG8GLLkstq8SdL6cJPE8cq2BUfI"

let formEl = document.querySelector("form")
let searchInput = document.querySelector("#Search__input")
let searchResult = document.querySelector(".results")
let showMoreBtn = document.querySelector(".swow-more-btn")

 
let pageNumber = 1

let searchImgfunc = async ()=>{
    let inputValue = `${searchInput.value}`
    let url = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${inputValue}&client_id=${AKey}`

    let res = await (await fetch(url)).json()
    let mainRes = res.results

    if (pageNumber === 1){
        searchResult.innerHTML = ""
    }
    mainRes.forEach((result)=>{
        let innerWrapper = document.createElement("div")
        innerWrapper.classList.add("search-result")
        let wrapperImg = document.createElement("img")
        wrapperImg.src = result.urls.small
        wrapperImg.alt = result.alt_description
        let wrapperImgLink  = document.createElement("a")
        wrapperImgLink.href = result.links.html 
        wrapperImgLink.target = "_blank"
        wrapperImgLink.textContent = result.alt_description
        
        // добавление элементов в search-result
        innerWrapper.appendChild(wrapperImg)
        innerWrapper.appendChild(wrapperImgLink)
        searchResult.appendChild(innerWrapper)
    })
    pageNumber++
    if(pageNumber > 1) {
        showMoreBtn.style.display = "block"
    }
}
formEl.addEventListener("submit" , (event)=>{
    event.preventDefault()
    pageNumber = 1
    searchResult.innerHTML = ""
    searchImgfunc() 

})
showMoreBtn.addEventListener("click" , () =>{
    searchImgfunc()     
})


