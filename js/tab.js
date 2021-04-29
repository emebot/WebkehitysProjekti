document.getElementById("default").click();

function openTab(evt, tab){
  let i, tabContent, tabLinks

  tabContent = document.getElementsByClassName("tabcontent");
  for(i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tablinks");
  for(i = 0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}