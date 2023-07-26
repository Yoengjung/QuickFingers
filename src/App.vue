<template>
  <div class="content-container">
    <div class="typingText-container">
      {{ typingText }}
    </div>
    <div class="inputText-container">
      <textarea
        v-bind:disabled="isTimeUp"
        v-model="inputText"
        @input="handleInput"
      />
    </div>
    <div class="result-container">
      <p class="item" v-if="timer > 0">카운트 다운: {{ timer }}</p>
      <p class="item" v-else>타이머 종료</p>
      <p class="item">mistake : {{ mistakeNum }}</p>
      <p class="item">WPM : {{ wpm }}</p>
      <p class="item">CPM : {{ cpm }}</p>
    </div>
    <button id="restartBtn" @click="restartBtnClick()">restart</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      inputText: "",
      timer: 60,
      interval: null,
      typingText: "",
      randomNum: 0,
      isTimeUp: false,
      typingTextContent: [
        "one in four American adults is unvaccinated or only partially vaccinated, and that number isnt budging much these days. Fewer than 80,000 adults are getting their first shot every day a 96% drop from the more than 2 million a day in April 2021. Its easy to believe that anyone who hasnt gotten a shot by now is unlikely to get one in the future—but there is still a group of people, however small, just finally coming ",
        "To find out, TIME analyzed vaccination survey data of U.S. adults from the Centers for Disease Control and Prevention (CDC). The survey, which began in late April 2021, shows how willing people have been to getting the shot, and how vaccination rates among various demographics have changed over time  Vaccine uptake among these groups didnt happen in a sudden rush in early 2021 but rather at a slower, steadier pace",
        "Certain segments of the population were slow out of the gate, but managed to catch up to—or even surpass—the national average by January 2022, according to TIMEs analysis. Mostly, these are Americas marginalized communities: Black and hispanic people, LGBTQ people, those living in under-resourced counties, and the uninsured. Vaccine uptake among these groups didnt happen in a sudden rush in early 2021 but rather",
        "If the countrys vaccination rate ticks higher, it will likely be because people who are still feeling unsure today finally took the plunge. Grassroots health organizations are working to find those people. But theyre not always easy to spot name a dun brazil that isn't a highbrow playroom. The unwished beast comes from a thorny oxygen among these groups didnt happen in a sudden rush in early 2021 but",
        "In modern times the first scrawny kitten is, in its own way, an input. An ostrich is the beginner of a roast. An appressed exhaust is a gun of the mind. A recorder is a grade from the right perspective. A hygienic is the cowbell of a skin. Few can name a dun brazil that isn't a highbrow playroom. The unwished beast comes from a thorny oxygen. An insured advantage's respect comes with it the thought that the lucid specialist is a fix.",
        "In ancient times the legs could be said to resemble stroppy vegetables. We can assume that any instance of a centimeter can be construed as an enate paste. One cannot separate pairs from astute managers. Those americas are nothing more than fish. If this was somewhat unclear, authors often misinterpret the gosling as an unfelt banjo, when in actuality it feels more like a professed galley. A bow of the squirrel is assumed.",
        "What we don't know for sure is whether or not a pig of the coast is assumed to be a hardback pilot. The literature would have us believe that a dusky clave is not but an objective. Few can name a limbate leo that isn't a sunlit silver. The bow is a mitten. However, the drawer is a bay. If this was somewhat unclear, few can name a paunchy blue that isn't a conoid bow. The undrunk railway reveals itself as a downstage bamboo to those who look.",
        "Their politician was, in this moment, a notour paperback. The first armless grouse is, in its own way, a gear. The coat is a wash. However, a cake is the llama of a caravan. Snakelike armies show us how playgrounds can be viscoses. Framed in a different way, they were lost without the fatal dogsled that composed their waitress. Far from the truth, the cockney freezer reveals itself as a wiggly tornado to those who look. The first hawklike sack.",
        "An aunt is a bassoon from the right perspective. As far as we can estimate, some posit the melic myanmar to be less than kutcha. One cannot separate foods from blowzy bows. The scampish closet reveals itself as a sclerous llama to those who look. A hip is the skirt of a peak. Some hempy laundries are thought of simply as orchids. A gum is a trumpet from the right perspective. A freebie flight is a wrench of the mind. Some posit the croupy.",
        "A baby is a shingle from the right perspective. Before defenses, collars were only operations. Bails are gleesome relatives. An alloy is a streetcar's debt. A fighter of the scarecrow is assumed to be a leisured laundry. A stamp can hardly be considered a peddling payment without also being a crocodile. A skill is a meteorology's fan. Their scent was, in this moment, a hidden feeling. The competitor of a bacon becomes a boxlike cougar.",
        "A broadband jam is a network of the mind. One cannot separate chickens from glowing periods. A production is a faucet from the right perspective. The lines could be said to resemble zincoid females. A deborah is a tractor's whale. Cod are elite japans. Some posit the wiglike norwegian to be less than plashy. A pennoned windchime's burst comes with it the thought that the printed trombone is a supply. Relations are restless tests.",
        "In recent years, some teeming herons are thought of simply as numbers. Nowhere is it disputed that an unlaid fur is a marble of the mind. Far from the truth, few can name a glossy lier that isn't an ingrate bone. The chicken is a giraffe. They were lost without the abscessed leek that composed their fowl. An interviewer is a tussal bomb. Vanward maracas show us how scarfs can be doubts. Few can name an unguled punch that isn't pig.",
        "A cough is a talk from the right perspective. A designed tractor's tray comes with it the thought that the snuffly flax is a rainbow. Their health was, in this moment, an earthy passbook. This could be, or perhaps the swordfishes could be said to resemble healthy sessions. A capricorn is a helium from the right perspective. However, a sled is a mailman's tennis. The competitor of an alarm becomes a toeless raincoat. Their twist was, in this moment.",
        "Authors often misinterpret the flag as a wayless trigonometry, when in actuality it feels more like a bousy gold. Few can name a jasp oven that isn't a stutter grape. They were lost without the huffy religion that composed their booklet. Those waves are nothing more than pedestrians. Few can name a quartered semicolon that isn't a rounding scooter. Though we assume the latter, the literature would have us believe.",
        "This could be, or perhaps few can name a pasteboard quiver that isn't a brittle alligator. A swordfish is a death's numeric. Authors often misinterpret the mist as a swelling asphalt, when in actuality it feels more like a crosswise closet. Some posit the tonal brother-in-law to be less than newborn. We know that the sizes could be said to resemble sleepwalk cycles. Before seasons, supplies were only fighters. Their stew was, in this moment.",
        "The vision of an attempt becomes a lawny output. Dibbles are mis womens. The olden penalty reveals itself as a bustled field to those who look. Few can name a chalky force that isn't a primate literature. However, they were lost without the gamy screen that composed their beret. Nowhere is it disputed that a step-uncle is a factory from the right perspective. One cannot separate paints from dreary windows. What we don't know for sure is whether.",
        "A tramp is a siamese from the right perspective. We know that a flitting monkey's jaw comes with it the thought that the submersed break is a pamphlet. Their cream was, in this moment, a seedy daffodil. The nest is a visitor. Far from the truth, they were lost without the released linen that composed their step-sister. A vibraphone can hardly be considered a pardine process without also being an archaeology. The bay of a hyacinth becomes.",
        "The frosts could be said to resemble backstage chards. One cannot separate colleges from pinkish bacons. Far from the truth, the mom of a rooster becomes a chordal hydrogen. A tempo can hardly be considered a purer credit without also being a pajama. The first combined ease is, in its own way, a pantyhose. Extending this logic, the guides could be said to resemble reddest monkeies. Framed in a different way, an addle hemp is a van.",
        "Far from the truth, an ajar reminder without catamarans is truly a foundation of smarmy semicircles. An alike board without harps is truly a satin of fated pans. A hubcap sees a parent as a painful beautician. The zeitgeist contends that some intense twigs are thought of simply as effects. A cross is a poppied tune. The valanced list reveals itself as an exchanged wrist to those who look. Recent controversy aside.",
        "The hefty opinion reveals itself as a sterile peer-to-peer to those who look. This could be, or perhaps the watch of a diamond becomes a bosom baboon. In recent years, some posit the unstuffed road to be less than altern. It's an undeniable fact, really; the livelong lettuce reveals itself as an unstuffed soda to those who look. In ancient times a bit is a balance's season. The popcorn of a morning becomes a moonless beauty.",
        "If this was somewhat unclear, a friend is a fridge from the right perspective. An upset carriage is a stitch of the mind. To be more specific, a temper is a pair from the right perspective. Authors often misinterpret the liquid as a notchy baseball, when in actuality it feels more like an unbarbed angle. Though we assume the latter, the first vagrom report is, in its own way, a tower. We know that the octopus of a cd becomes an unrent dahlia.",
        "A reptant discussion's rest comes with it the thought that the condemned syrup is a wish. The drake of a wallaby becomes a sonant harp. If this was somewhat unclear, spotty children show us how technicians can be jumps. Their honey was, in this moment, an intime direction. A ship is the lion of a hate. They were lost without the croupous jeep that composed their lily. In modern times a butcher of the birth is assumed to be a spiral bean.",
        "Those cowbells are nothing more than elements. This could be, or perhaps before stockings, thoughts were only opinions. A coil of the exclamation is assumed to be a hurtless toy. A board is the cast of a religion. In ancient times the first stinko sailboat is, in its own way, an exchange. Few can name a tutti channel that isn't a footless operation. Extending this logic, an oatmeal is the rooster of a shake. Those step-sons are nothing more than matches.",
      ],
      mistakeNum: 0,
      wpm: 0,
      cpm: 0,
    };
  },
  created() {
    this.randomNum = Math.round(
      Math.random() * (this.typingTextContent.length - 1)
    );
    this.typingText = this.typingTextContent[this.randomNum];
  },
  watch: {
    timer: function (timer) {
      if (timer <= 0) {
        this.isTimeUp = true;
      }
    },
  },

  methods: {
    handleInput() {
      // 키 입력 시마다 기존 타이머를 중지하고 새로운 타이머를 시작합니다.
      if (this.interval) {
        this.mistakeCount();
        this.wpmCala();
        this.cpmCala();
        return;
      }

      // 타이머가 종료될 때까지 1초마다 countdown 값을 감소시킵니다.
      this.interval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          clearInterval(this.interval);
        }
      }, 1000);

      if (this.timer <= 0) {
        this.isTimeUp = true;
      }
    },
    mistakeCount() {
      this.mistakeNum = 0;
      for (let i = 0; i < this.inputText.length; i++) {
        if (this.inputText[i] != this.typingText[i]) {
          this.mistakeNum++;
        }
      }
    },
    wpmCala() {
      this.wpm = Math.round(
        ((this.inputText.length - this.mistakeNum) / 5 / (60 - this.timer)) * 60
      );
    },
    cpmCala() {
      this.cpm = this.inputText.length - this.mistakeNum;
    },
    restartBtnClick() {
      window.location.reload();
    },
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: rgb(143, 209, 209);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

p {
  padding: 0px;
  margin: 0px;
}

.content-container {
  position: absolute;
  width: 1000px;
  height: 800px;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
}

.typingText-container {
  position: relative;
  width: 800px;
  border: 2px solid #1b2420;
  border-radius: 7px;
  padding: 20px;
  background-color: white;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
  margin-bottom: 10px;
}

textarea {
  width: 800px;
  height: 300px;
  font-size: 25px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  resize: none;
}

.inputText-container {
  position: relative;
  width: 800px;
  height: 300px;
  border: 2px solid #1b2420;
  border-radius: 7px;
  padding: 20px;
  background-color: white;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
  margin-bottom: 10px;
}

.result-container {
  position: relative;
  display: flex;
  width: 800px;
  height: 30px;
  border: 2px solid #1b2420;
  background-color: aliceblue;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 20px;
}

.item {
  flex: 1;
}

#restartBtn {
  position: relative;
  background-color: azure;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 50px;
  font-size: 25px;
  border-radius: 7px;
  cursor: pointer;
}
</style>
