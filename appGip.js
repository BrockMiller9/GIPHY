// async function getGif(token) {
//   const res = await axios.get("api.giphy.com/v1/gifs/search"),  params: { token } };
//   console.log(res);
// }
const myToken = "3HyZhdeW1gTWrQRvFVsSBS1Ye70ox99k";
const search = document.querySelector("input");
const searchButton = document.getElementById("search");
const searchValue = search.value;

searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  getUsers(myToken, search.value);
  search.value = "";
});

async function getUsers(token, tag) {
  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/random?api_key=${token}&tag=${tag}&limit=1`
  );
  console.log(res.data.data.images.original.url);
  const imgUrl = res.data.data.images.original.url;
  const image = document.createElement("img");
  image.src = imgUrl;
  const container = document.getElementById("results");
  container.appendChild(image);
  console.log(search.value);
}

const remove = document.getElementById("remove");
remove.addEventListener("click", function (e) {
  e.preventDefault();
  const image = document.querySelector("img");
  image.remove();
});
