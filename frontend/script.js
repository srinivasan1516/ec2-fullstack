function getMessage() {
  fetch("http://EC2_PUBLIC_IP:3000/api/message")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.message;
    });
}
