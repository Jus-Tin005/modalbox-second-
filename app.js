/*
! DOM Area
*/

var getbtnModal = document.getElementById("btn-modal"),
    getmodalbox = document.getElementById("loginModal"),
    getbtnClose = document.querySelector(".btn-close");


    getbtnModal.addEventListener("click", openModal);

    getbtnClose.addEventListener("click",closeModal);



    window.onclick = function(e){
        if(e.target === getmodalbox) {
                closeModal();
        }
    }


    function openModal() {
        getmodalbox.style.display = "block";
    }

    function closeModal() {
        getmodalbox.style.display = "none";
    }