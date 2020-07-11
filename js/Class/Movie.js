import { Storage } from '../Services/Storage.js';
const STORAGE = new Storage();
const data = [{
        "Title": "B",
        "Year": "2015",
        "Rated": "N/A",
        "Released": "20 Sep 2015",
        "Runtime": "80 min",
        "Genre": "Crime, Drama",
        "Director": "David Ilundain",
        "Writer": "Jordi Casanovas (play), David Ilundain (adaptation)",
        "Actors": "Pedro Casablanc, Manolo Solo, Pedro Civera, Eduardo Recabarren",
        "Plot": "15th July 2013. Old party treasurer, Luis Barcenas, is transferred from the prison to court in order to testify. Up until now, he's denied any connection with the so-called Barcenas Paper's which proof the existence of an unofficial accounting system inside the conservative Spanish party (Partido Popular). However, after 18 days in prison, he decides to change his statement. This films portrays what happened that day in that court room.",
        "Language": "Spanish",
        "Country": "Spain",
        "Awards": "8 wins & 9 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDhlZmRlNmMtYmMyYy00Zjg0LWI0ZmQtYzNiNWM5YTU4YTI3XkEyXkFqcGdeQXVyNjQ0NjY3MDY@._V1_SX300.jpg",
        "Ratings": [{
            "Source": "Internet Movie Database",
            "Value": "6.7/10"
        }],
        "Metascore": "N/A",
        "imdbRating": "6.7",
        "imdbVotes": "482",
        "imdbID": "tt4679438",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    { "Title": "Fate/stay night: Unlimited Blade Works", "Year": "2014–2015", "Rated": "TV-14", "Released": "04 Oct 2014", "Runtime": "24 min", "Genre": "Animation, Action, Fantasy", "Director": "N/A", "Writer": "N/A", "Actors": "Mela Lee, Bryce Papenbrook, Noriaki Sugiyama, Kana Ueda", "Plot": "A group of seven mages gets chosen to become masters of seven classes of heroic spirits, in order to fight and win the Holy Grail.", "Language": "Japanese, English", "Country": "Japan", "Awards": "1 win & 2 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BOTg5ZjI5ZTAtOWE2OS00MjY4LWI4ZDQtMzEzMDY4MTgzYWJlXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.0/10" }], "Metascore": "N/A", "imdbRating": "8.0", "imdbVotes": "5,420", "imdbID": "tt3621796", "Type": "series", "totalSeasons": "2", "Response": "True" },
    { "Title": "Batman", "Year": "1989", "Rated": "PG-13", "Released": "23 Jun 1989", "Runtime": "126 min", "Genre": "Action, Adventure", "Director": "Tim Burton", "Writer": "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)", "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl", "Plot": "Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there's a new crime fighter in town - Batman (Michael Keaton). Grissom's right-hand man is Jack Napier (Jack Nicholson), a brutal man who is not entirely sane... After falling out between the two Grissom has Napier set up with the Police and Napier falls to his apparent death in a vat of chemicals. However, he soon reappears as The Joker and starts a reign of terror in Gotham City. Meanwhile, reporter Vicki Vale (Kim Basinger) is in the city to do an article on Batman. She soon starts a relationship with Batman's everyday persona, billionaire Bruce Wayne.", "Language": "English, French, Spanish", "Country": "USA, UK", "Awards": "Won 1 Oscar. Another 8 wins & 26 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.5/10" }, { "Source": "Rotten Tomatoes", "Value": "71%" }, { "Source": "Metacritic", "Value": "69/100" }], "Metascore": "69", "imdbRating": "7.5", "imdbVotes": "329,552", "imdbID": "tt0096895", "Type": "movie", "DVD": "25 Mar 1997", "BoxOffice": "N/A", "Production": "Warner Bros. Pictures", "Website": "N/A", "Response": "True" },
    { "Title": "Fate/Stay Night: Heaven's Feel - I. Presage Flower", "Year": "2017", "Rated": "TV-MA", "Released": "14 Oct 2017", "Runtime": "120 min", "Genre": "Animation, Action, Drama, Fantasy", "Director": "Tomonori Sudô", "Writer": "Jalen K. Cassell (adr script), Akira Hiyama (screenplay), Kinoko Nasu (novels)", "Actors": "Bryce Papenbrook, Noriaki Sugiyama, Noriko Shitaya, Cristina Valenzuela", "Plot": "Emiya Shirou is a young magus who attends Homurahara Academy in Fuyuki City. One day after cleaning the Archery Dojo in his school, he catches a glimpse of a fight between superhuman beings, and he gets involved in the Holy Grail War, a ritual where magi called Masters fight each other with their Servants to win the Holy Grail. Shirou joins the battle to stop an evildoer from winning the Grail and to save innocent people, but everything goes wrong when a mysterious \"Shadow\" begins to indiscriminately kill people in Fuyuki...", "Language": "Japanese", "Country": "Japan", "Awards": "N/A", "Poster": "https://m.media-amazon.com/images/M/MV5BODljMTI0MDQtMTY2Mi00YjljLThhZTItYjc4MWViMWM5M2RiXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.4/10" }], "Metascore": "N/A", "imdbRating": "7.4", "imdbVotes": "1,321", "imdbID": "tt4054952", "Type": "movie", "DVD": "N/A", "BoxOffice": "N/A", "Production": "Azoland Pictures", "Website": "N/A", "Response": "True" },
    { "Title": "Pokemon 4Ever: Celebi - Voice of the Forest", "Year": "2001", "Rated": "G", "Released": "11 Oct 2002", "Runtime": "75 min", "Genre": "Animation, Action, Adventure, Family, Fantasy, Sci-Fi", "Director": "Kunihiko Yuyama, Jim Malone", "Writer": "Hideki Sonoda (screenplay), Michael Haigney, Hideki Sonoda", "Actors": "Rica Matsumoto, Veronica Taylor, Rachael Lillis, Ikue Ôtani", "Plot": "In this film, we meet the new Pokémon, Celebi, who has the power to travel through time. Vicious, the future descendant of James and Jessie of Team Rocket, travels back in time to wreak havoc, and it's up to young Ash, Pikachu and friends to stop him. Along the way, Ash continues to mature into the unstoppable Pokémon trainer he will become in the future.", "Language": "Japanese", "Country": "Japan", "Awards": "N/A", "Poster": "https://m.media-amazon.com/images/M/MV5BZDZiYjc3MWYtODE5Mi00MDM5LWFkZTAtNjAzZmUxMzc4ZGQxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "5.7/10" }], "Metascore": "N/A", "imdbRating": "5.7", "imdbVotes": "7,600", "imdbID": "tt0287635", "Type": "movie", "DVD": "N/A", "BoxOffice": "N/A", "Production": "N/A", "Website": "N/A", "Response": "True" },
    { "Title": "Fate/stay night [Heaven's Feel] II. lost butterfly", "Year": "2019", "Rated": "N/A", "Released": "14 Mar 2019", "Runtime": "117 min", "Genre": "Animation, Drama, Fantasy", "Director": "Tomonori Sudô", "Writer": "Kinoko Nasu (manga)", "Actors": "Yu Asakawa, Michael Donovan, Melissa Fahn, Crispin Freeman", "Plot": "The story focuses on the Holy Grail War and explores the relationship between Shirou Emiya and Sakura Matou, two teenagers participating in this conflict. The story continues immediately ...", "Language": "N/A", "Country": "Japan", "Awards": "N/A", "Poster": "https://m.media-amazon.com/images/M/MV5BZjM0ZmIwNjEtNDE4YS00MDQ2LWI2ZTMtYTNkZmMwN2YyZmMwXkEyXkFqcGdeQXVyNzEyMDQ1MDA@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.0/10" }], "Metascore": "N/A", "imdbRating": "8.0", "imdbVotes": "801", "imdbID": "tt8091892", "Type": "movie", "DVD": "N/A", "BoxOffice": "N/A", "Production": "N/A", "Website": "N/A", "Response": "True" },
    { "Title": "The Avengers", "Year": "2012", "Rated": "PG-13", "Released": "04 May 2012", "Runtime": "143 min", "Genre": "Action, Adventure, Sci-Fi", "Director": "Joss Whedon", "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)", "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth", "Plot": "Nick Fury is the director of S.H.I.E.L.D., an international peace-keeping agency. The agency is a who's who of Marvel Super Heroes, with Iron Man, The Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When global security is threatened by Loki and his cohorts, Nick Fury and his team will need all their powers to save the world from disaster.", "Language": "English, Russian, Hindi", "Country": "USA", "Awards": "Nominated for 1 Oscar. Another 38 wins & 79 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.0/10" }, { "Source": "Rotten Tomatoes", "Value": "92%" }, { "Source": "Metacritic", "Value": "69/100" }], "Metascore": "69", "imdbRating": "8.0", "imdbVotes": "1,234,641", "imdbID": "tt0848228", "Type": "movie", "DVD": "25 Sep 2012", "BoxOffice": "$623,279,547", "Production": "Walt Disney Pictures", "Website": "N/A", "Response": "True" },
    { "Title": "Darasingh: Ironman", "Year": "1964", "Rated": "N/A", "Released": "N/A", "Runtime": "N/A", "Genre": "Action, Adventure, Drama", "Director": "Kedar Kapoor", "Writer": "M.R. Bakhri, Prem Dhawan (lyrics), Brij Katyal (dialogue)", "Actors": "Dara Singh, Nishi, Jeevan, Tiwari", "Plot": "A wood-cutter by profession, Dara Singh lives a poor lifestyle in a village along with his widowed mother, sister - Lajjoo, and brother, Nazuk. One day he comes to the assistance of Raj Nartaki Madhumati, who rewards him a gold Mohar, which Dara refuses but Nazuk pockets. Nazuk is subsequently arrested by the Police for theft, and is released only when Dara forcibly abducts Madhumati to testify on his behalf. Subsequently Madhumati falls in love with Dara, much to the chagrin of Mahamantri, who arrests Dara, imprisons, then tortures him, and also attempts to crush him under the feet of an elephant albeit in vain. Dara manages to escape along with his mother, the Police come hunting for him, entrap Lajjoo and set their hut on fire. Lajjoo is rescued by a young man named Budhwa and both fall in love with each other. Shortly thereafter, Mahamantri abducts Dara's mother and holds her for ransom until Dara surrenders. Dara must now decide whether to protect himself or surrender and save his mother from the hands of Mahamantri - who has already killed the Maharaj and is all set to crown himself as Maharaj. Dara also does not know that Budhwa is not who he claims to be.", "Language": "Hindi", "Country": "India", "Awards": "N/A", "Poster": "N/A", "Ratings": [{ "Source": "Internet Movie Database", "Value": "5.6/10" }], "Metascore": "N/A", "imdbRating": "5.6", "imdbVotes": "9", "imdbID": "tt0231426", "Type": "movie", "DVD": "N/A", "BoxOffice": "N/A", "Production": "N/A", "Website": "N/A", "Response": "True" },
    { "Title": "Naruto", "Year": "2002–2007", "Rated": "TV-Y7-FV", "Released": "10 Sep 2005", "Runtime": "24 min", "Genre": "Animation, Action, Adventure, Comedy, Fantasy, Thriller", "Director": "N/A", "Writer": "Masashi Kishimoto", "Actors": "Junko Takeuchi, Maile Flanagan, Kate Higgins, Chie Nakamura", "Plot": "Many years ago, in the hidden village of Konoha, lived a great demon fox. When it swung one of it's nine tails, a tsunami occurred. The fourth hokage sealed this demon fox inside a boy in exchange for his own life. Naruto was that boy, and he grew up with no family, and the villagers hated him thinking that he himself was the demon fox. Naruto's dream is to become Hokage, and have the villagers acknowledge him.", "Language": "English, Russian, Japanese", "Country": "Japan", "Awards": "N/A", "Poster": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.3/10" }], "Metascore": "N/A", "imdbRating": "8.3", "imdbVotes": "63,900", "imdbID": "tt0409591", "Type": "series", "totalSeasons": "1", "Response": "True" },
    { "Title": "Fate", "Year": "2001", "Rated": "N/A", "Released": "09 Nov 2001", "Runtime": "119 min", "Genre": "Drama", "Director": "Zeki Demirkubuz", "Writer": "Albert Camus (novel), Zeki Demirkubuz", "Actors": "Serdar Orçin, Zeynep Tokus, Engin Günaydin, Demir Karahan", "Plot": "Musa, who works as a bookkeeper in the customs office, believes in the emptiness and absurdity of life. He doesn't struggle to change his life; he lets himself flow along with events because he thinks that it all leads to the same end. The death of his mother doesn't affect him. Although he loves her, her death makes him joyful. In order to avoid making any decisions he marries a girl whom he doesn't like, because she wants it. Whereas in his world, people deal with their fate by their own will and power. Musa is arrested for the death of a mother and her two kids. However, he doesn't react to this event either...", "Language": "Turkish", "Country": "Turkey", "Awards": "8 wins & 1 nomination.", "Poster": "https://m.media-amazon.com/images/M/MV5BNjEzNTUxOTE0MF5BMl5BanBnXkFtZTgwMTA2OTk1MDE@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.7/10" }], "Metascore": "N/A", "imdbRating": "7.7", "imdbVotes": "3,389", "imdbID": "tt0287803", "Type": "movie", "DVD": "N/A", "BoxOffice": "N/A", "Production": "N/A", "Website": "N/A", "Response": "True" }
];

export function Movie() {}

Movie.prototype.template = function(data) {
    return `
        <div class="movies__body--card">
            <div class="movies__body--card-row">
                <img class="body__card--img" src="${this.getUrlPoster(data.Poster)}" alt="poster" />
                <i class="fas fa-heart ${this.addClass(data.imdbID)}" title="add favorite" data-idm="${data.imdbID}"></i>
            </div>
            <span class="body__card--score">
                <i class="fas fa-star"></i>${data.imdbRating}
            </span>
            <h3 class="body__card--title">${data.Title}</h3>
            <a href="./movie.html?q=${data.imdbID}" class="body__card--button">
                <i class="far fa-eye"></i> Ver
            </a>
        </div>
    `;
}
Movie.prototype.getUrlPoster = function(url) {
    return (url === "N/A" || url === null) ? '../img/no_image.jpg' : url;
}
Movie.prototype.listAll = function(elementHtml) {
    if (elementHtml === null) return;
    let html = '';
    for (const iterator of data) {
        html += this.template(iterator);
    }
    elementHtml.innerHTML = html;
}

Movie.prototype.addClass = function(id) {
    return STORAGE.existsID(id) ? 'favorite_active' : '';
}