const form  = document.querySelector('form');
const container = document.querySelector('#container');
let seachValue = "";
const url = 'https://api.tvmaze.com/search/shows?q='; //?q=breaking bad
let getShows = null;

const searchButton = document.querySelector('button');

const buttonClick = form.addEventListener('submit', async function(e){
    e.preventDefault();

    //Remove past entries
    allResults = document.querySelectorAll('.result');
    if(allResults)
    {
        for(result of allResults)
        {
            result.remove();
        }
    }

    searchValue = form.elements.search.value;
    //console.log(searchValue);

    getShows = await fetchShows(searchValue);

    for (fetchedShow of getShows){
        //console.log(fetchedShow.show.name);
        const newFigure = document.createElement('figure');
        const newImage = document.createElement('img');
        const newCaption = document.createElement('caption');
        
        newFigure.classList.add('result');
        
        newCaption.innerText = fetchedShow.show.name;
        newImage.src = fetchedShow.show.image.medium;
        
        const newLink = document.createElement('a')
        newLink.href = fetchedShow.show.url;

        newLink.appendChild(newImage);
        newFigure.appendChild(newLink);
        newFigure.appendChild(newCaption);
        container.appendChild(newFigure);
    }
    

    form.elements.search.value="";
});

const fetchShows = async function(searchValue){
    try{
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get(url+searchValue, config)
        return res.data;
    }
    catch(e){
        console.log("Error Occured in fetching!!");
    }
}