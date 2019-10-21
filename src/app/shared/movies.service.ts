import { Injectable,NgZone} from '@angular/core';
import { Router } from "@angular/router";
// import { httpsClient } from '@angular/common/https';

// import movies_data from 'assets/mock-api/movies_data';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  getMovies(){
    return movies_data
  }
  getCategories(){
    return categories
  }
  toggleFavorite(id){
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let new_arr = [];

    if(favorites.includes(id)){
      favorites.map(value=>value !== id ? new_arr.push(value) : null)
    }
    else{
      favorites.push(id);
      new_arr = favorites
    }

    localStorage.setItem("favorites",JSON.stringify(new_arr));

  }

  getFavoriteCount(){
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.length
  }

  getFavoritesId(){
    return JSON.parse(localStorage.getItem("favorites")) || [];
  }

  isFavorite(input_id){
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    for(let id in favorites){
      if (String(favorites[id]) === String(input_id)){
        return true;
      }
    }
    return false;

  }
}


let categories = [
{'name': "Drama",
"image":"https://img.youtube.com/vi/vY4UAuqkIZw/hqdefault.jpg"},
{'name':"Horror",
"image":"https://img.youtube.com/vi/GMoKWRtTs3c/hqdefault.jpg"},
{'name':"Action",
"image":"https://img.youtube.com/vi/XaWYfA9ybKY/hqdefault.jpg"},
{'name':"Comedy",
"image":"https://img.youtube.com/vi/Hxd37cAHFWs/hqdefault.jpg"},
{'name':"Crime",
"image":"https://img.youtube.com/vi/Dj6DRJe8M68/hqdefault.jpg"},
{'name':"Thriller",
"image":"https://img.youtube.com/vi/s7RMz7xLSDM/hqdefault.jpg"},
{'name':"Sci-Fi",
"image":"https://img.youtube.com/vi/MQ4g2IOAab0/hqdefault.jpg"},
{'name':"History",
"image":"https://img.youtube.com/vi/cEmqWWrYBmc/hqdefault.jpg"},
{'name':"War",
"image": "https://img.youtube.com/vi/ZpqHrqF4MO4/hqdefault.jpg"},
{'name':"Biography",
"image":"https://img.youtube.com/vi/VkCeEYuMyOY/hqdefault.jpg"},
{'name':"Mystery",
"image":"https://img.youtube.com/vi/oCwFLU_SnFQ/hqdefault.jpg"},
{'name':"Romance",
"image":"https://img.youtube.com/vi/nWqr86FgoRM/hqdefault.jpg"},
{'name':"Adventure",
"image": "https://img.youtube.com/vi/hOkNqIcdnb0/hqdefault.jpg"},
{'name':"Fantasy",
"image":"https://img.youtube.com/vi/sDIDQ68ugTU/hqdefault.jpg"},
{'name':"Western",
"image":"https://img.youtube.com/vi/yo9E_sJHRnE/hqdefault.jpg"},
{'name':"Film-Noir",
"image":"https://img.youtube.com/vi/-zBrdZZTbGg/hqdefault.jpg"},
{'name':"Sport",
"image":"https://img.youtube.com/vi/N8wq9dzLXuo/hqdefault.jpg"},
{'name':"Animation",
"image":"https://img.youtube.com/vi/mQV5ymUVrhw/hqdefault.jpg"},
{'name':"Family",
"image": "https://img.youtube.com/vi/A5earLj81SU/hqdefault.jpg"},
{'name':"Short",
"image":"https://img.youtube.com/vi/8GXPixi6fq0/hqdefault.jpg"},
{'name':"Documentary",
"image":"https://img.youtube.com/vi/BVkmHo05sAw/hqdefault.jpg"},
{'name':"Music",
"image": "https://img.youtube.com/vi/rcLcxAwdjmo/hqdefault.jpg"},
{'name':"Musical",
"image":"https://img.youtube.com/vi/6hH8rxarVG8/hqdefault.jpg" }]


