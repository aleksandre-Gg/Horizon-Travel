const modal = document.querySelector('.modal');
const openB = document.querySelector('.open-modal');
const closeB = document.querySelector('.close-modal');

openB.addEventListener('click', () => modal.showModal());
closeB.addEventListener('click', () => modal.close());

modal.addEventListener('click', (e) => { 
  if (e.target === modal) modal.close(); //close when clicking outside the dialog box
});