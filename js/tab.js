//Jättää tabin auki, jossa id="default"
document.getElementById("default").click();

function openTab(evt, tab){
  let i, tabContent, tabLinks

  //Etsii kaikki elementit, joilla on luokka "tabconent" ja piilottaa ne
  tabContent = document.getElementsByClassName("tabcontent");
  for(i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = "none";
  }
  //Etsii kaikki elementit, jolla on luokka "tablinks" ja poistaa niistä luokan active
  tabLinks = document.getElementsByClassName("tablinks");
  for(i = 0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  //Näyttää avatun täbin ja lisää siihen luokan active
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}