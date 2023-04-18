function handleSubmit() {
  //get input value
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  //get element of error email
  const errorEmail = document.getElementById("error-email");
  //condition to be considered and email
  const checkEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //match() to check inputed email
  const check = emailValue.match(checkEmail);
  //get the hidden user info
  const sectionContent = document.querySelector(
    "#personal-info > .section-content"
  );
  //get element to control submit input
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Please input correct email";
  }
}

// unhide job experiences
let availableReview = false; //boolean variable

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-toggle");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-toggle");
  viewMore.style.display = "none";
}

function handleViewToggle(button) {
  const parentElement = button.closest(".jobchildren");
  const mainContent = parentElement.querySelector(".maincontent");

  if (availableReview === false) {
    mainContent.style.display = "block"; //display the content
    availableReview = true;
    button.textContent = "View less";
    console.log("1st condition", availableReview);
  } else {
    mainContent.style.display = "none"; //hide the content
    availableReview = false;
    button.textContent = "View more";
    console.log("2nd condition", availableReview);
  }
}
