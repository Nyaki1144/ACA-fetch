const btn = document.querySelector(".btn");
const imgWrapper = document.querySelector(".img-wrapper");
imgWrapper.innerHTML = `<img class="img" src="./39.gif" alt="img" />`;

btn.addEventListener("click", () => {
  const lists = document.querySelector(".lists");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((el) => el.json())
    .then((el) =>
      el.forEach((element) => {
        const li = document.createElement("li");

        li.classList.add("list");

        li.innerHTML = `
                                <div class="padd userId">${element.userId}</div>
                                <div class="padd id">${element.id}</div>
                                <div class="color title">${element.title}</div>
                                <div class=" body">${element.body}</div>
                             `;

        lists.append(li);
        imgWrapper.remove();
      })
    );
});
