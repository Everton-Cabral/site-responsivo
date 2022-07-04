<template>
  <div id="app">
   <appHeader />
   <appMain />
    
  </div>
</template>

<script>

import appHeader from './components/header'
import appMain from './components/main'

export default {
 components:{appHeader, appMain}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&family=Open+Sans:wght@600&family=Rubik&display=swap');
  :root{
    --header-height: 3rem;

    /* Colors */
    --hue: 174;
    --sat: 63%;

    --first-color: hsl(var(--hue), var(--sat), 40%);
    --first-color-alt:hsl(var(--hue), var(--sat), 36%);
    --title-color:hsl(var(--hue), 12%, 15%);
    --text-color:hsl(var(--hue), 8%, 35%);
    --body-color:hsl(var(--hue), 100%, 99%);
    --container-color:#fff;

    /* Font and typography */
    --body-font:'Open Sans', sans-serif;

    --h1-font-size:1.5rem;
    --normal-font-size: .938rem;
    --tiny-font-size: .625rem;

    /* z index */
    --z-tooltip: 10;
    --z-fixed: 100;
  }

  /* Responsive typography */
  @media screen and (min-width: 968px){
    :root{
      --h1-font-size:2.25rem;
      --normal-font-size:1rem;
    }
  }
  
  /* Base */
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    margin: var(--header-height) 0 0 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
  img{
    max-width: 100%;
    height: auto;
  }
  /* Reusable class css */
  .section{
    padding: 4.5rem 0 2rem;
  }

  .section_title{
    font-size: var(--h1-font-size);
    color: var(--title-color);
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .section_height {
    height: 100vh;
  }

  /*Layout */
  .container{
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  


</style>
