function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const startBtn = document.querySelector("button[data-start]")
  const stopBtn = document.querySelector("button[data-stop]")
  const body = document.querySelector("body")
  let timeId = null
  stopBtn.disabled = true;

  startBtn.addEventListener("click", onStart)
  stopBtn.addEventListener("click", onStop)
  
  
  function onStart () {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timeId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000)

  }
  
  
  function onStop (event) {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(timeId)
   
  }