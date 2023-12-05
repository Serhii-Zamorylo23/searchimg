const imgKey="41033435-ac800317f7cb62c730c675650"
let q=""
let page=1
const url="https://pixabay.com/api/"
let per_page=20
const ImgContainer=document.querySelector("#ImgCont")
const Search={
    input: document.querySelector(".input"),
    button: document.querySelector(".btn")
}
const RenderImgs=(ImgArr)=>{
    ImgContainer.innerHTML=`
    `
    ImgArr.forEach(item => {
        ImgContainer.innerHTML=`
        <img class="ImageItem" src:${item.largeImageURL} alt:${item.tags}>
    `
    });
}
const createGet=()=>{
    axios.get(`${url}?key=${imgKey}&q=${q}&page=${page}&per_page=${per_page}`
    .then(res=>{
        console.log(res.data.hits)
    })
    )
}
Search.input.addEventListener("imput",(el)=>{
    q=el.target.value
}
)
Search.button.addEventListener("click",()=>{
    if (q.length!==0){
        createGet()
    }
})
