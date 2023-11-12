document.addEventListener("DOMContentLoaded", () => {

    // menu
    nav_toggle.addEventListener("click", function() {

        document.querySelector('#nav').classList.toggle('active');
    
    });

    // service
    
    const buttons_service = document.getElementsByClassName('services_btn');

    for (const button of buttons_service) {

        button.addEventListener('click', function() {

            let button_service_text = button.textContent;
            
            let service_items = document.querySelectorAll('#service div.service_item');

            for (let el of service_items) {

                console.log(el);
                
                let list = el.getAttribute('service_item');

                if(list != button_service_text){
                    el.classList.add("unactive");
                }

                else{
                    el.classList.remove("unactive");
                }
            }
        
        });

    }


    // price

    const accordion_items = document.getElementsByClassName('accordion_item');

    for (const item of accordion_items) {

        item.addEventListener('click', function() {

            item.classList.toggle('active');
            
            
        
        });

    }


    // contact us

    btn_contact.addEventListener("click", function() {

        document.querySelector('#contacts_city').classList.remove('active');
        document.querySelector('#select_item').classList.add('selected');
        document.querySelector('#contacts_list').classList.toggle('active');
        document.querySelector('#select_item').classList.toggle('active');
    
    });

    const city_options = document.getElementsByClassName('contacts_option');

    const cities ={
        Canandaigua: ["Canandaigua, NY","+1 585 393 0001", "151 Charlotte Street"],
        NY: ["New York City, NY","+1 212 456 0002", "9 East 91st Street"],
        Yonkers: ["Yonkers, NY","+1 914 678 0003", "511 Warburton Ave"],
        Sherrill: ["Sherrill, NY","+1 315 908 0004", "14 WEST Noyes BLVD"]

    }

    for (const city_option of city_options) {

        city_option.addEventListener('click', function() {

            let place = city_option.textContent;

            document.getElementById('btn_contact').innerHTML = place;



            let option_city = city_option.getAttribute('place');

            document.getElementById('city_text').innerHTML = cities[option_city][0];
            document.getElementById('number_text').innerHTML = cities[option_city][1];
            document.getElementById('address_text').innerHTML = cities[option_city][2];

            document.querySelector('#contacts_list').classList.toggle('active');
            document.querySelector('#select_item').classList.toggle('active');
            document.querySelector('#contacts_city').classList.add('active');


        });

    }











  });