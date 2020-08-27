import React from 'react'

export default class Navbar extends React.Component
{

   render()
   {
       return(

        <nav class="navbar navbar-light container navbar-expand-lg">

      
        <a href="#" class="navbar-brand">
            MSInspir
        </a>
    
    
    <button class="navbar-toggler" data-toggle="collapse" data-target="#NavbarMenu">
        <span class="navbar-toggler-icon"></span>
     </button>
    
    <div class="collapse navbar-collapse" id="NavbarMenu">
    
     <ul class="navbar-nav mr-auto">
         <li class="nav-item active"><a href="" class="nav-link">Microsoft 365</a></li>
         <li class="nav-item"><a href="" class="nav-link">Office</a></li>
         <li class="nav-item"><a href="" class="nav-link">Windows</a></li>
         <li class="nav-item"><a href="" class="nav-link">Surface</a></li>
         <li class="nav-item"><a href="" class="nav-link">Xbox</a></li>
         <li class="nav-item"><a href="" class="nav-link">Deals</a></li>
         <li class="nav-item"><a href="" class="nav-link">Support</a></li>
     </ul>
    
     <ul class="navbar-nav ml-auto">
        <li class="nav-item active"><a href="" class="nav-link">Search</a></li>
        <li class="nav-item"><a href="" class="nav-link">Cart</a></li>
        <li class="nav-item"><a href="" class="nav-link">Profile</a></li>
    </ul>
    
    </div>
    
    
    
    </nav>

       )
   }

}