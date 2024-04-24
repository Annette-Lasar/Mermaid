/**
 * This function generates the HTML code for the start screen.
 * @returns - Returns HTML code for the start screen.
 */
function generateStartScreenContentHTML() {
  return /* html */ `
              <div id="start_screen_inner_wrapper" class="start-screen-inner-wrapper">
            <header class="start-screen-header">
              <h1 class="h1-playing-area">
                Mermaid - A girl fights the big fish
              </h1>
            </header>
            <aside class="start-screen-aside">
              <figure class="wooden-panel" onclick="openStoryInfo()">
                <button class="story">Story</button>
              </figure>
              <figure onclick="openGameRules()" class="wooden-panel">
                <button class="game-rules">Game rules</button>
              </figure>
              <figure class="wooden-panel" onclick="openImprintInfo()">
                <button class="imprint-button">Imprint</button>
              </figure>

              <figure class="wooden-panel">
                <div class="copyright">
                  coded by Annette Lasar <br />
                  April 2024
                </div>
              </figure>
            </aside>
            <div class="main-area">
              <img
                class="mermaid-image1"
                src="./img/mermaid/PNG/mermaid_1/idle_000.png"
                alt=""
                class=""
              />

              <img
                class="mermaid-image2"
                src="./img/mermaid/PNG/mermaid_2/idle_000.png"
                alt=""
                class=""
              />

              <img
                class="mermaid-image3"
                src="./img/mermaid/PNG/mermaid_3/idle_000.png"
                alt=""
                class=""
              />
              <div class="stone-slab">
                <img src="./img/game_ui/PNG/menu/window.png" alt="" />
              </div>
              <div class="start-panel">
                <div class="wooden-start-panel">
                  <img
                    src="./img/game_ui/PNG/basic_window/wooden_panel.png"
                    alt=""
                  />
                </div>
                <div class="caption-start-game">
                  <span class="start-game-text">Start game</span>
                  <button id="start_game_button" onclick="showMermaidSelection()" class="start-game-button d-none">
                    <img src="./img/game_ui/PNG/buttons/play.png" alt="" />
                  </button>
                </div>
              </div>
              <div class="sound-button-wrapper">
                <img id="music_button" onclick="toggleMusic()" src="./img/game_ui/PNG/buttons/music_on.png" alt="" class="music"/>
                <img id="noise_button" onclick="toggleNoise()" src="./img/game_ui/PNG/buttons/noise_on.png" alt="" class="noise"/>
                <span id="music_text" class="music-text">Music off</span>
                <span id="noise_text" class="noise-text">Noise off</span>
              </div>
            </div>
          </div>
  `;
}

/**
 * This function generates the HTML code for the screen where the player can select a character.
 * @returns - Returns HTML code for the mermaid selection screen.
 */
function generateMermaidSelectionHTML() {
  return /* html */ `
    <div class="screen-inner-wrapper">
    <header>
      <button onclick="backToStartScreen()" class="back-button">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
      <h1 class="h1-playing-area-story">Select your Character</h1>
      <button class="back-button invisible">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
    </header>
    <div class="mermaid-selection-wrapper">
      <figure class="mermaid">
          <img src="./img/mermaid/PNG/mermaid_1/idle_000.png" alt="">
          <figcaption class="mermaid-name" onclick="selectMermaidType(1)">Aqualine</figcaption>
      </figure>
      <figure class="mermaid">
          <img src="./img/mermaid/PNG/mermaid_2/idle_000.png" alt="">
          <figcaption class="mermaid-name" onclick="selectMermaidType(2)">Poppy</figcaption>
      </figure>
      <figure class="mermaid">
          <img src="./img/mermaid/PNG/mermaid_3/idle_000.png" alt="">
          <figcaption class="mermaid-name" onclick="selectMermaidType(3)">Talora</figcaption>
      </figure>
    </div>
    </div>
  `;
}

/**
 * This function generates the HTML code for the canvas and the buttons for the
 * mobile view.
 * @returns - Returns HTML code for the canvas and the buttons with which you can
 * move the character in the mobile view.
 */
