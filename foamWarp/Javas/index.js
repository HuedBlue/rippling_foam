function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function button_turn(checkbox) {

    let label = event.target.parentNode
    let svg_item_list = label.querySelectorAll("label :nth-child(2)")
    let circle_glow = svg_item_list.item(0) // Javascript counts from 0
    let truth_check = event.target.checked

    if (truth_check === true){

        label.classList.add("shadow-anim");

    } else{

        label.classList.remove("shadow-anim")

    }

}


function inset_turn(checkbox) {

    let label = event.target.parentNode
    let truth_check = event.target.checked

    if (truth_check === true){

        label.classList.add("shadow-anim");

    } else{

        label.classList.remove("shadow-anim")

    }

}



let buttons_list = document.getElementsByClassName('label')


for (let i = 0; i < buttons_list.length; i++) {
        
    setInterval(() => {

        let coinflip = Math.floor(Math.random(0, 3) * 16) // Rand num, 0 or 1

            if (coinflip === 1){

                let label = buttons_list[i]
                let checkbox = buttons_list[i].querySelector(":nth-child(1)")
                let checkbox_value = checkbox.checked
                    
                if(checkbox_value === true){

                    label.classList.remove("shadow-anim");
                    checkbox.checked = false   
                     
                } else{

                    label.classList.add("shadow-anim");
                    checkbox.checked = true 

                }

            sleep(10)

        }

    }, 750);
}
