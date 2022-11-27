`let proxy = "https://corsproxy.io/?"
let URL = "https://api.football-data.org/v4/competitions/WC/standings";
const TOKEN = "4a9242d2a80343008a4b93733aa3fcac";



let teams = document.querySelectorAll('.teams');


    function getGroupsData(){

        fetch(proxy+URL, {
            method: 'GET', 
            headers: {
                'X-Auth-Token': '4a9242d2a80343008a4b93733aa3fcac',
            }
            
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.standings[0].table);
            for(let i = 0; i<=7;i++) // gropus iteration
            {
                let groupData = data.standings[i];
                for(let j = 0 ;j <4 ; j++)// teams iteration
                {
                    teams[i].children[j].children[1].children[0].textContent = data.standings[i].table[j].team.name;
                    teams[i].children[j].children[1].children[1].children[0].textContent = data.standings[i].table[j].playedGames;
                    teams[i].children[j].children[1].children[1].children[1].textContent = data.standings[i].table[j].won;
                    teams[i].children[j].children[1].children[1].children[2].textContent = data.standings[i].table[j].draw;
                    teams[i].children[j].children[1].children[1].children[3].textContent = data.standings[i].table[j].lost;
                    teams[i].children[j].children[1].children[1].children[4].textContent = data.standings[i].table[j].points;
                    teams[i].children[j].children[1].children[1].children[5].textContent = data.standings[i].table[j].goalsFor;
                    teams[i].children[j].children[1].children[1].children[6].textContent = data.standings[i].table[j].goalsAgainst;
                    teams[i].children[j].children[1].children[1].children[7].textContent = data.standings[i].table[j].goalDifference;

                }
            }
            



        })
    }
    

    getGroupsData();`