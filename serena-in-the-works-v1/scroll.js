const sections = document.querySelectorAll(".content");
let percentage; 



//Use JavaScript IntersectionObserver API
//The entry is NOT the tag itself - it is a special object including data such as intersection ratio 
//etnry.target is the tag itself
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0.4){
            entry.target.classList.add("in-view");
        }
        
        else {
            entry.target.classList.remove("in-view")
        }
    })
}, {
    threshold: [0, 0.4, 1.0] //specifies at what point in the scroll the observer should execute the code itself
}); //End observer

//Add section tags as the paremeter for the observer
sections.forEach(section => {
    observer.observe(section)
})

document.addEventListener("DOMContentLoaded", function(){
    const progressBarInner = document.querySelector('.progress-bar');

    document.addEventListener('scroll', function(){
        console.log('scrolling')
        percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        console.log('percentage is ' + percentage)

        progressBarInner.style.width = `${percentage}%`

    })

})//End dom content loaded