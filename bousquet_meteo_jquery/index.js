
import './scss/main.scss';
import './css/main.css';

//import {hello, sup, inc} from './js/module';
import * as outils from './js/module';

import moment from 'moment';
import 'moment/locale/fr';

//class dog 
import Dog from './js/dog';

// class meteo
import Meteo from './js/meteoclassbase';

const infoMeteo = {
    "villeID":"6325494",
    "units":"metric"
};

const maMeteo = new Meteo('Quebec');
console.log(maMeteo.getMeteoInformation);

//hello();
//sup();


// ------------------- DATE MOMENT -------------------------------------

var datedujour = document.querySelector('.date');
var maintenant = moment();


function dateDuJour() {
    
    console.log("Date du jour : " + maintenant.format('LLLL'));
    
    datedujour.innerHTML = maintenant.format('LLLL');
}


dateDuJour();

// --------------------- CALSS DOG -------------------------

const leChien = new Dog('Noisette');
console.log(leChien.jappe());



let epiceriesChoisies = ["bacon cheeseburger", "chicken sandwich", "hamburger", "bacon salad"]
            .filter((x) => /bacon/i.test(x) );
console.log("Épiceries : '" + epiceriesChoisies);


//console.log("Incrémente 6 de 1 : " + inc(6) );




