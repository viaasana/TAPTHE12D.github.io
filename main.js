var screenID = 0
var foods = document.getElementsByClassName('food')

for (food =1; food<foods.length; food ++){
    foods[food].style['display'] = 'none'
}


console.log(foods.length)
function change_screen(i){
    screenID+=i
    if (screenID>3){
        screenID = 0
    }else if (screenID<0){
        screenID =3
    }
    for (food =0; food<foods.length; food ++){
        foods[food].style['display'] = 'none'
    }
    foods[screenID].style['display'] = 'unset'
}
