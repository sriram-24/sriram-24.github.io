async function searchmovies(){
    let search=document.getElementById('search').value;
    let result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=36c0f238fd748397377d81265244492c&query=${search}`)
    .then(res=>res.json())
    .catch((err)=>console.log(err));
    let output=``;
    result.results.forEach((movie,index)=>{
        output+=`
            <div class='card col-5' style='left:25%;'>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" height='300' width='100%' />
            <div class='card-title text-center' style='font-size:40px'>${movie.original_title}</div>
            <div class='card-body'>
                <p class='card-text'>${movie.overview}</p>
                <p class='card-text'>${movie.vote_average}</p>
            </div>
            </div>
        `;
        document.getElementById("sr").innerHTML=output;
    })
}