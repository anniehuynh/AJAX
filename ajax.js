'use strict';
const fetchShow = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const form = document.querySelector('#search-form');
const query = document.querySelector('#query');
const target = document.querySelector('#target');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); //tell the app not to do the default action

    //concat in html: form.action + "?q=" + id query's value entered by user
    const url = form.action + '?q=' + query.value;
    const tvShows = await fetchShow(url);
    console.log(tvShows);


    tvShows.forEach((show) => {
            const article = document.createElement('article');
            const header = document.createElement('header');
            const h2 = document.createElement('h2');
            const a = document.createElement('a');
            const link = document.createElement('div');
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const summary = document.createElement('p');
    
            h2.innerHTML = show.show.name;
            if (show.show.image.medium != "") {
                img.src = show.show.image.medium;
    
            } else { img.innerText = "No image available" };
    
            summary.innerHTML = show.show.summary;
    
            if (show.show.officialSite != null) {
                a.href = show.show.officialSite;
                a.innerText = "Official Site";
            } else { a.innerText = "No Official Site"; };
    
            header.appendChild(h2);
            figure.appendChild(img);
            link.appendChild(a);
    
            article.appendChild(header);
            article.appendChild(link);
            article.appendChild(figure);
            article.appendChild(summary);
    
            target.appendChild(article);
        });

});
