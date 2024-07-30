 //ToDo List
      //URL
      const url = "http://localhost:3000";

      //select DOM elements
      formElement = document.querySelector(".my-task-list-form");
      inputElement = document.querySelector(".input-task");
      ulListElement = document.querySelector(".task-lists-ul");

      //create task list
      const createElements = async function (x) {
        const data = {
          myTask: `${x}`,
        };
        const response = await fetch(url + "/task-lists", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        });
      };

      //get task list
      const getElement = async function () {
        const response = await fetch(url + "/task-lists");
        const items = await response.json();
        for (const item of items) {
          const liElement = document.createElement("li");
          liElement.innerHTML = `<span class='input-task-span'><img src="./assets/images/icons8-square-24.png" alt=""> ${item.myTask} </span>
         <div class="icons${item.id}" id="${item.id}" style="display: none;">
          <img src="./assets/images/icons8-delete-32.png" class="icons8-delete" id="${item.id}">
          <img src="./assets/images/icons8-edit-48.png" class="icons8-edit"></div>`;

          ulListElement.prepend(liElement);
          inputElement.value = "";

          //Show Delete and edit icons
          liElement.addEventListener("mouseenter", function () {
            divElement = document.querySelector(`.icons${item.id}`);
            divElement.style.display = "block";
          });

          liElement.addEventListener("mouseleave", function () {
            divElement = document.querySelector(`.icons${item.id}`);
            divElement.style.display = "none";
          });
        }
      };

      formElement.addEventListener("submit", function (e) {
        e.preventDefault();
        const inputTaskValue = inputElement.value.trim();
        if (inputElement.value.trim()) {
          createElements(inputTaskValue);
        } else {
          alert("Please Enter Something!");
        }
      });
      getElement();

      //delete task list
      const deleteTask = async function (idTask) {
        const response = await fetch(url + `/task-lists/${idTask}`, {
          method: "DELETE",
        });
      };

      ulListElement.addEventListener("click", function (e) {
        if (e.target.classList.contains("icons8-delete")) {
          const deleteConfirm = confirm("Do You Want to Delete item?");
          if (deleteConfirm) {
            const id = e.target.id;
            deleteTask(id);
          }
        }
      });