const tabs = document.querySelectorAll('.tab'); //buttons
const panels = document.querySelectorAll('.panel'); //panels, content

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    //loop through and remove active state for every tab
    tab.classList.add('active');
    //add the active tab
    document.getElementById(tab.dataset.tab).classList.add('active'); 
    //link to panel with id, dataset to look into buttons for custom attributes
  });
});