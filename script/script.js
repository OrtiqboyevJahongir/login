"use strict"
    movies.splice(50)  
            //-----------DATA ----------
       const allMovies = movies.map((el)=>{
            return{
        "title": el.title,
        "year": el.year,
         "category":el.categories,
         "id":el.imdbId,
         "rating": el.imdbRating,
         "runtime": `${Math.trunc(el.runtime/60)},${el.runtime%60} m`,
         "lang": el.language,
         "youtube": `https://www.youtube.com/embed/${el.youtubeId}`,
         "summary":el.summary,
         "smallimg":el.smallThumbnail,
         "bigimg":el.bigThumbnail
            }
       })

        // --------------DATA END -----------   

         //---------------Movie Render--------

            function AllMoviesRender(){
                allMovies.forEach((el) =>{
                    const card = createElament("div" , "card shadow" , `
                    <img src="${el.smallimg}" alt="${el.title}" class="card-top-img">
                    <div class="card-body">
                        <h3 class="card-tille">${el.title} </h3>
                        <ul class="card-list list-unstyled">
                            <li class="card-list-item"><strong>Year: </strong>${el.year}</li>
                            <li class="card-list-item"><strong>Language: </strong>${el.category}</li>
                            <li class="card-list-item"><strong>reting: </strong>${el.rating}</li>
                            <li class="card-list-item"><strong>category: </strong>${el.category}</li>
                        </ul>
                        <div class="social d-flex">
                            <a href="#" class="btn btn-danger mx-2">Youtube</a>
                            <button class="btn btn-primary">rede more</button>
                            <button class="btn btn-warning mx-2">save</button>
                        </div>
                    </div> `)
                   
                    $(".wrapper").appendChild(card);
                })
               
            }
            AllMoviesRender()


              //---------------Movie Render end--------

              //---------------Movie filter category-------


          function categoryMovie(){
                const renderCategory =[]
                allMovies.forEach((el) =>{
                    el.category.forEach((e) =>{
                        if(!renderCategory.includes(e)){
                            renderCategory.push(e)
                        }
                    })
                })
                renderCategory.sort();
                renderCategory.forEach((e) =>{
                    const option = createElament("option" , "" , e)  
                    $("#category").appendChild(option)
                })       
          }
          categoryMovie()


             //---------------Movie filter category END-------

             //---------------  SEORCH ---------------------

             $(".btn").addEventListener("click",(e) =>{
                   let inputValue =  $("#seorch").value.trim()
             }) 