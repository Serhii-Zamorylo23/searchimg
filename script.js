const imgKey="41033435-ac800317f7cb62c730c675650"
let q=""
let page=1
const url="https://pixabay.com/api/"
let per_page=20
const ImgContainer=document.querySelector(".ImgCont")
const Search={
    input: document.querySelector(".input"),
    button: document.querySelector(".btn")
}
const favoritecont=document.querySelector(".FavoritreContainer")
const selector=document.querySelector("#select")
selector.addEventListener("change",()=>{
    per_page=selector.value
})
let arrIMG=[]
const RenderFavImages=()=>{
    favoritecont.innerHTML=`
    `
    arrIMG.forEach(Favitem => {
        favoritecont.innerHTML+=`
            <div class="favoriteDiv">
                <img class="FavImageItem" src= "${Favitem}"alt= "${Favitem.tags}">
            </div>
    `
    });
}
const pages={
    input:document.querySelector(".PageInput"),
    btn:document.querySelector(".PageBtn")
}
const RenderImgs=(ImgArr)=>{
    ImgContainer.innerHTML=`
    `
    ImgArr.forEach(item => {
        ImgContainer.innerHTML+=`
            <div class="imageDiv">
                <img class="ImageItem" src= "${item.largeImageURL}"alt= "${item.tags}">
                <button class="favbutton" imgUrl="${item.largeImageURL}">Add to favorite</button>
            </div>
    `
    });
    const FavBat=document.querySelectorAll(".favbutton")
    FavBat.forEach(arr=>{
        arr.addEventListener("click",()=>{
            const URL=arr.getAttribute("imgUrl")
            arrIMG.push(URL)
            console.log(arrIMG)
            RenderFavImages()

        })    
    })  
}
const DivFavorite=document.querySelector(".favoriteDiv")
const createGet=()=>{
    axios.get(`${url}?key=${imgKey}&q=${q}&page=${page}&per_page=${per_page}`)
        .then(res=>{
        RenderImgs(res.data.hits)
    })
}
Search.input.addEventListener("input",(el)=>{
    q=el.target.value
}
)
Search.button.addEventListener("click",()=>{
    if (q.length!==0){
        createGet()
    }
})
pages.btn.addEventListener("click",()=>{
    page=pages.input.value
    axios.get(`${url}?key=${imgKey}&q=${q}&page=${page}&per_page=${per_page}`)
        .then(resultat=>{
            RenderImgs(resultat.data.hits)
    })
})