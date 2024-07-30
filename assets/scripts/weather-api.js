//Weather api
      //select Dom Elements
      wheatherElements = document.querySelector(".weather-api");

      const getWheather = async function () {
        const res = await fetch(
          "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light"
        );
        const data = await res.json();

        const obj = {};
        data.forEach((element, index) => {
          obj[`${index}`] = element;
        });
        const wheatherObj = obj[0];

        wheatherElements.innerHTML += `<h1>${Math.floor(wheatherObj.current)}</h1>
        <h2>${wheatherObj.customDescription.text}<span>${wheatherObj.customDescription.emoji}</span></h2>
        <p>حداکثر ${Math.floor(wheatherObj.max)}<span>.</span>حداقل ${Math.floor(wheatherObj.min)}</p>
        <select id="select-item"><option>پیش بینی</option></select>`;
      };
      getWheather();