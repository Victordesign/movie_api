const key = "80c727e143d2f5eb1c54ded27fdc3567"

const resource = 'https://image.tmdb.org/t/p/w200/hPkqY2EMqWUnFEoedukilIUieVG.jpg'
const image = document.querySelector('img')
const movieTitle = document.querySelector('.movie-title')
const imageLists = document.querySelector('.movie-list_items')
const boxImage = document.querySelector('.box-image');

const main = "https://image.tmdb.org/t/p/w200";



class FetchData{
     constructor(){
         this.key = "80c727e143d2f5eb1c54ded27fdc3567"
     }
     // get the movie list
     async getAPI(callback){
            this.response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`);
            console.log(this.response.status); // 200
            this.data = await this.response.json();
            console.log(this.data.results[0].id)
            
            return this.data.results;
     }
        getPoster(data){
        data.map((el)=>{
             
             let aLink = document.createElement('a');
             aLink.setAttribute('href','https://www.youtube.com/watch?v=');
             aLink.target = `_blank`
             const img = document.createElement('img');
             this.imageId = el.id
             img.setAttribute('id',`${this.imageId}`)
             const imageList = el.poster_path;
             let html = `${img.src}${main}${imageList}`;
             img.src = html;
             aLink.appendChild(img)
             boxImage.appendChild(aLink)
             // two parameters
             text(aLink,this.imageId)
           })
            
     }
 
      async getTriller(number){
          const response =  await fetch(`http://api.themoviedb.org/3/movie/${number}/videos?api_key=${this.key}`);
          const data =       await response.json();
          const playTriller = await data.results[0].key;
          console.log(playTriller)       
          return playTriller;
   }
}
 
const testing = new FetchData();

testing.getAPI()
.then(data => testing.getPoster(data))
.catch(err => console.log(err))
 
// link,numberImage

// expression function
const text = testFunction = (async(link,numberImage)=>{
   const response = await fetch(`http://api.themoviedb.org/3/movie/${numberImage}/videos?api_key=80c727e143d2f5eb1c54ded27fdc3567`)
   let data     = await response.json();
   link.closest('a').href=`https://www.youtube.com/watch?v=${data.results[0].key}`
//    console.log(link.closest('a').href=`https://www.youtube.com/watch?v=${data.results[0].key}`);
//    console.log(data.results[0].key)
})

// boxImage.addEventListener('click',(e)=>{
//     // const storeNum = e.target.getAttribute('id')
//     console.log(e.target.id)
//     testing.getTriller(e.target.id)
//     .then(data => console.log(e.target.closest('a').setAttribute('href',`https://www.youtube.com/watch?v=${data}`)));
    
//     // testing.getTriller(storeNum)
//     // .then(data => console.log(data))
//     // .catch(err => err)
// })

// boxImage.querySelectorAll('a').forEach((el)=>{
//     console.log(el.setAttribute());
// })

//      async randerList(){
//          const query = await this.getAPI();
//          const arrData = await query.results;
//          arrData.forEach(element => {
//             let aLink = document.createElement('a');
//             aLink.setAttribute('href','https://www.youtube.com/watch?v=');
//             aLink.target = `_blank`
//              const img = document.createElement('img');
//              const imageList = element.poster_path
//              const imageId = element.id
//              img.setAttribute('id',`${imageId}`)
//              let html = `${img.src}${main}${imageList}`;
//              img.src = html;
//              aLink.appendChild(img)
//              boxImage.appendChild(aLink)
//              return element.id;
//          });        
//    }