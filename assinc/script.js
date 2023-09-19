let selLista = document.querySelector(".lista");
async function pegaPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  return data;
}

function preencheLi() {
  pegaPost().then((posts) => {
    posts.forEach((post) => {
      const li = document.createElement("li");
      li.textContent = post.title;
      selLista.appendChild(li);
    });
  });
}
