let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
function speak(text) {
    let spech = new SpeechSynthesisUtterance(text);
    spech.rate = 1;
    spech.pitch = 1;
    spech.volume = 1;
    spech.lang = "hi-GB"
    window.speechSynthesis.speak(spech)
}

let speechRec = window.speechRecognition || window.webkitSpeechRecognition ;

let recognition = new speechRec ();
recognition.onresult = ((event)=>{
 let currentindex =  event.resultIndex;

  let transcript = event.results[currentindex][0]["transcript"];
  content.innerText = transcript;

  takecommand(transcript.toLowerCase());
})

btn.addEventListener("click" , ()=>{
    recognition.start();
})
function takecommand (message){
    if(message.includes("hello")||message.includes("hello")){
        speak("hello sir what can i help you");
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant created by hamza sir");
    }
    else if(message.includes("open youtube")){
        speak("opening youtube....");
        window.open("https://www.youtube.com/");
    }
    else if(message.includes("open facebook")){
        speak("opening facebook....");
        window.open("https://www.facebook.com/");
    }
    else if(message.includes("open instagram")){
        speak("opening instagram....");
        window.open("https://www.instagram.com/");
    }
    else if(message.includes("open google")){
        speak("opening google....");
        window.open("https://www.google.com/");
    }
    else if(message.includes("open calculator")){
        speak("opening calculator....");
        window.open("calculator://");
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp....");
        window.open("https://www.whatsapp.com/");
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined , {hour:"numeric" , minute:"numeric"});
        speak(time);
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined , {day:"numeric" , month:"short"});
        speak(date);
    }
    else{
         let finaltext = "this is what i found on internet regrading" + message.replace("chandni" , "") ;
        speak(finaltext);
        window.open(`https://www.google.com/search?q=${message}`);
        console.log(speak());
    }
}






