
    	let button = document.querySelector('.popup-button');
    	button.addEventListener('mouseover', showPopup);
   	 
    	function showPopup() {
        	document.querySelector('.popup').classList.add('visible');
    	}

    	button.addEventListener('mouseover', showPopup);

    	function hidePopup() {
        	document.querySelector('.popup').classList.remove('visible');
        }