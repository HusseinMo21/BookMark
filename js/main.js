"use strict"
var SiteName = document.getElementById("SiteName");
var SiteURL = document.getElementById("SiteURL");
var Btn = document.getElementById("BtnSub");

var bookMarks;
var deletedIndex;
var VisitedIndex;

if(localStorage.getItem("Mysites")=== null){
 bookMarks = [];
}else{
 bookMarks= JSON.parse(localStorage.getItem("Mysites"))
    displaySitesList(bookMarks);
}

//Button Add
Btn.addEventListener("click",function (e){
 addBookMark()

})

function addBookMark() {
 if(ValidateName() == true && ValidateURL() ==true){
    var Sites = {
      Name: SiteName.value,
      Url: SiteURL.value,
    };
    bookMarks.push(Sites);
    displaySitesList(bookMarks)
    addToLocalStorage()
    Clear()

}else{
 alert("Invalid Name Or Url")
}
}
//EndButton Add
//Display FUn
function displaySitesList(list) {
var NewBook = ``;
 for (let i = 0; i < list.length; i++) {
 NewBook+=`<tr>
 <td>${i + 1}</td>
 <td>${list[i].Name}</td>
 <td><button type="button" class="BtnVisit ms-2 btn btn-warning"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
 <td><button type="button" class="BtnDelete ms-2 btn btn-danger"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
</tr>`
 }

 document.getElementById("DataYarYs").innerHTML=NewBook;
}
//End Display FUn

//Delete Book Mark

var DeleteBotton = Array.from(document.querySelectorAll(".BtnDelete"));

for(let i=0; i<DeleteBotton.length;i++){
 DeleteBotton[i].addEventListener("click", function(e){
     deletedIndex = DeleteBotton.indexOf(e.target);
     console.log(deletedIndex)
    DeleteBookMark(deletedIndex)
    displaySitesList(bookMarks)
 });
  
}

function DeleteBookMark(index){
 bookMarks.splice(deletedIndex, 1);
 addToLocalStorage()
}

function addToLocalStorage() {
 localStorage.setItem("Mysites", JSON.stringify(bookMarks));
}
//End Delete

//Clear

function Clear() {
 (SiteName.value = ""), (SiteURL.value = "");
}

//End Clear
// Visit

var VisitButton=Array.from(document.querySelectorAll(".BtnVisit"));

for(let i=0; i<VisitButton.length;i++){
 VisitButton[i].addEventListener("click", function(e){
    VisitedIndex = VisitButton.indexOf(e.target);
     console.log(VisitedIndex)
   window.open(bookMarks[VisitedIndex].Url,'_blank');
 })
}

//End Visit
//ValidateName

function ValidateName(){
  var regeX=/^[A-Z][a-z]{3,8}$/
  return regeX.test(SiteName.value);
}

function ValidateURL(){
  var regeUrl=/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
  return regeUrl.test(SiteURL.value);
}



anime({
  targets: "#Here path",
  strokeDashoffset: [anime.setDashoffset, 1],
  easing: "easeInOutSine",
  duration: 1000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: false,
});

gsap.fromTo(
  ".bg-layer",
  { y: 0 },
  {
    y: "-100%",
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);