let movies_data = [
  {
    "id": 0,
    "title": "Uzumaki (2000) [360p] [Japanese] [English Subs] うずまき Spiral",
    "genre": [
      "Drama",
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/vY4UAuqkIZw",
    "thumbnail": "https://img.youtube.com/vi/vY4UAuqkIZw/hqdefault.jpg"
  },
  {
    "id": 1,
    "title": "Shoot 'Em Up (2007) [720p] Clive Owen, Monica Bellucci, Paul Giamatti",
    "genre": [
      "Action",
      "Comedy",
      "Crime",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/XaWYfA9ybKY",
    "thumbnail": "https://img.youtube.com/vi/XaWYfA9ybKY/hqdefault.jpg"
  },
  {
    "id": 2,
    "title": "Phantom from Space (1953) [720p]",
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/GMoKWRtTs3c",
    "thumbnail": "https://img.youtube.com/vi/GMoKWRtTs3c/hqdefault.jpg"
  },
  {
    "id": 3,
    "title": "Shadow World (1983) [240p]",
    "genre": [
      "Mystery",
      "Sci-fi"
    ],
    "link": "https://www.youtube.com/embed/MQ4g2IOAab0",
    "thumbnail": "https://img.youtube.com/vi/MQ4g2IOAab0/hqdefault.jpg"
  },
  {
    "id": 4,
    "title": "Tatara Samurai (2016) [720p]",
    "genre": [
      "Action",
      "Comedy",
      "Drama",
      "History",
      "War"
    ],
    "link": "https://www.youtube.com/embed/Hxd37cAHFWs",
    "thumbnail": "https://img.youtube.com/vi/Hxd37cAHFWs/hqdefault.jpg"
  },
  {
    "id": 5,
    "title": "Twilight Q Part 2: Mystery Article File 538 (1987) [360p]",
    "genre": [
      "Action",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/s7RMz7xLSDM",
    "thumbnail": "https://img.youtube.com/vi/s7RMz7xLSDM/hqdefault.jpg"
  },
  {
    "id": 6,
    "title": "Gods and Monsters (1998) [720p]",
    "genre": [
      "Biography",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/jKEWn5R_ZEc",
    "thumbnail": "https://img.youtube.com/vi/jKEWn5R_ZEc/hqdefault.jpg"
  },
  {
    "id": 7,
    "title": "Voodoo Man (1944) [360p] Bela Lugosi",
    "genre": [
      "Crime",
      "Drama",
      "Horror",
      "Mystery",
      "Romance",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/Dj6DRJe8M68",
    "thumbnail": "https://img.youtube.com/vi/Dj6DRJe8M68/hqdefault.jpg"
  },
  {
    "id": 8,
    "title": "Q: The Winged Serpent (1982) [1080p] aka \"Q\"",
    "genre": [
      "Crime",
      "Horror",
      "Mystery"
    ],
    "link": "https://www.youtube.com/embed/CHv9P02w03Q",
    "thumbnail": "https://img.youtube.com/vi/CHv9P02w03Q/hqdefault.jpg"
  },
  {
    "id": 9,
    "title": "Giants and Toys (1958) [360p] [Japanese] [English CC] dir:Yasuzo Masumura 巨人と玩具 Kyojin to gangu",
    "genre": [
      "Comedy",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/gZyDYPRkNB8",
    "thumbnail": "https://img.youtube.com/vi/gZyDYPRkNB8/hqdefault.jpg"
  },
  {
    "id": 10,
    "title": "Gamera vs. Barugon (1966) [720p] [Japanese Language] [English CC]",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy",
      "Horror",
      "Sci-Fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/LI36JSi8CG4",
    "thumbnail": "https://img.youtube.com/vi/LI36JSi8CG4/hqdefault.jpg"
  },
  {
    "id": 11,
    "title": "Kingdom Of Heaven (2005) [360p] Orlando Bloom, Eva Green, Liam Neeson",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "History",
      "War"
    ],
    "link": "https://www.youtube.com/embed/cEmqWWrYBmc",
    "thumbnail": "https://img.youtube.com/vi/cEmqWWrYBmc/hqdefault.jpg"
  },
  {
    "id": 12,
    "title": "Killers from Space (1954) [480p]",
    "genre": [
      "Mystery",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/GEUKiHZrktI",
    "thumbnail": "https://img.youtube.com/vi/GEUKiHZrktI/hqdefault.jpg"
  },
  {
    "id": 13,
    "title": "Armored Trooper Votoms: The Last Red Shoulder (1985) [360p]",
    "genre": [
      "Mystery",
      "Sci-fi"
    ],
    "link": "https://www.youtube.com/embed/WOX9s4CkAss",
    "thumbnail": "https://img.youtube.com/vi/WOX9s4CkAss/hqdefault.jpg"
  },
  {
    "id": 14,
    "title": "Poltergeist III (1988) [1080p]",
    "genre": [
      "Mystery",
      "Sci-fi"
    ],
    "link": "https://www.youtube.com/embed/z4iWHH6-wVs",
    "thumbnail": "https://img.youtube.com/vi/z4iWHH6-wVs/hqdefault.jpg"
  },
  {
    "id": 15,
    "title": "Strapped (1993) [360p]",
    "genre": [
      "Action",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/Wujr5FnC-GE",
    "thumbnail": "https://img.youtube.com/vi/Wujr5FnC-GE/hqdefault.jpg"
  },
  {
    "id": 16,
    "title": "The Nanny diaries (2007) [360p] (subtitles)",
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/nWqr86FgoRM",
    "thumbnail": "https://img.youtube.com/vi/nWqr86FgoRM/hqdefault.jpg"
  },
  {
    "id": 17,
    "title": "The Good, The Bad And The Ugly (1966) [1080p] Starring Clint Eastwood, Directed By Sergio Leone",
    "genre": [
      "Western"
    ],
    "link": "https://www.youtube.com/embed/yo9E_sJHRnE",
    "thumbnail": "https://img.youtube.com/vi/yo9E_sJHRnE/hqdefault.jpg"
  },
  {
    "id": 18,
    "title": "Scum (1979) [360p]",
    "genre": [
      "Crime",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/k_T9qj_3Se0",
    "thumbnail": "https://img.youtube.com/vi/k_T9qj_3Se0/hqdefault.jpg"
  },
  {
    "id": 19,
    "title": "The Complete Metropolis (1927) [480p]",
    "genre": [
      "Drama",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/-I9FD21k7Cs",
    "thumbnail": "https://img.youtube.com/vi/-I9FD21k7Cs/hqdefault.jpg"
  },
  {
    "id": 20,
    "title": "The Seventh Seal (1956) [720P]",
    "genre": [
      "Drama",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/mbgiWPJLSsM",
    "thumbnail": "https://img.youtube.com/vi/mbgiWPJLSsM/hqdefault.jpg"
  },
  {
    "id": 21,
    "title": "Re-Animator (1985)",
    "genre": [
      "Comedy",
      "Horror",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/FLZjrIkpstc",
    "thumbnail": "https://img.youtube.com/vi/FLZjrIkpstc/hqdefault.jpg"
  },
  {
    "id": 22,
    "title": "Weekend at Bernie's 2 (1993) [1080p]",
    "genre": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/hOkNqIcdnb0",
    "thumbnail": "https://img.youtube.com/vi/hOkNqIcdnb0/hqdefault.jpg"
  },
  {
    "id": 23,
    "title": "A Ticket to Tomahawk (1950) [360P]",
    "genre": [
      "Mystery",
      "Sci-fi"
    ],
    "link": "https://www.youtube.com/embed/2CyT4Q53Lds",
    "thumbnail": "https://img.youtube.com/vi/2CyT4Q53Lds/hqdefault.jpg"
  },
  {
    "id": 24,
    "title": "A Fistful Of Dollars (1964) [1080p] Starring Clint Eastwood, Directed By Sergio Leone",
    "genre": [
      "Western"
    ],
    "link": "https://www.youtube.com/embed/uGhuRBxBJ-4",
    "thumbnail": "https://img.youtube.com/vi/uGhuRBxBJ-4/hqdefault.jpg"
  },
  {
    "id": 25,
    "title": "Night and the City (1950) [480p]",
    "genre": [
      "Crime",
      "Film-Noir",
      "Mystery",
      "Sport",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/-zBrdZZTbGg",
    "thumbnail": "https://img.youtube.com/vi/-zBrdZZTbGg/hqdefault.jpg"
  },
  {
    "id": 26,
    "title": "Bronze Magician (1963) [360p] [Japanese] [English Subs] dir: Raizō Ichikawa 殀僧 Yôsô",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/35SKf0l_Syc",
    "thumbnail": "https://img.youtube.com/vi/35SKf0l_Syc/hqdefault.jpg"
  },
  {
    "id": 27,
    "title": "For A Few Dollars More (1965) [1080p] Starring Clint Eastwood, Directed By Sergio Leone",
    "genre": [
      "Western"
    ],
    "link": "https://www.youtube.com/embed/HuOG5S_Bml4",
    "thumbnail": "https://img.youtube.com/vi/HuOG5S_Bml4/hqdefault.jpg"
  },
  {
    "id": 28,
    "title": "Dangerous Years (1947) [480P]",
    "genre": [
      "Mystery",
      "Sci-fi"
    ],
    "link": "https://www.youtube.com/embed/P6Dc-aGpnmw",
    "thumbnail": "https://img.youtube.com/vi/P6Dc-aGpnmw/hqdefault.jpg"
  },
  {
    "id": 29,
    "title": "Scudda Hoo! Scudda Hay! (1948) [360P]",
    "genre": [
      "Mystery",
      "Sci-fi"
    ],
    "link": "https://www.youtube.com/embed/1gD8YZu8uLs",
    "thumbnail": "https://img.youtube.com/vi/1gD8YZu8uLs/hqdefault.jpg"
  },
  {
    "id": 30,
    "title": "Absolutely Anything (2015) [720p]",
    "genre": [
      "Comedy",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/P8TPjKrtpsA",
    "thumbnail": "https://img.youtube.com/vi/P8TPjKrtpsA/hqdefault.jpg"
  },
  {
    "id": 31,
    "title": "The Hand of Destiny (1954) [480p] [English Closed Captions]",
    "genre": [
      "Mystery",
      "Sci-fi"
    ],
    "link": "https://www.youtube.com/embed/OANGhypaYCg",
    "thumbnail": "https://img.youtube.com/vi/OANGhypaYCg/hqdefault.jpg"
  },
  {
    "id": 32,
    "title": "Grindhouse (2007) [720p] Quentin Tarantino, Rosario Dawson, Kurt Russell",
    "genre": [
      "Action",
      "Horror",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/SRjunxyZJKY",
    "thumbnail": "https://img.youtube.com/vi/SRjunxyZJKY/hqdefault.jpg"
  },
  {
    "id": 33,
    "title": "Animalympics (1980) [240p]",
    "genre": [
      "Animation",
      "Comedy",
      "Family",
      "Sport"
    ],
    "link": "https://www.youtube.com/embed/N8wq9dzLXuo",
    "thumbnail": "https://img.youtube.com/vi/N8wq9dzLXuo/hqdefault.jpg"
  },
  {
    "id": 34,
    "title": "The Conformist (1970) [1080p] [Italian - English Subtitles] d: Bernardo Bertolucci",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/cDTwc8n07OA",
    "thumbnail": "https://img.youtube.com/vi/cDTwc8n07OA/hqdefault.jpg"
  },
  {
    "id": 35,
    "title": "The Humanoid (1986) [480p]",
    "genre": [
      "Crime",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/iANJV4Jhfek",
    "thumbnail": "https://img.youtube.com/vi/iANJV4Jhfek/hqdefault.jpg"
  },
  {
    "id": 36,
    "title": "Intermezzo (1939) [480p]",
    "genre": [
      "Crime",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/C-Rm56JirdQ",
    "thumbnail": "https://img.youtube.com/vi/C-Rm56JirdQ/hqdefault.jpg"
  },
  {
    "id": 37,
    "title": "Motel Hell (1980) [360p]",
    "genre": [
      "Comedy",
      "Horror",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/KD9Uz30OHxQ",
    "thumbnail": "https://img.youtube.com/vi/KD9Uz30OHxQ/hqdefault.jpg"
  },
  {
    "id": 38,
    "title": "Man on the Roof (1976) [480p] English subtitles, Swedish audio",
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/gT5TzAG1Htw",
    "thumbnail": "https://img.youtube.com/vi/gT5TzAG1Htw/hqdefault.jpg"
  },
  {
    "id": 39,
    "title": "Moonshine County Express (1977) [360p]",
    "genre": [
      "Crime",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/mnvSfIx4PQQ",
    "thumbnail": "https://img.youtube.com/vi/mnvSfIx4PQQ/hqdefault.jpg"
  },
  {
    "id": 40,
    "title": "Voltes V (1977) [360p]",
    "genre": [
      "Crime",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/d_KoRb_F6Ls",
    "thumbnail": "https://img.youtube.com/vi/d_KoRb_F6Ls/hqdefault.jpg"
  },
  {
    "id": 41,
    "title": "\"The Nun of Monza\" (1969) Anne Heywood &amp; Hardy Krüger",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/qfNI6Wf-6Ng",
    "thumbnail": "https://img.youtube.com/vi/qfNI6Wf-6Ng/hqdefault.jpg"
  },
  {
    "id": 42,
    "title": "Onibaba (1964) [1080p] Horror Friday",
    "genre": [
      "Drama",
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/ezFeZN9V_5o",
    "thumbnail": "https://img.youtube.com/vi/ezFeZN9V_5o/hqdefault.jpg"
  },
  {
    "id": 43,
    "title": "Autopsy (1975) [360p]",
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/L12iwBkH-zs",
    "thumbnail": "https://img.youtube.com/vi/L12iwBkH-zs/hqdefault.jpg"
  },
  {
    "id": 44,
    "title": "Martial Law (1990) [1080p]",
    "genre": [
      "Action",
      "Crime"
    ],
    "link": "https://www.youtube.com/embed/LE5-d2DKhww",
    "thumbnail": "https://img.youtube.com/vi/LE5-d2DKhww/hqdefault.jpg"
  },
  {
    "id": 45,
    "title": "Retaliation (1968) [1080p] Cult Classic Friday",
    "genre": [
      "Action",
      "Crime"
    ],
    "link": "https://www.youtube.com/embed/LsKHtvMtzIA",
    "thumbnail": "https://img.youtube.com/vi/LsKHtvMtzIA/hqdefault.jpg"
  },
  {
    "id": 46,
    "title": "Hostel: Part II (2007) [720p] Directed By Eli Roth",
    "genre": [
      "Horror",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/dpsMtFPFbBo",
    "thumbnail": "https://img.youtube.com/vi/dpsMtFPFbBo/hqdefault.jpg"
  },
  {
    "id": 47,
    "title": "The Hidden Hand (1942) [360p]",
    "genre": [
      "Comedy",
      "Horror",
      "Mystery",
      "Romance",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/b1-bsLh1KLg",
    "thumbnail": "https://img.youtube.com/vi/b1-bsLh1KLg/hqdefault.jpg"
  },
  {
    "id": 48,
    "title": "Massacre Gun (1967) [1080p] Cult Classic Friday",
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/VhFOJW9pxjc",
    "thumbnail": "https://img.youtube.com/vi/VhFOJW9pxjc/hqdefault.jpg"
  },
  {
    "id": 49,
    "title": "Fait d'hiver (2001) [360p] Oscar-nominated Belgian short film",
    "genre": [
      "Comedy",
      "Drama",
      "Romance",
      "Short"
    ],
    "link": "https://www.youtube.com/embed/DpPtIxpA30A",
    "thumbnail": "https://img.youtube.com/vi/DpPtIxpA30A/hqdefault.jpg"
  },
  {
    "id": 50,
    "title": "Dead Space: Downfall (2008) [720p]",
    "genre": [
      "Crime",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/2jUAL_yC0E0",
    "thumbnail": "https://img.youtube.com/vi/2jUAL_yC0E0/hqdefault.jpg"
  },
  {
    "id": 51,
    "title": "Men at Work (1990) [720p]",
    "genre": [
      "Action",
      "Comedy",
      "Crime"
    ],
    "link": "https://www.youtube.com/embed/qJ6s9-6aKKk",
    "thumbnail": "https://img.youtube.com/vi/qJ6s9-6aKKk/hqdefault.jpg"
  },
  {
    "id": 52,
    "title": "The Boogie Man Will Get You (1942) [480p] Boris Karloff ~ Peter Lorre",
    "genre": [
      "Comedy",
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/tPkXuUAob_A",
    "thumbnail": "https://img.youtube.com/vi/tPkXuUAob_A/hqdefault.jpg"
  },
  {
    "id": 53,
    "title": "Nosferatu (1922) [360p] [ALTERED] (Type O Negative Score)",
    "genre": [
      "Fantasy",
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/sDIDQ68ugTU",
    "thumbnail": "https://img.youtube.com/vi/sDIDQ68ugTU/hqdefault.jpg"
  },
  {
    "id": 54,
    "title": "Gundress (1999) [480p]",
    "genre": [
      "Action",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/Rv-EkK6ZRKw",
    "thumbnail": "https://img.youtube.com/vi/Rv-EkK6ZRKw/hqdefault.jpg"
  },
  {
    "id": 55,
    "title": "The Taming Of The Shrew (1908) [720p]",
    "genre": [
      "Comedy",
      "Romance",
      "Short"
    ],
    "link": "https://www.youtube.com/embed/B25hD2QVgnI",
    "thumbnail": "https://img.youtube.com/vi/B25hD2QVgnI/hqdefault.jpg"
  },
  {
    "id": 56,
    "title": "The Price of Fear (1956) [360p] Merle Oberon",
    "genre": [
      "Crime",
      "Drama",
      "Film-Noir",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/5hjm8nejhPc",
    "thumbnail": "https://img.youtube.com/vi/5hjm8nejhPc/hqdefault.jpg"
  },
  {
    "id": 57,
    "title": "House of Dracula (1945) [360p] Lon Chaney ~ Boris Karloff ~ John Carradine",
    "genre": [
      "Action",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/GmoXl4BVHIA",
    "thumbnail": "https://img.youtube.com/vi/GmoXl4BVHIA/hqdefault.jpg"
  },
  {
    "id": 58,
    "title": "Pinky ( 1949 ) [360p]",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/P6X-uCP_1c0",
    "thumbnail": "https://img.youtube.com/vi/P6X-uCP_1c0/hqdefault.jpg"
  },
  {
    "id": 59,
    "title": "Witless Protection (2008) [1080p]",
    "genre": [
      "Action",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/m0GwcmwnNak",
    "thumbnail": "https://img.youtube.com/vi/m0GwcmwnNak/hqdefault.jpg"
  },
  {
    "id": 60,
    "title": "Death's Marathon (1913) [480p]",
    "genre": [
      "Drama",
      "Romance",
      "Short"
    ],
    "link": "https://www.youtube.com/embed/choO5xbDO9A",
    "thumbnail": "https://img.youtube.com/vi/choO5xbDO9A/hqdefault.jpg"
  },
  {
    "id": 61,
    "title": "Bela Lugosi Meets a Brooklyn Gorilla (1952) [480p]",
    "genre": [
      "Comedy",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/aMxxoGuciQ8",
    "thumbnail": "https://img.youtube.com/vi/aMxxoGuciQ8/hqdefault.jpg"
  },
  {
    "id": 62,
    "title": "Biggie and Tupac (2002) [360p]",
    "genre": [
      "Biography",
      "Crime",
      "Documentary",
      "Music"
    ],
    "link": "https://www.youtube.com/embed/BVkmHo05sAw",
    "thumbnail": "https://img.youtube.com/vi/BVkmHo05sAw/hqdefault.jpg"
  },
  {
    "id": 63,
    "title": "The Roommates (1973) [1080p] Roberta Collins, Pat Woodell, Marki Bey",
    "genre": [
      "Crime",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/0WxxiS919lU",
    "thumbnail": "https://img.youtube.com/vi/0WxxiS919lU/hqdefault.jpg"
  },
  {
    "id": 64,
    "title": "Lazer Tag Academy: The Movie (1986) [240p]",
    "genre": [
      "Action",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/9p5WzUn-XCo",
    "thumbnail": "https://img.youtube.com/vi/9p5WzUn-XCo/hqdefault.jpg"
  },
  {
    "id": 65,
    "title": "Princess Of Mars (2009) [720p] Something weird for Wednesday",
    "genre": [
      "Action",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/LCNBtwGkA2U",
    "thumbnail": "https://img.youtube.com/vi/LCNBtwGkA2U/hqdefault.jpg"
  },
  {
    "id": 66,
    "title": "Deathstalker (1983) [720p] Classic sword & sorcery fantasy movie",
    "genre": [
      "Adventure",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/TyzgTGC-nak",
    "thumbnail": "https://img.youtube.com/vi/TyzgTGC-nak/hqdefault.jpg"
  },
  {
    "id": 67,
    "title": "Bloody Wednesday (1988) [480p]",
    "genre": [
      "Horror",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/QGU26YvsFZY",
    "thumbnail": "https://img.youtube.com/vi/QGU26YvsFZY/hqdefault.jpg"
  },
  {
    "id": 68,
    "title": "Whiteout (2009) [480p] Kate Beckinsale, Gabriel Macht, Tom Skerritt",
    "genre": [
      "Action",
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/3OLQYb5pTxs",
    "thumbnail": "https://img.youtube.com/vi/3OLQYb5pTxs/hqdefault.jpg"
  },
  {
    "id": 69,
    "title": "Drive-In Massacre (1976) [360p]",
    "genre": [
      "Horror",
      "Mystery"
    ],
    "link": "https://www.youtube.com/embed/RricxDtuuaM",
    "thumbnail": "https://img.youtube.com/vi/RricxDtuuaM/hqdefault.jpg"
  },
  {
    "id": 70,
    "title": "Figures in a Landscape (1970) [720p] [Romanian Subs] dir: Joseph Losey ~ Robert Shaw ~ Malcolm McDowell",
    "genre": [
      "Action",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/4ldfFx10prc",
    "thumbnail": "https://img.youtube.com/vi/4ldfFx10prc/hqdefault.jpg"
  },
  {
    "id": 71,
    "title": "You Are the Apple of My Eye (2011) [480p]",
    "genre": [
      "Action",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/FHUBNZrkAk0",
    "thumbnail": "https://img.youtube.com/vi/FHUBNZrkAk0/hqdefault.jpg"
  },
  {
    "id": 72,
    "title": "The Wild Swans (1962) [480p]",
    "genre": [
      "Action",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/5PU8_2p4CdY",
    "thumbnail": "https://img.youtube.com/vi/5PU8_2p4CdY/hqdefault.jpg"
  },
  {
    "id": 73,
    "title": "Bram Stoker's Dracula (1992) [720p] Gary Oldman, Winona Ryder, Keanu Reeves",
    "genre": [
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/VVZVyIPxqWE",
    "thumbnail": "https://img.youtube.com/vi/VVZVyIPxqWE/hqdefault.jpg"
  },
  {
    "id": 74,
    "title": "America 3000 (1986) [360p]",
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/TLxsdsv3oYk",
    "thumbnail": "https://img.youtube.com/vi/TLxsdsv3oYk/hqdefault.jpg"
  },
  {
    "id": 75,
    "title": "Chanakya 2019 [240]",
    "genre": [
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/wTBtt2oDvCs",
    "thumbnail": "https://img.youtube.com/vi/wTBtt2oDvCs/hqdefault.jpg"
  },
  {
    "id": 76,
    "title": "Electric Dreams (1984) [240p]",
    "genre": [
      "Comedy",
      "Drama",
      "Music",
      "Romance",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/rcLcxAwdjmo",
    "thumbnail": "https://img.youtube.com/vi/rcLcxAwdjmo/hqdefault.jpg"
  },
  {
    "id": 77,
    "title": "The Tailor from Ulm (English subtitles) (1978) [480p]",
    "genre": [
      "Drama",
      "History"
    ],
    "link": "https://www.youtube.com/embed/pOL5QtXLb6E&t=2018s",
    "thumbnail": "https://img.youtube.com/vi/pOL5QtXLb6E&t=2018s/hqdefault.jpg"
  },
  {
    "id": 78,
    "title": "The Secret Garden (1999) [480p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/eoKuIhtUI-s",
    "thumbnail": "https://img.youtube.com/vi/eoKuIhtUI-s/hqdefault.jpg"
  },
  {
    "id": 79,
    "title": "BEAT THE DEVIL (1953) [360p] John Huston, Humphrey Bogart, Gina Lollobrigida",
    "genre": [
      "Action",
      "Adventure",
      "Comedy",
      "Crime",
      "Drama",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/jQLGboyfy6s",
    "thumbnail": "https://img.youtube.com/vi/jQLGboyfy6s/hqdefault.jpg"
  },
  {
    "id": 80,
    "title": "Beast from Haunted Cave (1959) [480p]",
    "genre": [
      "Crime",
      "Horror",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/KX_8gGxEM2E",
    "thumbnail": "https://img.youtube.com/vi/KX_8gGxEM2E/hqdefault.jpg"
  },
  {
    "id": 81,
    "title": "Lord Of War (2005) [1080p]",
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/ZpqHrqF4MO4",
    "thumbnail": "https://img.youtube.com/vi/ZpqHrqF4MO4/hqdefault.jpg"
  },
  {
    "id": 82,
    "title": "punisher: war zone (2008) [360p]",
    "genre": [
      "Action",
      "Adventure",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/vOFaxCwuGTQ",
    "thumbnail": "https://img.youtube.com/vi/vOFaxCwuGTQ/hqdefault.jpg"
  },
  {
    "id": 83,
    "title": "Patterns (1956) [720p]",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/UMnU4faUMUY",
    "thumbnail": "https://img.youtube.com/vi/UMnU4faUMUY/hqdefault.jpg"
  },
  {
    "id": 84,
    "title": "Grave of the Fireflies (2005) [480p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/eSDy0PPrTzs",
    "thumbnail": "https://img.youtube.com/vi/eSDy0PPrTzs/hqdefault.jpg"
  },
  {
    "id": 85,
    "title": "The bridge on the river kwai (1957)",
    "genre": [
      "Adventure",
      "Drama",
      "War"
    ],
    "link": "https://www.youtube.com/embed/nrWjOBBNAjY",
    "thumbnail": "https://img.youtube.com/vi/nrWjOBBNAjY/hqdefault.jpg"
  },
  {
    "id": 86,
    "title": "The Spy Next Door (2010) [720]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/ofOt21WayO4",
    "thumbnail": "https://img.youtube.com/vi/ofOt21WayO4/hqdefault.jpg"
  },
  {
    "id": 87,
    "title": "Daughter of Dr. Jekyll (1957) [360p] [French Subs]",
    "genre": [
      "Fantasy",
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/5NIzgPsi_iE",
    "thumbnail": "https://img.youtube.com/vi/5NIzgPsi_iE/hqdefault.jpg"
  },
  {
    "id": 88,
    "title": "Howards End (1992) [1080p] Anthony Hopkins, Emma Thompson, Helena Bonham Carter",
    "genre": [
      "Drama",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/Vjz_C1DuWsU",
    "thumbnail": "https://img.youtube.com/vi/Vjz_C1DuWsU/hqdefault.jpg"
  },
  {
    "id": 89,
    "title": "Anupama Parameswaran in Hindi (2019) [480]",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/S3KpLuCFZBg",
    "thumbnail": "https://img.youtube.com/vi/S3KpLuCFZBg/hqdefault.jpg"
  },
  {
    "id": 90,
    "title": "The Disappearance of Haruhi Suzumiya English Dub (2010) [720p]",
    "genre": [
      "Animation",
      "Comedy",
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/mQV5ymUVrhw",
    "thumbnail": "https://img.youtube.com/vi/mQV5ymUVrhw/hqdefault.jpg"
  },
  {
    "id": 91,
    "title": "Hannibal Rising (2007) [360p]",
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/ta5MqZKOAXo",
    "thumbnail": "https://img.youtube.com/vi/ta5MqZKOAXo/hqdefault.jpg"
  },
  {
    "id": 92,
    "title": "Solar Adventure (로보트왕 썬샤크) (1990) [480p]",
    "genre": [
      "Action",
      "Animation",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/rEu4r0q_UeM",
    "thumbnail": "https://img.youtube.com/vi/rEu4r0q_UeM/hqdefault.jpg"
  },
  {
    "id": 93,
    "title": "Fist Of The North Star: The Movie (1986) [480p][English]",
    "genre": [
      "Action",
      "Animation",
      "Drama",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/C_HYGYeAj38",
    "thumbnail": "https://img.youtube.com/vi/C_HYGYeAj38/hqdefault.jpg"
  },
  {
    "id": 94,
    "title": "The Wasp Woman (1960) [480p]",
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/Wg55BU2cJPU",
    "thumbnail": "https://img.youtube.com/vi/Wg55BU2cJPU/hqdefault.jpg"
  },
  {
    "id": 95,
    "title": "[Drama] [Biography] [History] Andrei Rublev (1966) [1080p] Dir: Andrei Tarkovsky",
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "link": "https://www.youtube.com/embed/VkCeEYuMyOY",
    "thumbnail": "https://img.youtube.com/vi/VkCeEYuMyOY/hqdefault.jpg"
  },
  {
    "id": 96,
    "title": "Manos: The Hands Of Fate (1966) [1080p] One Of The Worst Films Ever Made",
    "genre": [
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/FfrveywM8Ag",
    "thumbnail": "https://img.youtube.com/vi/FfrveywM8Ag/hqdefault.jpg"
  },
  {
    "id": 97,
    "title": "Mobile Suit Gundam F91 (1991) [1080p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/pXtjAmeQ_5s",
    "thumbnail": "https://img.youtube.com/vi/pXtjAmeQ_5s/hqdefault.jpg"
  },
  {
    "id": 98,
    "title": "The Hitter (1977) [720p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/PVyCkOMP66g",
    "thumbnail": "https://img.youtube.com/vi/PVyCkOMP66g/hqdefault.jpg"
  },
  {
    "id": 99,
    "title": "The Old Dark House (1963) [360p] dir: William Castle ~ Tom Poston, Robert Morley, Janette Scott",
    "genre": [
      "Comedy",
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/oCwFLU_SnFQ",
    "thumbnail": "https://img.youtube.com/vi/oCwFLU_SnFQ/hqdefault.jpg"
  },
  {
    "id": 100,
    "title": "Tokyo Drifter (1966) [720p] Cult Classic Friday",
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/5k5GeiMuTdg",
    "thumbnail": "https://img.youtube.com/vi/5k5GeiMuTdg/hqdefault.jpg"
  },
  {
    "id": 101,
    "title": "Sister, Sister (1982) [480p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/YcflVFr0buA",
    "thumbnail": "https://img.youtube.com/vi/YcflVFr0buA/hqdefault.jpg"
  },
  {
    "id": 102,
    "title": "Branded to Kill (1967) [1080p] Cult Classic Friday",
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/L5GZMtd1BJU",
    "thumbnail": "https://img.youtube.com/vi/L5GZMtd1BJU/hqdefault.jpg"
  },
  {
    "id": 103,
    "title": "Ozma of Oz (1987) [240p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/zoRtJY7OJhc",
    "thumbnail": "https://img.youtube.com/vi/zoRtJY7OJhc/hqdefault.jpg"
  },
  {
    "id": 104,
    "title": "Thomas and the Magic Railroad (2000) [720p]",
    "genre": [
      "Adventure",
      "Comedy",
      "Drama",
      "Family",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/A5earLj81SU",
    "thumbnail": "https://img.youtube.com/vi/A5earLj81SU/hqdefault.jpg"
  },
  {
    "id": 105,
    "title": "The Wrong Box (1966) [360p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/a5FSQvePkhA",
    "thumbnail": "https://img.youtube.com/vi/a5FSQvePkhA/hqdefault.jpg"
  },
  {
    "id": 106,
    "title": "LθRD§ θF ©}{@¤§ (2018) [720p] Spanish subs",
    "genre": [
      "Action",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/skObCcJM56E",
    "thumbnail": "https://img.youtube.com/vi/skObCcJM56E/hqdefault.jpg"
  },
  {
    "id": 107,
    "title": "Body and Soul (1925) [1080p]",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/tjklUihgG9I",
    "thumbnail": "https://img.youtube.com/vi/tjklUihgG9I/hqdefault.jpg"
  },
  {
    "id": 108,
    "title": "Damnation Alley (1977) [720p]",
    "genre": [
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/UcmVSVkSKJk",
    "thumbnail": "https://img.youtube.com/vi/UcmVSVkSKJk/hqdefault.jpg"
  },
  {
    "id": 109,
    "title": "Rosencrantz & Guildenstern Are Dead (1990) [360p]",
    "genre": [
      "Comedy",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/3YHHHEg3ioc",
    "thumbnail": "https://img.youtube.com/vi/3YHHHEg3ioc/hqdefault.jpg"
  },
  {
    "id": 110,
    "title": "Vamp (1986) [720p]",
    "genre": [
      "Comedy",
      "Fantasy",
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/7K1AKkiE9iQ",
    "thumbnail": "https://img.youtube.com/vi/7K1AKkiE9iQ/hqdefault.jpg"
  },
  {
    "id": 111,
    "title": "Street Fighter: The New Challengers (2011) [1080p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/Ljbze_R0MoY",
    "thumbnail": "https://img.youtube.com/vi/Ljbze_R0MoY/hqdefault.jpg"
  },
  {
    "id": 112,
    "title": "The Perks Of Being A Wallflower (2012) [1080p] Logan Lerman, Emma Watson, Ezra Miller",
    "genre": [
      "Drama",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/FP9MQtQNVPY",
    "thumbnail": "https://img.youtube.com/vi/FP9MQtQNVPY/hqdefault.jpg"
  },
  {
    "id": 113,
    "title": "A Canterbury Tale (1944) [360p]",
    "genre": [
      "Comedy",
      "Drama",
      "Mystery",
      "War"
    ],
    "link": "https://www.youtube.com/embed/RMJ8lVXXNP8",
    "thumbnail": "https://img.youtube.com/vi/RMJ8lVXXNP8/hqdefault.jpg"
  },
  {
    "id": 114,
    "title": "Martin (1978) [480p] Something weird for Wednesday",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/lvcBHTrcysE",
    "thumbnail": "https://img.youtube.com/vi/lvcBHTrcysE/hqdefault.jpg"
  },
  {
    "id": 115,
    "title": "Goke, Body Snatcher from Hell (1968) [360p] [Japanese Language] [English Subs]",
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/01d5pGsm7oo",
    "thumbnail": "https://img.youtube.com/vi/01d5pGsm7oo/hqdefault.jpg"
  },
  {
    "id": 116,
    "title": "Sailor Suit and Machine Gun (1981) [1080p]",
    "genre": [
      "Action",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/alZlYlCBKV0",
    "thumbnail": "https://img.youtube.com/vi/alZlYlCBKV0/hqdefault.jpg"
  },
  {
    "id": 117,
    "title": "The Reef (2007) [1080p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/8vcIxykgBo4",
    "thumbnail": "https://img.youtube.com/vi/8vcIxykgBo4/hqdefault.jpg"
  },
  {
    "id": 118,
    "title": "Thieves’ Highway (1949) [360p]",
    "genre": [
      "Drama",
      "Film-Noir",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/pmFyoa-t8JE",
    "thumbnail": "https://img.youtube.com/vi/pmFyoa-t8JE/hqdefault.jpg"
  },
  {
    "id": 119,
    "title": "Driving Miss Daisy (1989) [1080p] Morgan Freeman, Jessica Tandy, Dan Aykroyd",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/ojb2tZadyP4&amp;amp;amp;t=671s",
    "thumbnail": "https://img.youtube.com/vi/ojb2tZadyP4&amp;amp;amp;t=671s/hqdefault.jpg"
  },
  {
    "id": 120,
    "title": "The Lobster (2015) [720p]",
    "genre": [
      "Comedy",
      "Drama",
      "Romance",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/nnw2dLxMZ3s",
    "thumbnail": "https://img.youtube.com/vi/nnw2dLxMZ3s/hqdefault.jpg"
  },
  {
    "id": 121,
    "title": "The trip (1967) [360p]",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/FmZCwcGu_2I",
    "thumbnail": "https://img.youtube.com/vi/FmZCwcGu_2I/hqdefault.jpg"
  },
  {
    "id": 122,
    "title": "Psych Out (1968) [360p]",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/DHcNjetHydM",
    "thumbnail": "https://img.youtube.com/vi/DHcNjetHydM/hqdefault.jpg"
  },
  {
    "id": 123,
    "title": "Watch the Skies!: Science Fiction, the 1950s and Us (2005) [360p] Mark Hamill, Spielberg, Ridley Scott",
    "genre": [
      "Documentary"
    ],
    "link": "https://www.youtube.com/embed/DZ0zkAYDs-s",
    "thumbnail": "https://img.youtube.com/vi/DZ0zkAYDs-s/hqdefault.jpg"
  },
  {
    "id": 124,
    "title": "Wild in the streets (1968) [360p]",
    "genre": [
      "Comedy",
      "Drama",
      "Music"
    ],
    "link": "https://www.youtube.com/embed/fozufGZubYc",
    "thumbnail": "https://img.youtube.com/vi/fozufGZubYc/hqdefault.jpg"
  },
  {
    "id": 125,
    "title": "1408 (2007) [720P]",
    "genre": [
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/fIPWB_3UaXo&list=WL&index=136&t=0s",
    "thumbnail": "https://img.youtube.com/vi/fIPWB_3UaXo&list=WL&index=136&t=0s/hqdefault.jpg"
  },
  {
    "id": 126,
    "title": "Immortals (2011) [360p]",
    "genre": [
      "Action",
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/GNMJ34fXD2o",
    "thumbnail": "https://img.youtube.com/vi/GNMJ34fXD2o/hqdefault.jpg"
  },
  {
    "id": 127,
    "title": "9/11 Cleared for Chaos (2019) [720p]",
    "genre": [
      "Documentary"
    ],
    "link": "https://www.youtube.com/embed/FXrPXC5-xNo",
    "thumbnail": "https://img.youtube.com/vi/FXrPXC5-xNo/hqdefault.jpg"
  },
  {
    "id": 128,
    "title": "Salesman (1969) [360p]",
    "genre": [
      "Documentary",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/K-utsxnUfXM",
    "thumbnail": "https://img.youtube.com/vi/K-utsxnUfXM/hqdefault.jpg"
  },
  {
    "id": 129,
    "title": "Street Wars (1992) [480p]",
    "genre": [
      "Action",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/e71O8yfpPxo",
    "thumbnail": "https://img.youtube.com/vi/e71O8yfpPxo/hqdefault.jpg"
  },
  {
    "id": 130,
    "title": "Lonesome Dove (1989) [720p] [TV Miniseries] - 4 parts, see post for links",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/diSm2E6z-vw",
    "thumbnail": "https://img.youtube.com/vi/diSm2E6z-vw/hqdefault.jpg"
  },
  {
    "id": 131,
    "title": "Faster, Pussycat! Kill! Kill! (1965) [480p] dir: Russ Meyer",
    "genre": [
      "Action",
      "Comedy"
    ],
    "link": "https://www.youtube.com/embed/LmeGKP5Bb20",
    "thumbnail": "https://img.youtube.com/vi/LmeGKP5Bb20/hqdefault.jpg"
  },
  {
    "id": 132,
    "title": "Suikoden: Demon Century (1993) [360p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/gF2KjRC3Cy4",
    "thumbnail": "https://img.youtube.com/vi/gF2KjRC3Cy4/hqdefault.jpg"
  },
  {
    "id": 133,
    "title": "Holes (2003) [360p]",
    "genre": [
      "Adventure",
      "Comedy",
      "Drama",
      "Family",
      "Mystery"
    ],
    "link": "https://www.youtube.com/embed/rqi_StXDhpU",
    "thumbnail": "https://img.youtube.com/vi/rqi_StXDhpU/hqdefault.jpg"
  },
  {
    "id": 134,
    "title": "Hellraiser III: Hell On Earth (1994) [720p]",
    "genre": [
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/D7Ge2Ta0aws&amp;amp;t=722s",
    "thumbnail": "https://img.youtube.com/vi/D7Ge2Ta0aws&amp;amp;t=722s/hqdefault.jpg"
  },
  {
    "id": 135,
    "title": "Scary Godmother: Halloween Spooktacular (2003) [480p]",
    "genre": [
      "Animation",
      "Comedy"
    ],
    "link": "https://www.youtube.com/embed/Db9eo6NBdi8",
    "thumbnail": "https://img.youtube.com/vi/Db9eo6NBdi8/hqdefault.jpg"
  },
  {
    "id": 136,
    "title": "The Strange Woman (1946) [360p] Hedy Lamarr",
    "genre": [
      "Drama",
      "Film-Noir",
      "Romance",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/nH_WjftWxTM",
    "thumbnail": "https://img.youtube.com/vi/nH_WjftWxTM/hqdefault.jpg"
  },
  {
    "id": 137,
    "title": "Madame Freedom (1965) [1080p] [English Closed Captions]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/FkAbVQhfpmw",
    "thumbnail": "https://img.youtube.com/vi/FkAbVQhfpmw/hqdefault.jpg"
  },
  {
    "id": 138,
    "title": "K.I.D.S (1995) [480p]",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/H1Fw3uGKXHU",
    "thumbnail": "https://img.youtube.com/vi/H1Fw3uGKXHU/hqdefault.jpg"
  },
  {
    "id": 139,
    "title": "Bartok the Magnificent (1999) [360p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/cZ0DvwZ1rXs",
    "thumbnail": "https://img.youtube.com/vi/cZ0DvwZ1rXs/hqdefault.jpg"
  },
  {
    "id": 140,
    "title": "\"The Cat's Paw\" (1934) [480p]",
    "genre": [
      "Comedy"
    ],
    "link": "https://www.youtube.com/embed/84exdU5IFN0",
    "thumbnail": "https://img.youtube.com/vi/84exdU5IFN0/hqdefault.jpg"
  },
  {
    "id": 141,
    "title": "Trash Humpers (2009) [480p]",
    "genre": [
      "Comedy",
      "Drama",
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/0JJhxo-etI0",
    "thumbnail": "https://img.youtube.com/vi/0JJhxo-etI0/hqdefault.jpg"
  },
  {
    "id": 142,
    "title": "The Sandlot (1993) [720p] [ALTERED]",
    "genre": [
      "Comedy",
      "Drama",
      "Family",
      "Sport"
    ],
    "link": "https://www.youtube.com/embed/r5e087SefyU",
    "thumbnail": "https://img.youtube.com/vi/r5e087SefyU/hqdefault.jpg"
  },
  {
    "id": 143,
    "title": "Jigsaw (2017) [720p] Tobin Bell",
    "genre": [
      "Crime",
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/ziG9fPBKZ1A&amp;amp;amp;amp=&amp;amp;amp;t=558s",
    "thumbnail": "https://img.youtube.com/vi/ziG9fPBKZ1A&amp;amp;amp;amp=&amp;amp;amp;t=558s/hqdefault.jpg"
  },
  {
    "id": 144,
    "title": "Cosmic Fantasy: Galaxy Cougar's Trap (1994) [720p] [English Closed Captions]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/jscfV8T-KTA",
    "thumbnail": "https://img.youtube.com/vi/jscfV8T-KTA/hqdefault.jpg"
  },
  {
    "id": 145,
    "title": "Drunken Master II a.k.a. The Legend Of Drunken Master (1994) [1080p] Jackie Chan",
    "genre": [
      "Action",
      "Comedy"
    ],
    "link": "https://www.youtube.com/embed/hWu8cfVB6PM&amp;amp;t=609s",
    "thumbnail": "https://img.youtube.com/vi/hWu8cfVB6PM&amp;amp;t=609s/hqdefault.jpg"
  },
  {
    "id": 146,
    "title": "A Constant Forge (2000) [480p]",
    "genre": [
      "Biography",
      "Documentary",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/Iwhmt1eeZ8A",
    "thumbnail": "https://img.youtube.com/vi/Iwhmt1eeZ8A/hqdefault.jpg"
  },
  {
    "id": 147,
    "title": "Lolita (1997) [480p]",
    "genre": [
      "Drama",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/oe6FJPzi-bQ",
    "thumbnail": "https://img.youtube.com/vi/oe6FJPzi-bQ/hqdefault.jpg"
  },
  {
    "id": 148,
    "title": "Spellbound (1945)",
    "genre": [
      "Film-Noir",
      "Mystery",
      "Romance",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/Qku4jtvtay8",
    "thumbnail": "https://img.youtube.com/vi/Qku4jtvtay8/hqdefault.jpg"
  },
  {
    "id": 149,
    "title": "The Atomic Submarine (1953) [360p]",
    "genre": [
      "Drama",
      "Horror",
      "Sci-Fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/IHdbXAwGFwc",
    "thumbnail": "https://img.youtube.com/vi/IHdbXAwGFwc/hqdefault.jpg"
  },
  {
    "id": 150,
    "title": "The Marvelous Land of Oz (1987) [240p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/LwDBPSo0Ptc",
    "thumbnail": "https://img.youtube.com/vi/LwDBPSo0Ptc/hqdefault.jpg"
  },
  {
    "id": 151,
    "title": "Rashomon (1950) [480p] - some poster inserted commercials",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/uwR2kVOcwNI",
    "thumbnail": "https://img.youtube.com/vi/uwR2kVOcwNI/hqdefault.jpg"
  },
  {
    "id": 152,
    "title": "Split Second (1992) [1080p] English captions",
    "genre": [
      "Action",
      "Crime",
      "Horror",
      "Sci-Fi",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/tjEPtpNM7vo",
    "thumbnail": "https://img.youtube.com/vi/tjEPtpNM7vo/hqdefault.jpg"
  },
  {
    "id": 153,
    "title": "1492: Conquest Of Paradise (1992) [1080p] Gérard Depardieu, Sigourney Weaver, Armand Assante",
    "genre": [
      "Adventure",
      "Biography",
      "Drama",
      "History"
    ],
    "link": "https://www.youtube.com/embed/1TZsYliI2z4&amp;amp;amp;t=406s",
    "thumbnail": "https://img.youtube.com/vi/1TZsYliI2z4&amp;amp;amp;t=406s/hqdefault.jpg"
  },
  {
    "id": 154,
    "title": "The Cabinet of Dr. Caligari (1920) [1080p]",
    "genre": [
      "Fantasy",
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/LzMYM75SjhY",
    "thumbnail": "https://img.youtube.com/vi/LzMYM75SjhY/hqdefault.jpg"
  },
  {
    "id": 155,
    "title": "Mon oncle (1958) [360p]",
    "genre": [
      "Comedy"
    ],
    "link": "https://www.youtube.com/embed/JHWJ6X77Uic",
    "thumbnail": "https://img.youtube.com/vi/JHWJ6X77Uic/hqdefault.jpg"
  },
  {
    "id": 156,
    "title": "In The Mouth Of Madness (1994) [1080p] Directed By John Carpenter",
    "genre": [
      "Fantasy",
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/KlPzs44_kZI&t=1030s",
    "thumbnail": "https://img.youtube.com/vi/KlPzs44_kZI&t=1030s/hqdefault.jpg"
  },
  {
    "id": 157,
    "title": "Plan 10 From Outer Space (1995) [480p]",
    "genre": [
      "Comedy",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/zo2h3ePC9OI",
    "thumbnail": "https://img.youtube.com/vi/zo2h3ePC9OI/hqdefault.jpg"
  },
  {
    "id": 158,
    "title": "Let's Kill Wards Wife (2014) [1080p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/CCUQrbneoYM",
    "thumbnail": "https://img.youtube.com/vi/CCUQrbneoYM/hqdefault.jpg"
  },
  {
    "id": 159,
    "title": "30 Days Of Night (2007) [720p] Josh Hartnett, Melissa George, Ben Foster",
    "genre": [
      "Horror",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/eyM_bLu_W74&amp;t=1113s",
    "thumbnail": "https://img.youtube.com/vi/eyM_bLu_W74&amp;t=1113s/hqdefault.jpg"
  },
  {
    "id": 160,
    "title": "Rasputin: Dark Servant of Destiny (1996) [360p]",
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "link": "https://www.youtube.com/embed/mSxvVdseB74&t=1188s",
    "thumbnail": "https://img.youtube.com/vi/mSxvVdseB74&t=1188s/hqdefault.jpg"
  },
  {
    "id": 161,
    "title": "Garo: Divine Flame (2016) [720p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/6PrNz_NgzHc",
    "thumbnail": "https://img.youtube.com/vi/6PrNz_NgzHc/hqdefault.jpg"
  },
  {
    "id": 162,
    "title": "Gumball 3000 (2003) [360p]",
    "genre": [
      "Adventure"
    ],
    "link": "https://www.youtube.com/embed/xUCL5Ie0E4M",
    "thumbnail": "https://img.youtube.com/vi/xUCL5Ie0E4M/hqdefault.jpg"
  },
  {
    "id": 163,
    "title": "Zatoichi 0n the Road (1963) [360p]",
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/rqxfY_XtvkA",
    "thumbnail": "https://img.youtube.com/vi/rqxfY_XtvkA/hqdefault.jpg"
  },
  {
    "id": 164,
    "title": "THE PASSION OF MARTIN (1991) | dir. Alexander Payne",
    "genre": [
      "Comedy"
    ],
    "link": "https://www.youtube.com/embed/l_mnKlalvWo",
    "thumbnail": "https://img.youtube.com/vi/l_mnKlalvWo/hqdefault.jpg"
  },
  {
    "id": 165,
    "title": "George Lucas: Creating an Empire (2002) [360p]",
    "genre": [
      "Short"
    ],
    "link": "https://www.youtube.com/embed/8GXPixi6fq0",
    "thumbnail": "https://img.youtube.com/vi/8GXPixi6fq0/hqdefault.jpg"
  },
  {
    "id": 166,
    "title": "Gate of Flesh (1964) Japanese film. Eng sub. [360p]",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/KtcKflKo1sc",
    "thumbnail": "https://img.youtube.com/vi/KtcKflKo1sc/hqdefault.jpg"
  },
  {
    "id": 167,
    "title": "Freedom Force (2013) [1080p] Something weird for Wednesday",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/7pj7EBJ-XqY",
    "thumbnail": "https://img.youtube.com/vi/7pj7EBJ-XqY/hqdefault.jpg"
  },
  {
    "id": 168,
    "title": "The Silent Enemy (1958) [360p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/dvm_7nVYbqc",
    "thumbnail": "https://img.youtube.com/vi/dvm_7nVYbqc/hqdefault.jpg"
  },
  {
    "id": 169,
    "title": "Odin: Photon Space Sailer Starlight (1985) [240p]",
    "genre": [
      "Romance",
      "Sci-fi",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/ngfjBU1zh-o",
    "thumbnail": "https://img.youtube.com/vi/ngfjBU1zh-o/hqdefault.jpg"
  },
  {
    "id": 170,
    "title": "Savages (2012) [1080p] Taylor Kitsch, Blake Lively, Aaron Taylor-Johnson, Directed By Oliver Stone",
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/uZCQNwCWeoY&amp;amp;t=130s",
    "thumbnail": "https://img.youtube.com/vi/uZCQNwCWeoY&amp;amp;t=130s/hqdefault.jpg"
  },
  {
    "id": 171,
    "title": "Alive (1993) [720] {Altered}",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/I7_YTqCJYMM",
    "thumbnail": "https://img.youtube.com/vi/I7_YTqCJYMM/hqdefault.jpg"
  },
  {
    "id": 172,
    "title": "Kidnapping, Caucasian Style (1967) [720p]",
    "genre": [
      "Comedy",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/P2_sjEURwgo",
    "thumbnail": "https://img.youtube.com/vi/P2_sjEURwgo/hqdefault.jpg"
  },
  {
    "id": 173,
    "title": "Typhoon club ENG sub (360p)",
    "genre": [
      "Drama",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/70N0ZDxChos",
    "thumbnail": "https://img.youtube.com/vi/70N0ZDxChos/hqdefault.jpg"
  },
  {
    "id": 174,
    "title": "The Grey (2011) [480p] Liam Neeson",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/GPu2HhpdI3M",
    "thumbnail": "https://img.youtube.com/vi/GPu2HhpdI3M/hqdefault.jpg"
  },
  {
    "id": 175,
    "title": "The Last Hunter (1980) [720p] English captions",
    "genre": [
      "Drama",
      "Thriller",
      "War"
    ],
    "link": "https://www.youtube.com/embed/607_2wlH3Bk",
    "thumbnail": "https://img.youtube.com/vi/607_2wlH3Bk/hqdefault.jpg"
  },
  {
    "id": 176,
    "title": "All That Heaven Allows (1955) [1080p]",
    "genre": [
      "Drama",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/bkBFgNf74m4",
    "thumbnail": "https://img.youtube.com/vi/bkBFgNf74m4/hqdefault.jpg"
  },
  {
    "id": 177,
    "title": "TO-Y (1987) [480p]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/ZXXEVQ-0B8k",
    "thumbnail": "https://img.youtube.com/vi/ZXXEVQ-0B8k/hqdefault.jpg"
  },
  {
    "id": 178,
    "title": "Johnny Cool (1963) [360p]",
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/-cHj5wEnDHs",
    "thumbnail": "https://img.youtube.com/vi/-cHj5wEnDHs/hqdefault.jpg"
  },
  {
    "id": 179,
    "title": "Magnificent Obsession (1954) [360p]",
    "genre": [
      "Drama",
      "Romance"
    ],
    "link": "https://www.youtube.com/embed/LsILJ9XsRA4",
    "thumbnail": "https://img.youtube.com/vi/LsILJ9XsRA4/hqdefault.jpg"
  },
  {
    "id": 180,
    "title": "The Last Starfighter (1984) [1080p]",
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/RNllJc4gc1Y&t=232s",
    "thumbnail": "https://img.youtube.com/vi/RNllJc4gc1Y&t=232s/hqdefault.jpg"
  },
  {
    "id": 181,
    "title": "Cast a Dark Shadow (1955) [360p] dir: Lewis Gilbert",
    "genre": [
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/ICeRhcVdsFY",
    "thumbnail": "https://img.youtube.com/vi/ICeRhcVdsFY/hqdefault.jpg"
  },
  {
    "id": 182,
    "title": "Rollerball (2002) [1080p]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/Cg6o-lfW8Yw",
    "thumbnail": "https://img.youtube.com/vi/Cg6o-lfW8Yw/hqdefault.jpg"
  },
  {
    "id": 183,
    "title": "John Wick: Chapter 3 – Parabellum (2019) [1080p] Keanu Reeves, Halle Berry, Laurence Fishburne",
    "genre": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/536aYuRqwvY&t=657s",
    "thumbnail": "https://img.youtube.com/vi/536aYuRqwvY&t=657s/hqdefault.jpg"
  },
  {
    "id": 184,
    "title": "Terror of Frankenstein (1977) [360p]",
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/7iv2NcsESYw",
    "thumbnail": "https://img.youtube.com/vi/7iv2NcsESYw/hqdefault.jpg"
  },
  {
    "id": 185,
    "title": "Rude Awaking (1989)[240p]",
    "genre": [
      "Comedy"
    ],
    "link": "https://www.youtube.com/embed/NIIvuQu4n7A",
    "thumbnail": "https://img.youtube.com/vi/NIIvuQu4n7A/hqdefault.jpg"
  },
  {
    "id": 186,
    "title": "Pixies (2015) [1080p]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/wuXn71QRyeE",
    "thumbnail": "https://img.youtube.com/vi/wuXn71QRyeE/hqdefault.jpg"
  },
  {
    "id": 187,
    "title": "The Langoliers (1995) [360p]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/NYCidzby9MM",
    "thumbnail": "https://img.youtube.com/vi/NYCidzby9MM/hqdefault.jpg"
  },
  {
    "id": 188,
    "title": "The Stuff (1985) [360]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/peVF9tSlfW4",
    "thumbnail": "https://img.youtube.com/vi/peVF9tSlfW4/hqdefault.jpg"
  },
  {
    "id": 189,
    "title": "Mac and Me (1988) [360]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/uQOtLBCQCpI&t=10s",
    "thumbnail": "https://img.youtube.com/vi/uQOtLBCQCpI&t=10s/hqdefault.jpg"
  },
  {
    "id": 190,
    "title": "M (1931) [480p] - German with English subtitles",
    "genre": [
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/jJ6Z8jn-BQQ",
    "thumbnail": "https://img.youtube.com/vi/jJ6Z8jn-BQQ/hqdefault.jpg"
  },
  {
    "id": 191,
    "title": "Limbo (2018-19) [1080p]",
    "genre": [
      "Adventure",
      "Drama",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/BC6LNnlr_2c",
    "thumbnail": "https://img.youtube.com/vi/BC6LNnlr_2c/hqdefault.jpg"
  },
  {
    "id": 192,
    "title": "Big Bad Wolf (2006)",
    "genre": [
      "Comedy",
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/Aw-GiVq14uo",
    "thumbnail": "https://img.youtube.com/vi/Aw-GiVq14uo/hqdefault.jpg"
  },
  {
    "id": 193,
    "title": "Matilda (1996) [720]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/JvvS4hBXJkE",
    "thumbnail": "https://img.youtube.com/vi/JvvS4hBXJkE/hqdefault.jpg"
  },
  {
    "id": 194,
    "title": "Father Of The Bride Part II (1995) [720]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/fKhwP4gvq-k",
    "thumbnail": "https://img.youtube.com/vi/fKhwP4gvq-k/hqdefault.jpg"
  },
  {
    "id": 195,
    "title": "Lightning Jack (1994) [480]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/mHrk4yPEj0Q",
    "thumbnail": "https://img.youtube.com/vi/mHrk4yPEj0Q/hqdefault.jpg"
  },
  {
    "id": 196,
    "title": "The Skateboard Kid (1993) [480]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/3zYt_glkEcI",
    "thumbnail": "https://img.youtube.com/vi/3zYt_glkEcI/hqdefault.jpg"
  },
  {
    "id": 197,
    "title": "The Glimmer Man (1996) [360]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/N1CremtoLxo",
    "thumbnail": "https://img.youtube.com/vi/N1CremtoLxo/hqdefault.jpg"
  },
  {
    "id": 198,
    "title": "Deep Rising (1998) [360]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/j-EjlVFOeUQ",
    "thumbnail": "https://img.youtube.com/vi/j-EjlVFOeUQ/hqdefault.jpg"
  },
  {
    "id": 199,
    "title": "Robot Overlords (2015) [1080p]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/6BIgQ4hDPiQ",
    "thumbnail": "https://img.youtube.com/vi/6BIgQ4hDPiQ/hqdefault.jpg"
  },
  {
    "id": 200,
    "title": "The 27th Day (1957) [720p]",
    "genre": [
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/57JkQASO_SE",
    "thumbnail": "https://img.youtube.com/vi/57JkQASO_SE/hqdefault.jpg"
  },
  {
    "id": 201,
    "title": "McHale’s Navy (1964) [480p]",
    "genre": [
      "Comedy",
      "War"
    ],
    "link": "https://www.youtube.com/embed/wNZMFUhmRSU",
    "thumbnail": "https://img.youtube.com/vi/wNZMFUhmRSU/hqdefault.jpg"
  },
  {
    "id": 202,
    "title": "Behind Enemy Lines (1986) [480p] A.K.A \"P.O.W. the Escape\" and \"Attack Force 'Nam\", English subtitles",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "War"
    ],
    "link": "https://www.youtube.com/embed/d3py8n9ixKU",
    "thumbnail": "https://img.youtube.com/vi/d3py8n9ixKU/hqdefault.jpg"
  },
  {
    "id": 203,
    "title": "Eye of the Cat (1969) [720p]",
    "genre": [
      "Horror"
    ],
    "link": "https://www.youtube.com/embed/FdhE3qHwejw",
    "thumbnail": "https://img.youtube.com/vi/FdhE3qHwejw/hqdefault.jpg"
  },
  {
    "id": 204,
    "title": "White Mischief (1987) [360p]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/mBP_oSt6qq8",
    "thumbnail": "https://img.youtube.com/vi/mBP_oSt6qq8/hqdefault.jpg"
  },
  {
    "id": 205,
    "title": "The Wasp Woman (1959) [1080p] Extended TV-cut, English subtitles",
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/x_3cBRuw_Pw",
    "thumbnail": "https://img.youtube.com/vi/x_3cBRuw_Pw/hqdefault.jpg"
  },
  {
    "id": 206,
    "title": "Switch (2008) [360p]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/AuefZFXao98",
    "thumbnail": "https://img.youtube.com/vi/AuefZFXao98/hqdefault.jpg"
  },
  {
    "id": 207,
    "title": "Breathless (1960) [240p] Directed By Jean-Luc Godard",
    "genre": [
      "Action",
      "Adventure",
      "Mystery",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/5RkH3V_MAs8",
    "thumbnail": "https://img.youtube.com/vi/5RkH3V_MAs8/hqdefault.jpg"
  },
  {
    "id": 208,
    "title": "Walrus Yes: The Making of Tusk (2019) [720p] HD",
    "genre": [
      "Documentary"
    ],
    "link": "https://www.youtube.com/embed/h2IKoonFHJc",
    "thumbnail": "https://img.youtube.com/vi/h2IKoonFHJc/hqdefault.jpg"
  },
  {
    "id": 209,
    "title": "Invaders from Mars (1986) [720p]",
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/Rw2vgsTC8rQ",
    "thumbnail": "https://img.youtube.com/vi/Rw2vgsTC8rQ/hqdefault.jpg"
  },
  {
    "id": 210,
    "title": "Oliver Twist (1982) [480p]",
    "genre": [
      "Romance",
      "Action",
      "Fantasy"
    ],
    "link": "https://www.youtube.com/embed/MGOp9rwj1MY",
    "thumbnail": "https://img.youtube.com/vi/MGOp9rwj1MY/hqdefault.jpg"
  },
  {
    "id": 211,
    "title": "The Secret of Nimh (1982) [1080p]",
    "genre": [
      "Action",
      "Adventure"
    ],
    "link": "https://www.youtube.com/embed/Ja8TsLgOGfI",
    "thumbnail": "https://img.youtube.com/vi/Ja8TsLgOGfI/hqdefault.jpg"
  },
  {
    "id": 212,
    "title": "The Battle Of Algiers (1966) [240p] Directed By Gillo Pontecorvo",
    "genre": [
      "Drama",
      "War"
    ],
    "link": "https://www.youtube.com/embed/f_N2wyq7fCE",
    "thumbnail": "https://img.youtube.com/vi/f_N2wyq7fCE/hqdefault.jpg"
  },
  {
    "id": 213,
    "title": "Z (1969) [720p] Directed By Costa-Gavras",
    "genre": [
      "Crime",
      "Drama",
      "History",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/RBiT0_poxEU",
    "thumbnail": "https://img.youtube.com/vi/RBiT0_poxEU/hqdefault.jpg"
  },
  {
    "id": 214,
    "title": "Hyperbolae of Youth (1956) [480p] [English Closed Captions]",
    "genre": [
      "Action",
      "Adventure"
    ],
    "link": "https://www.youtube.com/embed/cVxQGfWDBR8",
    "thumbnail": "https://img.youtube.com/vi/cVxQGfWDBR8/hqdefault.jpg"
  },
  {
    "id": 215,
    "title": "Blast (1997) [360p]",
    "genre": [
      "Action"
    ],
    "link": "https://www.youtube.com/embed/9SiQOfi3mFE",
    "thumbnail": "https://img.youtube.com/vi/9SiQOfi3mFE/hqdefault.jpg"
  },
  {
    "id": 216,
    "title": "Shoah, Pt. I (1985) [360p] Directed By Claude Lanzmann",
    "genre": [
      "Documentary",
      "History",
      "War"
    ],
    "link": "https://www.youtube.com/embed/_n7_gSUVCwc",
    "thumbnail": "https://img.youtube.com/vi/_n7_gSUVCwc/hqdefault.jpg"
  },
  {
    "id": 217,
    "title": "Alien from L.A. (1988) [360p]",
    "genre": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/WuEVMB-YqSM",
    "thumbnail": "https://img.youtube.com/vi/WuEVMB-YqSM/hqdefault.jpg"
  },
  {
    "id": 218,
    "title": "Shoah, Pt. II (1985) [360p] Directed By Claude Lanzmann",
    "genre": [
      "Documentary",
      "History",
      "War"
    ],
    "link": "https://www.youtube.com/embed/HuA7uydNmmU",
    "thumbnail": "https://img.youtube.com/vi/HuA7uydNmmU/hqdefault.jpg"
  },
  {
    "id": 219,
    "title": "Alien Nation: The Udara Legacy (1997) [360p]",
    "genre": [
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/JgcMaKwfj6I",
    "thumbnail": "https://img.youtube.com/vi/JgcMaKwfj6I/hqdefault.jpg"
  },
  {
    "id": 220,
    "title": "Alien Nation (1989) [360p] tv pilot",
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/xXFLlkT-BOA",
    "thumbnail": "https://img.youtube.com/vi/xXFLlkT-BOA/hqdefault.jpg"
  },
  {
    "id": 221,
    "title": "Alice In Wonderland (1915) [240p]",
    "genre": [
      "Action",
      "Adventure"
    ],
    "link": "https://www.youtube.com/embed/Ubv7UCxijl8",
    "thumbnail": "https://img.youtube.com/vi/Ubv7UCxijl8/hqdefault.jpg"
  },
  {
    "id": 222,
    "title": "The Star Wars Holiday Special (1978) [480p]",
    "genre": [
      "Adventure",
      "Family",
      "Musical",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/6hH8rxarVG8",
    "thumbnail": "https://img.youtube.com/vi/6hH8rxarVG8/hqdefault.jpg"
  },
  {
    "id": 223,
    "title": "XIII The Conspiracy 2008 HD",
    "genre": [
      "Action",
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/lan21rW9eB0&feature=share",
    "thumbnail": "https://img.youtube.com/vi/lan21rW9eB0&feature=share/hqdefault.jpg"
  },
  {
    "id": 224,
    "title": "Andrei Rublev (1966) [1080p] Directed By Andrei Tarkovsky",
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "link": "https://www.youtube.com/embed/VkCeEYuMyOY",
    "thumbnail": "https://img.youtube.com/vi/VkCeEYuMyOY/hqdefault.jpg"
  },
  {
    "id": 225,
    "title": "Nostalghia (1983) [1080p] Directed By Andrei Tarkovsky",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/oHeU5voLr3Q&t=554s",
    "thumbnail": "https://img.youtube.com/vi/oHeU5voLr3Q&t=554s/hqdefault.jpg"
  },
  {
    "id": 226,
    "title": "Rain Man (1988) [1080]",
    "genre": [
      "Action",
      "Adventure"
    ],
    "link": "https://www.youtube.com/embed/jlAX_j04Lp0",
    "thumbnail": "https://img.youtube.com/vi/jlAX_j04Lp0/hqdefault.jpg"
  },
  {
    "id": 227,
    "title": "The Sacrifice (1986) [720p] Directed By Andrei Tarkovsky",
    "genre": [
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/AhiC9bcoriU",
    "thumbnail": "https://img.youtube.com/vi/AhiC9bcoriU/hqdefault.jpg"
  },
  {
    "id": 228,
    "title": "Nameless Stars (1959) [480p] [English Closed Captions]",
    "genre": [
      "Action",
      "Adventure"
    ],
    "link": "https://www.youtube.com/embed/uLGohfl21ac",
    "thumbnail": "https://img.youtube.com/vi/uLGohfl21ac/hqdefault.jpg"
  },
  {
    "id": 229,
    "title": "My Science Project (1985) [360p] 1h34m",
    "genre": [
      "Action",
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/aoYLlVqGea0",
    "thumbnail": "https://img.youtube.com/vi/aoYLlVqGea0/hqdefault.jpg"
  },
  {
    "id": 230,
    "title": "Solaris (1972) [720p] Directed By Andrei Tarkovsky",
    "genre": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/LutMHAeCfLU",
    "thumbnail": "https://img.youtube.com/vi/LutMHAeCfLU/hqdefault.jpg"
  },
  {
    "id": 231,
    "title": "Wild 7 (1994) [240p]",
    "genre": [
      "Mystery",
      "Adventure"
    ],
    "link": "https://www.youtube.com/embed/HUjHGtfAQEg",
    "thumbnail": "https://img.youtube.com/vi/HUjHGtfAQEg/hqdefault.jpg"
  },
  {
    "id": 232,
    "title": "Flaming Swords (1977) [360p]",
    "genre": [
      "Action",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/Q7d_iXz1B40",
    "thumbnail": "https://img.youtube.com/vi/Q7d_iXz1B40/hqdefault.jpg"
  },
  {
    "id": 233,
    "title": "Johnny O'Clock (1947) [480p]",
    "genre": [
      "Crime",
      "Drama",
      "Film-Noir",
      "Thriller"
    ],
    "link": "https://www.youtube.com/embed/2eC775Wu9TU",
    "thumbnail": "https://img.youtube.com/vi/2eC775Wu9TU/hqdefault.jpg"
  },
  {
    "id": 234,
    "title": "Biggles: Adventures In Time (1986) [480p]",
    "genre": [
      "Mystery",
      "Adventure"
    ],
    "link": "https://www.youtube.com/embed/eoY8-wUim8k",
    "thumbnail": "https://img.youtube.com/vi/eoY8-wUim8k/hqdefault.jpg"
  },
  {
    "id": 235,
    "title": "Chafed Elbows (1966) [360p] Directed by Robert Downey Sr",
    "genre": [
      "Comedy"
    ],
    "link": "https://www.youtube.com/embed/_pgmOOy9s7c",
    "thumbnail": "https://img.youtube.com/vi/_pgmOOy9s7c/hqdefault.jpg"
  },
  {
    "id": 236,
    "title": "A Separation (2011) [480p]",
    "genre": [
      "Drama",
      "Mystery"
    ],
    "link": "https://www.youtube.com/embed/RWRahIv8okc",
    "thumbnail": "https://img.youtube.com/vi/RWRahIv8okc/hqdefault.jpg"
  },
  {
    "id": 237,
    "title": "Domain of Murder (1992) [480p] [English Closed Captions]",
    "genre": [
      "Mystery",
      "Adventure"
    ],
    "link": "https://www.youtube.com/embed/iWz0MiP4Sqc",
    "thumbnail": "https://img.youtube.com/vi/iWz0MiP4Sqc/hqdefault.jpg"
  },
  {
    "id": 238,
    "title": "Gappa the Triphibian Monsters (1967) [360p] [Japanese] [English Subs] Daikyojû Gappa",
    "genre": [
      "Comedy",
      "Family",
      "Horror",
      "Sci-Fi"
    ],
    "link": "https://www.youtube.com/embed/0I1wyjg3bi0",
    "thumbnail": "https://img.youtube.com/vi/0I1wyjg3bi0/hqdefault.jpg"
  },
  {
    "id": 239,
    "title": "Flames (1932) [720p]",
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "link": "https://www.youtube.com/embed/DlFre6zkzK8",
    "thumbnail": "https://img.youtube.com/vi/DlFre6zkzK8/hqdefault.jpg"
  }
]