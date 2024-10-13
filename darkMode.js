const toggleButton = document.getElementById('toggleButton');

function toggleDarkMode(){

    // Note: here ClassNote is used to target every Element in HTMl Body and apply toggle Mode through CSS (dark-mode)property//

    document.body.classList.toggle('dark-mode');

}
// Add addEventListener to toggle (toggleDarkMode) Function When the Buttom is click// 

toggleButton.addEventListener('click',toggleDarkMode);

