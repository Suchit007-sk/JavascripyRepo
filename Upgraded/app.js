const URL = "https://dragonball-api.com/api/characters/11"

const getFacts=async()=>{
    let response = await fetch(URL);
    console.log(response)
 let data = await response.json();
 console.log(data[0]);
 
};