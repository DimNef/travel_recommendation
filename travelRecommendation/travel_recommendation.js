const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('ResetSearch');

function correctKeyword(word){
    if (word.slice(0,4) === 'temp'){
        return 'temples';}

    if (word.slice(0,4) === 'beac'){
        return 'beaches';
    }
    if (word.slice(0,4) === 'coun'){
        return 'countries';
    
    }

    
}
function getRecommendation(){
        const input = document.getElementById('keywordInput').value.toLowerCase();
        console.log(input.slice(0,4));
        const test ="countries"
        const resultsDiv = document.getElementById('result');
        resultsDiv.innerHTML = "";
        fetch('travel_recommendation.json')
            .then(response=>response.json())
            .then(data=>{
                if(correctKeyword(input)==='countries'){
                    const recommendation = data.countries;
                    for (let i = 0; i < recommendation.length; i++) {
                       for (let j = 0; j < recommendation[i].cities.length; j++){
                            resultsDiv.innerHTML += `<img src="${recommendation[i].cities[j].imageUrl}" alt="hjh">`;
                            resultsDiv.innerHTML +=  `<h2>${recommendation[i].cities[j].name}</h2>`;    
                            resultsDiv.innerHTML += `<p>${recommendation[i].cities[j].description}</p>`;
                        }

                }
            }
                if(correctKeyword(input)==='temples'){
                    const recommendation = data.temples;
                    for (let i = 0; i < recommendation.length; i++) {
                        resultsDiv.innerHTML += `<img src="${recommendation[i].imageUrl}" alt="hjh">`;
                        resultsDiv.innerHTML +=  `<h2>${recommendation[i].name}</h2>`;    
                        resultsDiv.innerHTML += `<p>${recommendation[i].description}</p>`;
                    }
                }
                if(correctKeyword(input)==='beaches'){
                    const recommendation = data.beaches;
                    for (let i = 0; i < recommendation.length; i++) {
                        resultsDiv.innerHTML += `<img src="${recommendation[i].imageUrl}" alt="hjh">`;
                        resultsDiv.innerHTML +=  `<h2>${recommendation[i].name}</h2>`;    
                        resultsDiv.innerHTML += `<p>${recommendation[i].description}</p>`;
                    }
                
                }

                
                
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
              });
        


    }
function clearResults(){
    const resultsDiv = document.getElementById('result');
    resultsDiv.innerHTML = ""

}

btnSearch.addEventListener('click', getRecommendation);
btnClear.addEventListener('click',clearResults);