function getUser() {
  var searchKeyword = document.getElementById("search").value;
  try {
    fetch("https://api.github.com/users", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.dir(data);
      });
  } catch (err) {
    console.log(err);
  }
}
