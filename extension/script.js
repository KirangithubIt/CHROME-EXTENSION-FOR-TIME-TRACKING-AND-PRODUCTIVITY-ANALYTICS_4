async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=8809b018-e0e7-49e6-b8cc-613e871d95b6&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            //const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);
            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();