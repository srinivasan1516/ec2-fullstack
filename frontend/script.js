function getMessage() {
  fetch("http://44.243.40.25:3000")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.message;
    });
}