function generateCanvasHTML() {
  return /* html */ `
    <canvas id="canvas" width="853" height="480"></canvas>
    <div class="mobile-button-wrapper">
          <div class="arrow-buttons">
            <div id="btn_left" class="left">
              <img src="./icons/arrow.svg" alt="" />
            </div>
            <div id="btn_up" class="up">
              <img src="./icons/arrow.svg" alt="" />
            </div>
            <div id="btn_down" class="down"><img src="./icons/arrow.svg" alt="" /></div>
            <div id="btn_right" class="right">
              <img src="./icons/arrow.svg" alt="" />
            </div>
          </div>
          <div id="btn_space" class="space-button">
            <img src="./icons/space_bar_icon.png" alt="" class="space" />
          </div>
        </div>
  `;
}

/**
 * This function generates the HTML code for the story screen.
 * @returns - Returns HTML code for the story screen.
 */
function generateStoryContentHTML() {
  return /* html */ `
  <div class="screen-inner-wrapper">
    <header>
      <button onclick="backToStartScreen()" class="back-button">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
      <h1 class="h1-playing-area-story">Story</h1>
      <button class="back-button invisible">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
    </header>
    <div class="textarea-wrapper">
      <div class="textarea"> 
        <div class="text">
      <p class="story-text first-paragraph">
      <img class="illustration-right" src="./img/fish/PNG/lionfish/move_000.png" alt="">
      Once upon a time a cruel firefish called Emberclaw lived 
      in the depths of the ocean. Bad experiences with humans had 
      made him callous and awakened his greed for power over 
      other creatures. 
      </p>
      <p class="story-text">
      <img class="illustration-left" src="./img/game_ui/PNG/registration/clownfish_group.png" alt="">  
      One day, the firefish caught a group of young clownfish, 
      all brothers and sisters, and shut them up inside 
      a treasure chest. He would eventually feed on them 
      because he believed that eating other fish would 
      increase his power. Little did he know that the key 
      to his treasure chest had gone missing. 
      
    </p>
      <p class="story-text">
      <img class="illustration-right clownfish-couple" src="./img/game_ui/PNG/registration/clownfish_couple.png" alt="">  
      The clownfish parents were desperate. They had no 
      chance against Emberclaw and his servants who 
      guarded the treasure chest where the little clownfish 
      were kept prisoners. So they turned to the little 
      mermaid for help.
      </p>
      <p class="story-text">
        <img class="illustration-left mermaid-image" src="./img/mermaid/PNG/mermaid_1/idle_000.png" alt="">
      The mermaid was full of compassion for the clownfish 
      parents and immediately agreed to help. First, she 
      would have to find the key to be able to open the 
      treasure chest and free the little clownfish. As a 
      weapon, there were sea shells with pearls she could 
      use to destroy Emberclaw and his servants. To regain 
      energy, she would feed on starfish. But she had to 
      beware of water bombs that would kill her instantly.
      </p>
      <p class="story-text">
        So the little mermaid embarked on her greatest adventure ...
      </p>
      </div>
      </div>
    </div>
    </div>
  `;
}

/**
 * This function generates the HTML code for the game rules screen.
 * @returns - Returns HTML code for the game rules screen.
 */
