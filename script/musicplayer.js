var playing = false;


async function jsonget(){
const request = new Request("../json/playlist.json");
const response = await fetch(request);
const playlist = await response.json();
}

jsonget();

console.log(playlist[1].songs[0].name)

function skip(){

}

function play(){

}