 window.addEventListener('scroll',()=>{
    if(window.scrollY >50){
        document.querySelector('.mode').classList.add('delete-mode');
        document.querySelector('.mid').classList.add('delete-mid');
        document.querySelector('.new-nav-container').classList.remove('hide-new-nav');
    }
    else{
        document.querySelector('.mode').classList.remove('delete-mode');
        document.querySelector('.mid').classList.remove('delete-mid');
        document.querySelector('.new-nav-container').classList.add('hide-new-nav');
    }
 });