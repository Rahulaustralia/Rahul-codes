let img = document.getElementById("img");

function getData() {
  return true;
}

let myPromise = new Promise(function (res, rej) {
  let data = false;
  setTimeout(() => {
    data = getData();

    if (data) {
      res("Resolve");
    } else {
      rej("Reject");
    }
  }, 3000);
});

myPromise.then(function (res) {
  img.src =
    "https://media4.giphy.com/media/rf1beuhHrO4MYxpgVt/200w.webp?cid=ecf05e475y3xdf5t3i8gmnin35n2i84hgfhalpot3nasmnfk&ep=v1_gifs_search&rid=200w.webp&ct=g";
});
myPromise.catch(function (err) {
  img.src =
    "https://media3.giphy.com/media/MVgLEacpr9KVK172Ne/200w.webp?cid=ecf05e47fkgadteurnkftr9izu3tvl04g7z1ypvnqr2tn0ob&ep=v1_gifs_search&rid=200w.webp&ct=g";
});
