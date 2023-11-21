console.log("Hello World");
const url = "https://randomuser.me/api/";

// fetch then

// fetch(url)
// .then((res) =>
//   res.json()

// )
// .then((jsonData)=>{
//   const user = jsonData.results[0]

//   console.log(user);

//   const name = jsonData.results[0].name
//   console.log(name.title+' '+name.first+' '+ name.last);

//   ekranaBas(user)

// })
// .catch((err)=>{
//   console.log(err);

// })

// async await

async function getUser() {
  try {
    const res = await fetch(url);
    const jsonData = await res.json();
    const user = jsonData.results[0];

    ekranaBas(user);
  } catch (err) {
    console.log(err);
  }
}

getUser();

function ekranaBas(user) {
  const { name } = user;
  console.log(user);
  document.querySelector(".name").innerHTML =
    name.title + " " + name.first + " " + name.last;
  document.querySelector(".email").innerHTML = user.email;

  document.querySelector(".img-con img").src = user.picture.large;
  document.querySelector(".adress").innerHTML =
    user.location.street.number +
    " " +
    user.location.street.name +
    " " +
    user.location.city +
    " " +
    user.location.state +
    " " +
    user.location.country +
    " " +
    user.location.postcode;
  console.log(document.querySelector(".img-con img"));
  document.querySelector(".btn.random").addEventListener("click", getUser);
}
