const tabs = document.querySelectorAll(".tab");

tabs.forEach((clickedTab) => {
  //Add onClick event
  clickedTab.addEventListener("click", () => {
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    //Add the active class on the clicked tab
    clickedTab.classList.add('active')

  });
});
