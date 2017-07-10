
//FORM STAMP

document.addEventListener('click', (e) => {
  if(e.target.id == 'sign-up') {
    e.preventDefault();
    document.querySelector('#stamp').style.visibility = "visible";
  }
});
