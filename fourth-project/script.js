const url = "https://randomuser.me/api/";

const apiFetch = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("---data---: ", data);
    showDataOnUi(data);
  } catch (error) {
    console.log("Fetching data failed: ", error);
  }
};

function showDataOnUi(data){
    const userName = `${data.results[0].name.first + " " + data.results[0].name.last}`;
    console.log("---Name---: ", userName);
    const userEmail = `${data.results[0].email}`;
    console.log("----Email----: ", userEmail);
    const userPhone = `${data.results[0].phone}`;
    console.log("---Phone Number---: ", userPhone);
    const location = `${data.results[0].location.city + ", " + data.results[0].location.state + ", " + data.results[0].location.country}`;
    console.log("--Location---: ", location);
    const userImage = `<img src="${data.results[0].picture.large}" alt="" />`;

    document.getElementById("user-name").innerText = userName;
    document.getElementById("user-email").innerText = userEmail;
    document.getElementById("user-phone").innerText = userPhone;
    document.getElementById("user-address").innerText = location;
    document.getElementById("user-image").innerHTML = userImage;
}

function displayCurrentInfo(id1, id2, id3, id4) {
    document.getElementById(id1).style.display = "block";
    document.getElementById(id2).style.display = "none";
    document.getElementById(id3).style.display = "none";
    document.getElementById(id4).style.display = "none";
    document.getElementById(id4).style.display = "none";
  }

function showUserName() {
    displayCurrentInfo(
      "user-name-div",
      "user-email-div",
      "user-phone-div",
      "user-address-div"
    );
  }
  function showUserEmail() {
    displayCurrentInfo(
      "user-email-div",
      "user-phone-div",
      "user-address-div",
      "user-name-div"
    );
  }
  function showUserPhone() {
    displayCurrentInfo(
      "user-phone-div",
      "user-email-div",
      "user-address-div",
      "user-name-div"
    );
  }
  function showUserLocation() {
    displayCurrentInfo(
      "user-address-div",
      "user-phone-div",
      "user-email-div",
      "user-name-div"
    );
  }

  setTimeout(() => {
    document.getElementById("watermark").style.display = "none";
  }, 2500)

apiFetch();

function genrateNewUser() {
    apiFetch();
  }