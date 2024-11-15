<script>


    <div class="popup" id="cartPopup">

        <p>Thank you for your purchased!</p>

        <button id="closePopup">Done</button>

        <script src="script.js"></script>


  // script.js

 const addtoCartButtons = document.querySelectorAll('.add-to-cart');

 const cartPopup = document.getElementById('cartPopup');

 const closePopupButton = document.getElementById('closePopup');

 

 addtoCartButtons.forEach(button => {

     button.addEventListener('click', () => {

         cartPopup.style.display = 'block';

     });

 });

 

 closePopupButton.addEventListener('click', (close) => {

     cartPopup.style.display = 'none';

 });

 C

 </script>

