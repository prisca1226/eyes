const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I like you.\n\nI know this is shocking and confusing, but my heart really does go out to you. . But there is no chance for me to get you and us to become “us.”\n\nI just want you to know, that there is a woman who is happy from a distance when she sees you smile \n\nI will continue to admire you from afar. Don't worry, I won't expect more. Seeing your beautiful eyes and your sweet smile from afar makes me happy.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
