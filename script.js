const points = document.getElementsByClassName('plus')
const discription = document.getElementsByClassName('desc')
for (let i = 0; i<points.length; i++){
    points[i].addEventListener('click', function(event){
        discription[i].classList.toggle('hide');
        points[i].classList.toggle('rotate');
    })
    
}






