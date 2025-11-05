// let videoId = localStorage.getItem("videoId");
//     if (videoId) {
//       document.getElementById("videoId").src = `https://www.youtube.com/embed/${videoId}`;
//     } else {
//       document.body.innerHTML = "<h2>No video selected</h2>";
//     }

  // let gain = document.getElementById("gain")

// 8888

    let video_id = localStorage.getItem("vid")
  // console.log(video_id);
  let video =document.createElement("iframe")
     video.src=`https://www.youtube.com/embed/${video_id}`;

     
  let gain = document.getElementById("gain").append(video)
    



 
