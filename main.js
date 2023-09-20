//  let promise= fetch(url);
let container = document.querySelector(".container");
let cards;
//  promise.then((value)=>{
// return value.json();
//  })
//  .then((value)=>{
//     for(let contest of value)
//     { console.log(contest);}
//  })
//let api1="https://dictionaryapi.dev/";
let url;
onload = () => {
    url = "https://kontests.net/api/v1/all";
    init();
}

const init = async () => {
    let response = await fetch(url);
    let data = await response.json();
    getFechInfo(data);
};
getFechInfo = (data) => {
    for (let item in data) {//console.log(data[item]);
        generateUI(data[item]);
    }
}
function generateUI(data) {
   // container.innerHTML='';
    console.log(data);
    cards = `<div class='cards'>
           
            <div class='content'>
            <p><span>Site : </span>${data.site}</p>
            <p class='contest-name'><span>Contest Name : </span> ${data.name}</p>
          <p><span>Status : </span> ${data.status}</p>
          <p class="duration"><span>Duration : </span> ${data.duration}</p>
          <p><span>in 24 hours :</span> "${data.in_24_hours}"</p>
          <p class="starts-at"><span>Starting Time : </span> ${data.start_time}</p>
          <p class="end-at"><span>Ending Time : </span> ${data.end_time}</p>
          
          </div>
          <div class=button-control>
          <a href=${data.url} target=_blank><button class="card-image">Show More</button></a>
          </div>
         <a href=${data.url} target=_blank><div class="overlay"></div></a>
    </div>`;
    container.innerHTML +=cards;

}




