var screenID = 0
var foods = document.getElementsByClassName('food')
var background_color = ['linear-gradient(rgb(9, 165, 163), rgb(255, 255, 255))', 'linear-gradient(rgb(120, 67, 14), rgb(255, 255, 255))', 'linear-gradient(rgb(120, 117, 14), rgb(255, 255, 255))', 'linear-gradient(rgb(26, 120, 14), rgb(255, 255, 255))', 'linear-gradient(rgb(30, 14, 120), rgb(255, 255, 255))']


function change_screen(i){
    screenID+=i
    if (screenID>4){
        screenID = 0
    }else if (screenID<0){
        screenID =3
    }
    for (food =0; food<foods.length; food ++){
        foods[food].style['z-index'] = '0'
    }
    foods[screenID].style['z-index'] = '1'
    document.getElementById('background_image').style['background-image'] = background_color[screenID]
}