function generateGameRulesContentHTML() {
  return /* html */ `
  <div class="screen-inner-wrapper">
    <header>
      <button onclick="backToStartScreen()" class="back-button">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
      <h1 class="h1-playing-area">Game Rules</h1>
      <button class="back-button invisible">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
    </header>
    <div class="textarea-wrapper">
      <div class="textarea">
        <div class="text">
        <p class="story-text">
          <img class="illustration-right key" src="./img/game_items/PNG/items/key.png" alt="">
          You need to find the golden key which is hidden somewhere in the playing area. 
          Without it you won&apos;t be able to open the treasure chest in the end. So make sure 
          that you also search for it in the western part of your territory. When you found
          the key touch it in order to collect it. 
        </p>
        <p class="story-text">
          <img class="illustration-left" src="./img/game_ui/PNG/buttons/keyboard_keys.png" alt="">
          Use the arrow keys on your keyboard to move your character in all directions. 
          Use the space bar to shoot bubbles at your enemies. Bubbles that don&apos;t collide with
          an enemy will dissolve after a couple of seconds. <br>
          In the mobile version of this game you&apos;ll find buttons on your device screen that
          replace your keyboard.
        </p>
        <p class="story-text">
          <img class="illustration-right starfish" src="./img/game_items/PNG/items/starfish.png" alt="">
          If you collide with an opponent you&apos;ll lose energy. Collect starfish to replenish your
          energy stock.  
        </p>
        <p class="story-text">
          <img class="illustration-left pearl" src="./img/game_items/PNG/items/pearl.png" alt="">
          In order to be able to fight your opponents you need ammunition. Collect sea shells with 
          pearls to replenish your ammunition stock.  
        </p>
        <p class="story-text">
          <img class="illustration-right" src="./img/fish/PNG/blueJellyfish/move_000.png" alt="">
          Beware of blue jellyfish! They are immune to your bubbleshooting. You need to get past
          them without losing too much energy. 
        </p>
        <p class="story-text">
          <img class="illustration-left water-bomb" src="./img/game_items/PNG/bomb/move_000.png" alt="">
          Also, beware of water bombs! You must not collide with them under any circumstances.
          Otherwise you&apos;ll die instantly.  
        </p>
        <p class="story-text">
          <img class="illustration-right" src="./img/fish/PNG/lionfish/move_000.png" alt="">
          Emberclaw, the big lionfish, is your final opponent. You&apos;ll have to hit him at least
          three times to kill him. And beware - he swims faster than you.   
        </p>
        <p class="story-text">
          <img class="illustration-left" src="./img/game_items/PNG/neutral/chest_closed.png" alt="">
          Once you have killed Emberclaw and collected the golden key swim past the dead Emberclaw to
          the treasure chest. You need to touch it in order to open it and free the little clownfish.
        </p>
        </div>
      </div>
    </div>
  </div>
  `;
}

/**
 * This function generates the HTML code for the imprint screen.
 * @returns - Returns HTML code for the imprint screen.
 */
function generateImprintContentHTML() {
  return /* html */ `
  <div class="screen-inner-wrapper">
    <header>
      <button onclick="backToStartScreen()" class="back-button">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
      <h1 class="h1-playing-area">Imprint</h1>
      <button class="back-button invisible">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
    </header>
    <div class="textarea-wrapper">
      <div class="textarea">
        <div class="text">
      <h2>Information according to § 5 TMG:</h2>
            <p class="story-text">
              <span class="bold">Represented by:</span> <br />
              <span>Annette Lasar</span>
            </p>
            <p class="story-text">
              <span class="bold">Contact:</span> <br />
              Buchfeldstraße 19 <br />
              74632 Neuenstein <br />
              Germany <br />
              <span>Phone: 0151-70145561</span> <br />
              <span>Email: a_lasar@web.de</span>
            </p>
            <h2>Disclaimer</h2>
            <h3>Liability for content</h3>
            <p class="story-text">
              The contents of our pages were created with the utmost care.
              However, we cannot guarantee the accuracy, completeness, and
              timeliness of the content. As a service provider, we are
              responsible for our own content on these pages in accordance with
              general laws pursuant to Section 7 (1) of the German Telemedia Act
              (TMG). According to §§ 8 to 10 TMG, however, we are not obligated
              as a service provider to monitor transmitted or stored third-party
              information or to investigate circumstances that indicate illegal
              activity. Obligations to remove or block the use of information
              under general law remain unaffected. However, liability in this
              regard is only possible from the time of knowledge of a specific
              infringement. Upon becoming aware of corresponding infringements,
              we will remove this content immediately.
            </p>

            <h3>Liability for links</h3>

            <p class="story-text">
              Our offer contains links to external websites of third parties, on
              whose contents we have no influence. Therefore, we cannot assume
              any liability for these external contents. The respective provider
              or operator of the pages is always responsible for the content of
              the linked pages. The linked pages were checked for possible legal
              violations at the time of linking. Illegal content was not
              recognizable at the time of linking. However, a permanent content
              control of the linked pages is not reasonable without concrete
              evidence of a violation of law. Upon becoming aware of legal
              violations, we will remove such links immediately.
            </p>

            <h3>Copyright</h3>
            <p class="story-text">
              The content and works created by the site operators on these pages
              are subject to German copyright law. The duplication, processing,
              distribution, and any kind of exploitation outside the limits of
              copyright require the written consent of the respective author or
              creator. Downloads and copies of this site are only permitted for
              private, non-commercial use. Insofar as the content on this site
              was not created by the operator, the copyrights of third parties
              are respected. In particular, third-party content is identified as
              such. Should you nevertheless become aware of a copyright
              infringement, please inform us accordingly. Upon becoming aware of
              legal violations, we will remove such content immediately.
            </p>
            <h3>Data protection</h3>
            <p class="story-text">
              The use of our website is usually possible without providing
              personal data. As far as personal data (e.g., name, address, or
              email addresses) is collected on our pages, this is always done on
              a voluntary basis, as far as possible. This data will not be
              passed on to third parties without your express consent. We would
              like to point out that data transmission over the Internet (e.g.,
              communication by email) can have security vulnerabilities.
              Complete protection of data against access by third parties is not
              possible. The use of contact data published within the scope of
              the imprint obligation by third parties for sending unsolicited
              advertising and information materials is hereby expressly
              prohibited. The operators of the pages expressly reserve the right
              to take legal action in the event of the unsolicited sending of
              advertising information, such as through spam emails.
            </p>
            <p class="story-text">Website imprint by <a href="https://www.impressum-generator.de/">impressum-generator.de</a> and translated by ChatGPT</p>
            </div>
          </div>
    </div>
 </div>
  `;
}

