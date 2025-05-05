
let a=document.getElementById("Container")
a.innerHTML=`
<!-- nav  bar-->

<div id="navbar">

<div>imag</div>
<div><a href="index.html">Home</a></div>
<div><a href="Destinations.html">Destinations</a></div>
<div><a href="gallery.html">gallery</a></div>
<div><a href="ContactUs.html">ContactUs</a></div>


</div>


<hr>
<!-- main section -->

<div>


   
    <div> <h3 id="title">"Explore the World with Us!"</h3> </div>

    <div id="imagVideo">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwk0J0_egmyE4hYcPkLA0ht84AkLX-rnqgg&s" alt="Mount Evrest" style="height: 315px;min-width: 200px; max-width: 500px;">

<iframe width="500" height="315" src="https://www.youtube.com/embed/MX05DW_cmWE?si=NIPHpWSOl1I7QbAy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>




</div>

<hr>
<!-- discription of blog porpose -->

<div id="discription">

<h5 style="font-family: cursive;" id="Blog">

    "This travel blog captures the beauty of places, cultures, and experiences from around the world. It's your guide to hidden gems, travel tips, personal stories, and unforgettable adventures that inspire you to explore more."

</h5>

</div>


<!-- Map Section -->



<div style="display: flex; justify-content: center;" >

    <iframe id="mapdiv" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29442.863588590193!2d75.85015032591998!3d22.714933230969034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAn%20embedded%20map%20highlighting%20popular%20travel%20spots!5e0!3m2!1sen!2sin!4v1746428952742!5m2!1sen!2sin" width="500" height="450" style="border:0; " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>
`


let b=document.getElementById("Footer")
b.innerHTML=`
<div>
    <div><a href="index.html">Home</a></div>
<div><a href="Destinations.html">Destinations</a></div>
<div><a href="gallery.html">gallery</a></div>
<div><a href="ContactUs.html">ContactUs</a></div>
</div>

<div> 
<h3>link section </h3>
</div>


<div>

    <h3>Extra information about</h3>

</div>

`