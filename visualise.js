//Count numbers from 0 to value.
//Value needs to be a positive integer.
//Selector needs to be a DOM Element.
//Passing time argument is optional.
const countAnimation = function(selector, value, time){
     if(!(selector instanceof HTMLElement) || value%1 !==0 || value<0){
       console.log('In countAnimation | Value is not an integer or selector is not a DOM Element.');
       return;
     }
     time = time || 2000;
     const frameChangeTime = time/value;
     let valueCounter = 0;
     let changeNumber = setInterval(function(){
         selector.textContent = valueCounter;
         if(valueCounter >= value) {clearInterval(changeNumber); return;}
         valueCounter++;
     }, frameChangeTime);
}
 let counter = document.getElementById('projectsFinished');
 countAnimation(counter, 30, 2000);
