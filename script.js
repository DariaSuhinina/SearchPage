let today = new Date();
console.log(today);
let date = today.getDate();
let month = +today.getMonth() + 1;
let year = today.getFullYear();

      // err.style.display = "block";


if(month < 10){
  month = '0' + month;
}

if(date < 10){
  date = '0' + date;
}

console.log(month);
console.log(date);


{
  let min = `${year}-${month}-${date}`;
  // console.log(min)
  inputEmail4.min = min;
}

function validate() { 
  let startDate = inputEmail4.value;
  console.log(startDate);

  let validDate = startDate.split('');
  console.log(validDate);

  let inputYear = '';
  let inputMonth = '';
  let inputDate = '';

  for (let i = 0; i < validDate.length; i++) {
    if(i <= 3){
      inputYear += validDate[i];
    } else if(i === 5 || i === 6){
      inputMonth += validDate[i];
    } else if(i === 8 || i === 9){
      inputDate += validDate[i];
    }
  }
  console.log(inputYear);
  console.log(inputMonth);
  console.log(inputDate);

  if(inputYear < year){
    console.log('error');
  } else if(inputYear == year){ //string and number
    if(inputMonth < month){
      console.log('error');
    } else if(inputMonth == month){
      if(inputDate < date){
        console.log('error');
      // err.style.display = "block"; //здесь не работает, но если вывести за функцию, то работает
      }
    }
  }

  inputPassword4.min = startDate;

  inputPassword4.addEventListener('change', () => {
    let endDate = inputPassword4.value;
    console.log(endDate);
  
    let validEndDate = endDate.split('');
    console.log(validEndDate);
  
    let inputEndYear = '';
    let inputEndMonth = '';
    let inputEndDate = '';
  
    for (let i = 0; i < validEndDate.length; i++) {
      if(i <= 3){
        inputEndYear += validEndDate[i];
      } else if(i === 5 || i === 6){
        inputEndMonth += validEndDate[i];
      } else if(i === 8 || i === 9){
        inputEndDate += validEndDate[i];
      }
    }
    console.log(inputEndYear);
    console.log(inputEndMonth);
    console.log(inputEndDate);
  
    if(inputEndYear < inputYear){
      console.log('error');
    } else if(inputEndYear === inputYear){
      if(inputEndMonth < inputMonth){
        console.log('error');
      } else if(inputEndMonth === inputMonth){
        if(inputEndDate < inputDate){
          console.log('error');
        }
      }
    }
  });
}

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
  inputEmail4.value = '';
  inputPassword4.value = ''
})

let country = 'https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json';
fetch(country)
  .then(response => response.json())
  .then(countries => {
    for(let key in countries){
      getCountry(key)
      console.log(key);
    }
  });
// debugger;

function getCountry(country) {
  let val = document.createElement('option');
  val.value = country;
  val.innerHTML = country;
  document.querySelector('#inputAddress').appendChild(val);
  // document.querySelector('#inputAddress2').appendChild(val);

}