 //Calender api
      //select DOM elements
      calenderElement = document.querySelector(".calender-api");

      //get calender
      const getCalender = async function () {
        const res = await fetch(
          "https://kaaryar0506reactblog.liara.run/current/time"
        );
        const data = await res.json();

        calenderElement.innerHTML += `<h3>${data.shamsi.dayInMonth}<span> </span>${data.shamsi.month}</h3>
       <ul><li>${data.islamicHijri.year}/${data.islamicHijri.month}/${data.islamicHijri.dayInMonth}</li>
         <li> ${data.miladi.year}/${data.miladi.month}/${data.miladi.dayInMonth}</li></ul>
          <div><select  id="select-item"><option>تایمر</option></select>
            <select id="select-item"><option>اوقات شرعی</option></select></div>`;
      };
      getCalender();