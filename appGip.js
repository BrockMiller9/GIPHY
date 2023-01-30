// declaring my token which I recieved from the api
// search and search button are hard coded into html
const myToken = "3HyZhdeW1gTWrQRvFVsSBS1Ye70ox99k";
const search = document.querySelector("input");
const searchButton = document.getElementById("search");
const searchValue = search.value;

// adding an EL onto the button so once clicked it will run the getUsers function
// also resetting the input to an empty string
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  getUsers(myToken, search.value);
  search.value = "";
});

// sending a get request to giphy with my key and search tag
// creating a image and setting that src with the url from the data
// appending it to the div 
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

// using a EL to remove the image once the remove button is clicked

const remove = document.getElementById("remove");
remove.addEventListener("click", function (e) {
  e.preventDefault();
  const image = document.querySelector("img");
  image.remove();
});
