function skillsMember() {
  var skills = document.getElementsByClassName('skills');
  var i;
  for (i = 0; i < skills.length; i++) {
    skills[i].style.display = 'none';
  }

  if (skills.length > 0) {
    skills[0].style.display = 'block';
  }
}