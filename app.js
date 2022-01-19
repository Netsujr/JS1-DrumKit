    function playSound(event) {

      const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

      if(!audio) return;
      audio.currentTime = 0; //rewind to the start
      audio.play();
      key.classList.add('playing');

    }

    function removeTransition(event) {
      if (event.propertyName !== 'transform') return;
      this.classList.remove('playing');
      // this always refers to the thing that goes against it.
      // console log this to see what you get back when you get stuck
    }

    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    window.addEventListener('keydown', playSound);
