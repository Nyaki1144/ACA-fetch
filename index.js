const lists = document.querySelector(".lists");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const lists = document.querySelector(".lists");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((el) => el.json())
    .then((el) =>
      el.forEach((element) => {
        const li = document.createElement("li");
        li.classList.add = "list";

        li.innerHTML = `
                                <div class="userId">${element.userId}</div>
                                <div class="id">${element.id}</div>
                                <div class="title">${element.title}</div>
                                <div class="body">${element.body}</div>
                             `;

        lists.append(li);
      })
    );
});
