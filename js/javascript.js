   //rest button
   document.getElementById("rest").addEventListener('click', function () {
      document.getElementById('output-calories').innerHTML = "0";
   });
   //add input Calorie Count
   document.getElementById("add").addEventListener("click", function () {
      let input = document.getElementById("numberInput").value;
      if (input === "" ) {
         document.getElementById("output-calories").innerHTML = "0";
      } else if(input > 9999 || input < 0 ) {
        document.getElementById("output-calories").innerHTML = "0";
      }else{
          document.getElementById("output-calories").innerHTML = input;
      }
   });