/**
 * This function generates the HTML code for the winner screen.
 * @returns - Returns HTML code for the winner screen.
 */
function generateWinnerScreenContentHTML() {
  return /* html */ `
  <div class="screen-inner-wrapper">
    <header>
      <button onclick="backToStartScreen()" class="back-button invisible">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
      <h1 class="h1-playing-area-story">Congratulations!</h1>
      <button class="back-button invisible">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
    </header>
    <div class="game-result-wrapper">
      <div class="game-result">
        <img src="./img/game_ui/PNG/you_win/window_1.png" alt="">
        <img class="star-results" src="./img/game_ui/PNG/you_win/star_1.png" alt="">
        <img class="game-result-sign" src="./img/game_ui/PNG/you_win/header.png" alt="">
        <img onclick="replayGame()" class="replay-button" src="./img/game_ui/PNG/you_win/restart.png" alt="">     
      </div>
      <img class="jellyfish_01" src="./img/fish/PNG/blueJellyfish/move_000.png" alt="">
      <img class="jellyfish_02" src="./img/fish/PNG/blueJellyfish/move_000.png" alt="">
      <img class="clownfish" src="./img/fish/PNG/clownfish/move_000.png" alt="">
    </div>
    </div>
  `;
}

/**
 * This function generates the HTML code for the winner screen.
 * @returns - Returns HTML code for the winner screen.
 */
function generateLoserScreenContentHTML() {
  return /* html */ `
  <div class="screen-inner-wrapper">
    <header>
      <button onclick="backToStartScreen()" class="back-button invisible">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
      <h1 class="h1-playing-area-story">So sorry ...</h1>
      <button class="back-button invisible">
        <img src="./img/game_ui/PNG/buttons/prew.png" alt="" />
      </button>
    </header>
    <div class="game-result-wrapper">
      <div class="game-result">
        <img src="./img/game_ui/PNG/you_win/window_1.png" alt="">
        <img class="star-results" src="./img/game_ui/PNG/you_lose/star.png" alt="">
        <img class="game-result-sign" src="./img/game_ui/PNG/you_lose/header.png" alt="">
        <img onclick="replayGame()" class="replay-button" src="./img/game_ui/PNG/you_win/restart.png" alt="">     
      </div>
      <img class="crab_01" src="./img/fish/PNG/redCrab/idle_000.png" alt="">
      <img class="crab_02" src="./img/fish/PNG/redCrab/idle_000.png" alt="">
      <img class="lionfish" src="./img/fish/PNG/lionfish/move_000.png" alt="">
    </div>
    </div>
  `;
}
