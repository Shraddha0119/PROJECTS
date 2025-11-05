let api ="https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCyv90Sb2Dbtnv_czuidnNhsD6EIS7mjRo&maxResults=30";
let container = document.getElementById("container")
let input = document.querySelector("input")
let main =document.getElementById("main")


// let videoId=JSON.parse(localStorage.getItem("videoId"))





const getData = async()=>{
    let s = input.value
    let res = await fetch(`${api}&q=${s}`)
    let data = await res.json();
    let item = data.items
    console.log(item);
    display(item);
}


// getData()




const display= (data)=>{
    container.innerHTML=""

    // .filter(item => item.id.videoId)
        data.map(({id:{videoId},snippet:{title}})=>{

        // console.log(videoId,snippet);
      

     let name = document.createElement("h2")
     name.innerText = title
     
   
  let video =document.createElement("iframe")
     video.src=`https://www.youtube.com/embed/${videoId}`;

    let div = document.createElement("div")
    div. addEventListener("click",()=>{
        localStorage.setItem("vid",videoId)
       
         window.location.href = "../html/private.html";
    })
  



  div.append(video,name)
  container.append(div)
        
    })
       

}

// function seppage(){
    

//     // console.log("hello");
//     window.location.href = "./private.html";
    
// }