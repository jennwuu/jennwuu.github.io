var slideIndex = 1;
window.onload = main;
/*http://www.mattmorgante.com/technology/sticky-navigation-bar-javascript*/

function main()
{
    const nav = document.getElementById("navigation");
    const navTop = nav.offsetTop;


    function stickyNavigation()
    {
        if (window.scrollY > navTop)
        {
            document.body.style.paddingTop = nav.offsetHeight + 'px'
            document.body.classList.add("fixed-nav");
        }
        else
        {
            document.body.style.paddingTop = 0;
            document.body.classList.remove("fixed-nav");
        }
    }

    window.addEventListener('scroll', stickyNavigation);
    showSlides(slideIndex);
}
