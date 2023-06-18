 const api_key = "08514f33d99c0440037827bb822e3506";
 const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


  const serach = document.querySelector('input');
  console.log(serach);
  const btn = document.getElementById('btn');
  console.log(btn);

  const weatericon = document.querySelector('.weathericon');
  console.log('weathericon');

  const arr = async (city)=>{
    const res = await fetch(url + city + `&appid=${api_key}`);

    if(res.status == 404 ){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{

    
    const data = await res.json()
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".maxtemp").innerHTML = Math.floor(data.main.temp_max)+"°C";
    document.querySelector(".mintem").innerHTML = Math.floor(data.main.temp_min)+"°C";
    document.querySelector(".fills").innerHTML = Math.floor(data.main.feels_like)+"°C";
    document.querySelector(".sunup").innerHTML = new Date(data.sys.sunrise*1000);
    document.querySelector(".sundown").innerHTML =new Date( data.sys.sunset*1000);
    document.querySelector(".country").innerHTML = data.sys.country;

    


   if(data.weather[0].main == "Clouds"){
    weatericon.src = "images/clouds.png";
   }
   else if(data.weather[0].main == "Rain"){
    weatericon.src = "images/rain.png";
   }
  else if (data.weather[0].main == "Clear"){
    weatericon.src = "images/clear.png";
   }
   else if (data.weather[0].main == "Drizzle"){
    weatericon.src = "images/drizzle.png";
   }
   else if (data.weather[0].main == "Mist"){
    weatericon.src = "images/mist.png";
   }

   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";
    }
  }

  btn.addEventListener('click', function(){
    arr(serach.value)
  });

//   const btn11 = document.getElementById('toggle');
// const body = document.querySelector('body');


// btn11.addEventListener('click',function(){
//     this.classList.toggle('bi-moon');
//     if(this.classList.toggle('bi-brightness-high-fill')){
//         body.style.background = 'black';
//          body.style.color = 'white';
//         body.style.transition = '1s';
//     }
//     // else{
//     //     body.style.background = 'black';
//     //      body.style.colort = 'white';
//     //     body.style.transition = '1s';
//     // }
// });

