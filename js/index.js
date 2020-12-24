const app = {
  data() {
    return {
      pHands: ["1F44A", "1F590", "270C"],
      hCounter: null,
      timeOutT: 250,
      chanceTime1: true,
      chanceTime2: true,
      resultArray: [],
    };
  },
  methods: {
    go(f1) {
      var randH = Math.floor(Math.random() * 3);
      var pRandh = this.pHands[randH];
      var p1 = document.querySelector(".player1");
      var p2 = document.querySelector(".player2");
      var innerScSp1 = document.querySelector("#innerScSp1");
      var innerScSp2 = document.querySelector("#innerScSp2");
      if (f1 == 1) {
        this.chanceTime1 = false;
        this.chanceTime2 = true;
        this.hCounter++;
        p1.style.border = "2px solid #0f0";
        setTimeout(() => {
          p1.style.border = "2px solid #08f";
          p1.innerHTML = "&#x" + pRandh + ";";
          var pRandhObj = { id1: "p1", data1: pRandh };
          this.resultArray.push(pRandhObj);
          //------------------
          if (this.hCounter % 2 == 0) {
            if (
              this.resultArray[0].data1 == "270C" &&
              this.resultArray[1].data1 == "1F44A"
            ) {
              if (this.resultArray[1].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[1].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (
              this.resultArray[0].data1 == "1F44A" &&
              this.resultArray[1].data1 == "270C"
            ) {
              if (this.resultArray[0].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[0].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (
              this.resultArray[0].data1 == "1F44A" &&
              this.resultArray[1].data1 == "1F590"
            ) {
              if (this.resultArray[1].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[1].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (
              this.resultArray[1].data1 == "1F44A" &&
              this.resultArray[0].data1 == "1F590"
            ) {
              if (this.resultArray[0].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[0].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (
              this.resultArray[0].data1 == "1F590" &&
              this.resultArray[1].data1 == "270C"
            ) {
              if (this.resultArray[1].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[1].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (
              this.resultArray[1].data1 == "1F590" &&
              this.resultArray[0].data1 == "270C"
            ) {
              if (this.resultArray[0].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[0].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (this.resultArray[0].data1 == this.resultArray[1].data1) {
              innerScSp1.innerHTML = "0";
              innerScSp2.innerHTML = "0";
            }
          } else {
            innerScSp1.innerHTML = "0";
            innerScSp2.innerHTML = "0";
            this.resultArray = [];
            this.resultArray.push(pRandhObj);
          }
        }, this.timeOutT);
      } else if (f1 == 2) {
        this.chanceTime2 = false;
        this.chanceTime1 = true;
        this.hCounter++;
        p2.style.border = "2px solid #0f0";
        setTimeout(() => {
          p2.style.border = "2px solid #08f";
          p2.innerHTML = "&#x" + pRandh;
          var pRandhObj1 = { id1: "p2", data1: pRandh };
          this.resultArray.push(pRandhObj1);
          //------------------
          if (this.hCounter % 2 == 0) {
            if (
              this.resultArray[0].data1 == "270C" &&
              this.resultArray[1].data1 == "1F44A"
            ) {
              if (this.resultArray[1].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[1].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (
              this.resultArray[0].data1 == "1F44A" &&
              this.resultArray[1].data1 == "270C"
            ) {
              if (this.resultArray[0].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[0].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (
              this.resultArray[0].data1 == "1F44A" &&
              this.resultArray[1].data1 == "1F590"
            ) {
              if (this.resultArray[1].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[1].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (
              this.resultArray[1].data1 == "1F44A" &&
              this.resultArray[0].data1 == "1F590"
            ) {
              if (this.resultArray[0].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[0].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (
              this.resultArray[0].data1 == "1F590" &&
              this.resultArray[1].data1 == "270C"
            ) {
              if (this.resultArray[1].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[1].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (
              this.resultArray[1].data1 == "1F590" &&
              this.resultArray[0].data1 == "270C"
            ) {
              if (this.resultArray[0].id1 === "p1") {
                innerScSp1.innerHTML = "1";
                innerScSp2.innerHTML = "0";
              } else if (this.resultArray[0].id1 === "p2") {
                innerScSp1.innerHTML = "0";
                innerScSp2.innerHTML = "1";
              }
            } else if (this.resultArray[0].data1 == this.resultArray[1].data1) {
              innerScSp1.innerHTML = "0";
              innerScSp2.innerHTML = "0";
            }
          } else {
            innerScSp1.innerHTML = "0";
            innerScSp2.innerHTML = "0";
            this.resultArray = [];
            this.resultArray.push(pRandhObj1);
          }
        }, this.timeOutT);
      }
    },
  },
};
Vue.createApp(app).mount("#app");
