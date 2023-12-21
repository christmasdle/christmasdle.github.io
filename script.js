function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = Math.random() * window.innerHeight + 'px';
    document.getElementById('snowflakes').appendChild(snowflake);
  }
  for (let i = 0; i < 75; i++) {
    createSnowflake();
  }
  
  function selectOption(option) {
    var dropdown = document.getElementById('dropdown');
    dropdown.textContent = option.textContent;
  }
  // main script for guess the song
  document.addEventListener('DOMContentLoaded', function() {
    var customDropdown = document.querySelector('.customDropdown');
  
    // Toggle the "openDropdown" class on click
    customDropdown.addEventListener('click', function() {
      this.classList.toggle('openDropdown');
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
    // setting up the audio player
    var audio = document.getElementById('audioPlayer');
    var restartButton = document.getElementById('restartButton');
    var volumeDial = document.getElementById('volumeDial');
    var storedStartTime;
    var songDropdown = document.getElementById('dropdown');
    var submitBtn = document.getElementById('submitBtn');
    var textBox = document.getElementById('textBox');
    var randomSong;
    var time = 5000;
    var timeBox = document.getElementById('timeBox');
    var randomSongIndex, setSong;
    var streak = document.getElementById('streak');
    var streakCount = 0;

    
    var songs = [
        'All I Want For Christmas Is You.mp3', 'Feliz Navidad.mp3', 'Frosty The Snowman.mp3', 'Here Comes Santa Claus.mp3', 'Holly Jolly Christmas.mp3', 'Its Beginning to Look a Lot Like Christmas.mp3', 'Jingle Bell Rock.mp3', 'Last Christmas.mp3', 'Let it Snow.mp3', 'Mistletoe.mp3', 'Rockin Around the Christmas Tree.mp3', 'Rudolph The Red Nosed Reindeer.mp3', 'Santa Tell Me.mp3', 'Snowman.mp3', 'Underneath The Tree.mp3', 'Wonderful Christmas Time.mp3'
    ];

    timeBox.innerHTML = time/1000 + " seconds";
    // Set a random song
    function chooseSong() {
        timeBox.innerHTML = time/1000 + " seconds";
        randomSongIndex = Math.floor(Math.random() * songs.length);
        randomSong = songs[randomSongIndex];
        setSong = 'songs/' + randomSong;
        audio.src = setSong;

        audio.addEventListener('loadedmetadata', function() {
            storedStartTime = Math.random() * audio.duration * 0.8;
            if (storedStartTime < 10) { 
              storedStartTime += 10;
            }
            audio.currentTime = storedStartTime;
    });
    }
    chooseSong();

    restartButton.addEventListener('click', function() {
      audio.currentTime = storedStartTime;
      audio.play();
      setTimeout(function() {
        audio.pause();
      }, time);
    });

    volumeDial.addEventListener('input', function() {
      audio.volume = volumeDial.value;
    });

    submitBtn.addEventListener('click', function() {
        var selectedSong = dropdown.textContent + ".mp3";

        if (selectedSong == randomSong) {
            textBox.innerHTML = 'Correct! New Game Starting...';
            time = 5000;
            streakCount+=1;
            streak.innerHTML = "Streak: " + streakCount;
            chooseSong();
            setTimeout(function(){
            textBox.innerHTML = '';
            }, 3000);
            
        } else {
            textBox.innerHTML = "Incorrect, Giving S'more Time";
            time += 5000;
            setTimeout(function(){
            textBox.innerHTML = '';
            }, 3000);
            timeBox.innerHTML = time/1000 + " seconds";
            streakCount = 0;
            streak.innerHTML = "Streak: " + "0";
        }
    });
});


