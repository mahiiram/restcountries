const maindiv =document.createElement('div');
maindiv.className="container"
document.body.prepend(maindiv)
const wheatherapi = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2faa146a4a31a57667ff4f694a7a95e2`
const restapi = `https://restcountries.com/v3.1/all`
const url  = `${wheatherapi}${restapi}`




const printdata =document.querySelector(".container")


fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
   data.forEach((element) => {
   const card = document.createElement('div')
   card.classList.add('row')
     const detailsHTML = `
     <div id="sample" class="col-lg-4 col-sm-12"> 
     <div class="card">
     <div class="card-header">${element.name.common}</div>
     <img class="card-img-bottom" src="${element.flags.png}">
     </div>
     <div class="card-body">
     <h6>Capital:
     <label id="caph6">${element.capital}</label>
     </h6>
     <h6>Region:
     <label id="regh6">${element.region}</label>
     </h6>
     <h6>Countrycode:
     <label id="codeh6">${element.fifa}</label>
     </h6>
     <h6>lat:
     <label id="lath6">${element.latlng[0].toFixed(2)}</label></br>
      </h6>
      <h6>lang:
     <label id="lath6">${element.latlng[1].toFixed(2)}</label></br>
      </h6>
      <div type="button" class="btn btn-primary popup" >click for weather
        <span class="popuptext" id="myPopup">
        </span></div>
     </div>
     
     </div>`
     
     async function wheather(){
       const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${element.name.common}&appid=a3a45abcc9d397d8502835aa6079ccf6`)
        const newdata =await weather.json()
        console.log(newdata)
        localStorage["jsonData"]=json.stringify(newdata)
        const popuptext = document.getElementsByClassName('popuptext')
        popuptext.innerHTML=`<p>Temperature:${newdata.main.temp}</p><br>
        <p>Humidity:${newdata.main.humidity}</p><br>
        <p>Pressure:${newdata.main.pressure}</p><br>
        <p>Sealevel:${newdata.main.sealevel}</p><br>
        `
      }
      wheather();
     
      card.innerHTML= detailsHTML
      printdata.appendChild(card)
      document.body.append(printdata)  
   });
  
})
  

 