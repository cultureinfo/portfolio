var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true; 
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false; 
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
//   var red = document.getElementById("pw").value.toLowerCase();
//   for (n = 0; n < wordsList.length; n++){
//     window.alert(wordsList[i]);
//     if (red == wordsList[n]) {
//       window.alert('Bad');
//       System.exit();
//       return;
//       ///document.getElementById("results").innerHTML = "Bad Password!";
//     } 
//   window.alert("Good");
//   System.exit();
//   //document.getElementById("results").innerHTML = "Good Password!";
// }
//   // }

  var red = document.getElementById("pw").value.toLowerCase();
  document.getElementById("results").innerHTML = red;

  var flag = 0;

  for (i=0;i<wordsList.length; i++){
    if(red == wordsList[i] || wordsList[0]){
      flag = 1;
      break;
    } 
  }
  
  if(flag==1){
    window.alert("Bad");
  }
  else{
    window.alert("Good");
  }
}

  //step1: pull password from website (after click)
  //step2: store the password in a String
  //step3: loop through wordsList
  //step4: check if password exists in wordsList
function checkNumbers(){
  for (){
    var pw = getElementById("pw").value.toLowerCase();
    var replaced = pw.split('')
    var res = replaced.replace("0", "o" || "1", "l" || "2","z" || "3","e" || "4", "a" || "5", "s" || "6", "g" || "7","t" || "8", "b" || "9","g");
    var jo = replaced.join();
  }
}

/*  var red = document.getElementById("pw").value.toLowerCase();
  document.getElementById("results").innerHTML = red;

  var flag = 0;

  for (i=0;i<wordsList.length; i++){
    var testvalue = i.split('')
    var res = str.replace("o", "0" || "i", "1" || "l","1" || "z", "2" || "e", "3", )
    if(red == res){
      flag = 1;
      break;
    } 
  }
}
