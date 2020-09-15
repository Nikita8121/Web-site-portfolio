const skills = () => {
    const barwrapper = document.querySelectorAll('.progress_bar_text > .percent'),
        barshow = document.querySelectorAll('.progress_bar_bar  .main  .main_show'),
        skillsblock = document.querySelector('.skills_block');
        let shown = false;
        
    const y = window.addEventListener('scroll', () => {
        if(shown == false){
            
            if (skillsblock.offsetTop - 95 + 110 >= window.pageYOffset) {
                shown = true;
                barwrapper.forEach((item => {
                    const goal = +item.getAttribute('data-prc');
                    let per = 0;
                    let starttime;                    
                    requestAnimationFrame(function(timestamp){
                        starttime = timestamp || new Date().getTime(); 
                        moveit(timestamp, 4000, starttime , item , per, goal); 
                    });  
                }));
                barshow.forEach((item => {
                    const goal = +item.getAttribute('data-prc');
                    item.style.width = `${goal}%`;
                }));
            }
        } else {
            
        }
    });

};
export default skills;


 
function moveit(timestamp, duration, starttime, item, per, goal){
    
    timestamp = timestamp || new Date().getTime();
    let runtime = timestamp - starttime;
    let progress = runtime / duration;
    progress = Math.floor(progress*goal);
    item.innerHTML = `${progress}%`;
    
    if (runtime < duration){ 
        requestAnimationFrame(function(timestamp){ 
            moveit(timestamp, duration, starttime, item, per, goal);
        });
    }
}
 
