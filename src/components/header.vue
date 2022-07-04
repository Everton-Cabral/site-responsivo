<template>
    <div  class="header scroll-header" id="header">
        <nav class="nav container">
            <a href="#" class="nav_logo">Marlon</a>

            <scrollactive>
            <div class="nav_menu" id="nav-menu">
                <ul class="nav_list">
                   
                    <li class="nav_item">
                        <a href="#home" class="nav_link scrollactive-item">
                            <i class='bx bx-home-alt nav_icon'></i>
                            <span class="nav_name">Home</span>
                        </a>
                    </li>

                     <li class="nav_item">
                        <a href="#about" class="nav_link scrollactive-item " >
                            <i class='bx bx-user nav_icon'></i>
                            <span class="nav_name">About</span>
                        </a>
                    </li>

                     <li class="nav_item">
                        <a href="#skills" class="nav_link scrollactive-item" >
                            <i class='bx bx-book-alt nav_icon'></i>
                            <span class="nav_name">Skills</span>
                        </a>
                    </li>

                     <li class="nav_item">
                        <a href="#portfolio" class="nav_link scrollactive-item" >
                            <i class='bx bx-briefcase-alt nav_icon'></i>
                            <span class="nav_name">Portfólio</span>
                        </a>
                    </li>

                     <li class="nav_item">
                        <a href="#contactme" class="nav_link scrollactive-item">
                            <i class='bx bx-message-square-detail nav_icon'></i>
                            <span class="nav_name">Contatcme</span>
                        </a>
                    </li>
                   
                </ul>
                

            </div>
           </scrollactive>

            <img src="../assets/img/perfil.png" alt="perfil" class="nav_img">

        </nav>
      
    </div>
</template>

<script>

export default {
     

   
}
</script>

<style>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: var(--container-color);
        z-index: var(--z-fixed);
        transition: .4s;
    }
    .nav{
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav_img{
        width: 32px;
        border-radius: 50%;
    }
    .nav_logo{
        color: var(--title-color);
        font-weight: 600;
    }
    @media screen and (max-width: 767px){
        .nav_menu{
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: var(--container-color);
            box-shadow: 0 -1px 12px shla(var(--hue), var(--sat), 15%, 0.15);
            width: 100%;
            height: 4rem;
            padding: 0 1rem;
            display: grid;
            align-content: center;
            border-radius: 1.25rem 1.25rem 0 0;
            transition: .4s;
        }
    }
        .nav_list,
        .nav_link{
            display: flex;
        }
        .nav_link{
            flex-direction: column;
            align-items: center;
            row-gap:.25rem;
            color: var(--title-color);
            font-weight: 600;
        }
        .nav_list{
            justify-content: space-around;
        }
        .nav_name{
            font-size:  var(--tiny-font-size);
        }
        .nav_icon{
            font-size: 1.5rem;
        }
        .is-active{
            position: relative;
            color: var(--first-color);
            transition: .3s;
        }
        .scroll-header {
            box-shadow: 0 1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
        }
        @media screen and (max-width: 320px){
            .nav_name{
                display: none;
            }
        }
        @media screen and (min-width: 576px){
            .nav_list{
                justify-content: center;
                column-gap: 3rem;
            }
        }
        @media screen and (min-width: 767px){
            body{
                margin: 0;
            }
            .section{
                padding: 7rem 0 2rem;
            }
            .nav{
                height: 4.5rem; /*4.5rem*/
            }
            .nav_img{
                display:none;
            }
            .nav_icon{
                display: none;
            }
            .nav_name{
                font-size: var(--normal-font-size);
            }
            .nav_link:hover{
                color: var(--first-color);
            }
             .is-active::before{
                content: '';
                position: absolute;
                bottom: -.75rem;
                width: 4px;
                height: 4px;
                background-color: var(--first-color);
                border-radius: 50%;

             }
        }
        @media screen and (min-width: 1024px){
            .container{
                margin-left: auto;
                margin-right: auto;
            }
        }
</style>
