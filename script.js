const display_list = document.querySelector('.display')
const slider = document.querySelector('.slider')
let currIndex;
let active_item;
let selected_item = null;
const list = document.querySelector('.list');

list.addEventListener("click", function(e) {
    if(selected_item !== null) {
        selected_item.classList.remove('selected');
        active_item.classList.remove('active');
    }
    selected_item = (e.target.className ==='list')? e.target : e.target.parentElement;
    currIndex = Array.from(list.children).indexOf(selected_item);
    active_item = display_list.children[currIndex];
    active_item.classList.add('active');
    // console.log(currIndex);
    selected_item.classList.add('selected');
    slider.style.display = 'block';
})

document.querySelector('#gallery_next').addEventListener('click', function () {
    slideNext()
})
document.querySelector('#gallery_prev').addEventListener('click', function () {
    slideNext('prev')
})

function slideNext(type) {
    if(type === 'prev') {
        active_item.classList.remove('active')
        selected_item.classList.remove('selected')
        currIndex = (currIndex+display_list.children.length-1) % display_list.children.length
        active_item = display_list.children[currIndex];
        selected_item = list.children[currIndex];
        active_item.classList.add('active')
        selected_item.classList.add('selected')
    } else {
        active_item.classList.remove('active')
        selected_item.classList.remove('selected')
        currIndex = (currIndex+display_list.children.length+1) % display_list.children.length
        active_item = display_list.children[currIndex];
        selected_item = list.children[currIndex];
        active_item.classList.add('active')
        selected_item.classList.add('selected')
    }
}

document.querySelector('#closeDisplay').addEventListener('click', function(e) {
    slider.style.display = 'none';
    selected_item.classList.remove('selected')
    selected_item = null;
    active_item.classList.remove('active')
    active_item = null;
    currIndex = null;
})