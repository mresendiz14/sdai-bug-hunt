
//JS bug #1 requires document.getElementByID 
//JS bug #2 the ID funfactButton was not capitalized like in FunFact
document.getElementById('funFactButton').addEventListener('click', function() {
  const funFact = document.getElementById('funFact');
  if (funFact.style.display === 'none') {
      funFact.style.display = 'block';
  } else {
      funFact.style.display = 'none';
  }
});
