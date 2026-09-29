const points = document.getElementsByClassName('plus')
const description = document.getElementsByClassName('desc')
for (let i = 0; i<points.length; i++){
    points[i].addEventListener('click', function(event){
        description[i].classList.toggle('hide');
        points[i].classList.toggle('rotate');
    })
    
}






