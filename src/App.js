import React from "react";
import  {useState,useEffect} from "react";
import axios from "axios";


function App  ()  {
  const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);
  useEffect(()=>{
   
    axios.get('https://picsum.photos/v2/list')
  .then(function (response) {
 

    updatePhotoGalleryArray(response.data);
  })
  .catch(function (error) {
   
    console.log(error);
  })

 },[])
  console.log("photo array", photoGalleryArray);

  return( 
  <div className="App">
    <nav class="navbar navbar-dark bg-dark">
    <div className="w-100 text-light" align="center">GALLERY</div>
    </nav>
   
    <div className="row">
    {
      photoGalleryArray.map((photoGalleryArrayItem,index)=>{
        
        return(
          
            <div key= {index} className="col-sm-4 col-md-4 col-4 p-1">
            <img src={photoGalleryArrayItem.download_url}
             alt={`image_${photoGalleryArrayItem.id}`}
             height="400"
             width="500"
            
             />
          </div>
        )
      })
    }
  </div>
  </div>
  );
};

export default App;
