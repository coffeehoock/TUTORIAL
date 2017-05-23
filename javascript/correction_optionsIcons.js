<style>
    
.wrap{
    max-width: 320px;
    /*max-width: 100%;*/
    height: 560px;
    margin: 0 auto;
    /*overflow: hidden;*/
    background: cyan;
}

    .icons{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;  
        height: 100%;

    }

        .icons_item{
            width: 50%;
            height: 33%;
            background: yellow;
        }

            .icon{
                border: 2px solid #000;
                border-radius: 100%;
                width: 50%;
                display: block;

                text-align: center;

                box-sizing: border-box;
                margin: 0 auto;
            }

</style>



<div class="wrap">
  <div class="icons">
    <div class="icons_item"><a class="icon" href="">1</a></div>
    <div class="icons_item"><a class="icon" href="">2</a></div>
    <div class="icons_item"><a class="icon" href="">3</a></div>
    <div class="icons_item"><a class="icon" href="">4</a></div>
    <div class="icons_item"><a class="icon" href="">5</a></div>
    <div class="icons_item"><a class="icon" href="">6</a></div>                     
  </div>
</div>



<script>

   var   iconArr  = document.getElementsByClassName("icon");
   var  iconsItem = document.getElementsByClassName("icons_item");

   function correction_optionsIcons(){
        for (var i = 0 ; i < iconArr.length ; i++) {
               var widthIcon = iconArr[0].clientWidth;
               
               iconArr[i].style.height = widthIcon + 3 + "px";
               
               var a = (iconsItem[0].clientHeight - iconArr[0].clientWidth) / 2;
               iconArr[i].style.marginTop = a;

           }
   };
 
   
   window.onload = correction_optionsIcons();
   
   window.onresize = function(e){
       if (iconArr[0].clientWidth != parseFloat(iconArr[0].style.height)) {
            correction_optionsIcons(e);
       }
   };

</script>
