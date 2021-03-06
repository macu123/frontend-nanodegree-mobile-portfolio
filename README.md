Website Performance Optimization portfolio project<br>
<br>
How to run this project?<br>
<br>
1. Open http://macu123.github.io/frontend-nanodegree-mobile-portfolio/ using any major browser.<br>
2. Then open another tab for <a href="https://developers.google.com/speed/pagespeed/insights">Google PageSpeed Insights</a>.<br>
3. Copy the url of the project into the blank to get the score of index.html.<br>
4. Then it should get higher than 90 for both Mobile and Desktop.<br>
5. Navigate to Pizza.html and open the console of the browser.<br>
6. When you scroll in the page, it will output frame per second (FPS). The FPS should be consistently higher than 60fps.<br>
7. When use slider to change the size of pizzas, it will output the time to resize of pizzas. It should be below 5ms.<br>
<br>
Bonus: Although project-mobile.html, project-webperf.html and project-2048.html were not required, I still optimized them to achieve pagespeed scores higher than 90 for both Mobile and Desktop. :)<br>
<br>
What steps did I take to optimize the website?<br>
<br>
1. Copy required font css from Google Font API into style.css, and delete google font css file to remove render-blocking css.<br>
2. Move out all the critical css from style.css, and inline it into the body to remove render-blocking css.<br>
3. Put the remaining style.css in the end of html file, and use loadCSS to load it asychronisely.<br>
4. Add media type to print.css to remove render-blocking css.<br>
5. Add async attributes to all js files that have nothing to do with page rendering to remove render-blocking javascript.<br>
6. Compress and resize the size of images to speedup rendering.<br>
7. Change all querySelector to getElementById and querySelectorAll to getElementsByClassName to speedup FPS.<br>
8. Use jQuery batch DOM update instead of individual DOM update to speed up time to resize pizzas.<br>
9. Move variables that don't need to be computed or evaluated inside the loop outside the loop to improve FPS.<br>
10. Change implementation of resizing pizzas to CSS transform to speed up time to resize pizzas.