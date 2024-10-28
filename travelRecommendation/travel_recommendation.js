const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('ResetSearch');
function getRecommendation(){
        const input = document.getElementById('keywordInput').value.toLowerCase();
        const resultsDiv = document.getElementById('result');
        resultsDiv.innerHTML = ""
        fetch('travel_recommendation.json')
            .then(response=>json())
            .then(data=>{
                const recommendation = data.find(item => item.name.toLowerCase() === input);
            })
        
        

    }
function clearResults(){
    const resultsDiv = document.getElementById('result');
    resultsDiv.innerHTML = ""

}

btnSearch.addEventListener('click', getRecommendation);
btnSearch.addEventListener('click',clearResults);