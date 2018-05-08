/* Variables*/
var NameInput = document.querySelector("#nameinput");
var email = document.querySelector("#emailinput");
var prDetail = document.querySelector("#prayer-detail");
var phone = document.querySelector("#phoneinput");
var feedbackFrom = document.querySelector(".feedback-from");
var feedbackPhone = document.querySelector(".feedback-phone");
var feedbackEmail = document.querySelector(".feedback-email");
var feedbackPrayerRequest = document.querySelector(".feedback-prayer-request");
var RequestForm = document.querySelector("#prayerRequestForm");


function completePreview() {

	alert("My event listener is working");

/*feedback-from.textContent = NameInput.value;*/



}

/*completePreview();*/

/* create event listener for changes to form */
document.addEventListener("click", completePreview, false);
