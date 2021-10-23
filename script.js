function calcTempo() {
  document.getElementById("tempoResultErrors").className = "outputErrors"
  document.getElementById("tempoResultErrors").innerText = ""
  document.getElementById("tempoResultBerekening").innerText = ""
  document.getElementById("tempoAfstand").className = "inputDropdown"
  document.getElementById("tempoStreeftijdUren").className = "inputSmall"
  document.getElementById("tempoStreeftijdMinuten").className = "inputSmall"
  document.getElementById("tempoStreeftijdSeconden").className = "inputSmall"
  let tempoAfstand = document.querySelector("#tempoAfstand").value
  let tempoStreeftijdUren = document.querySelector("#tempoStreeftijdUren").value
  let tempoStreeftijdMinuten = document.querySelector(
    "#tempoStreeftijdMinuten"
  ).value
  let tempoStreeftijdSeconden = document.querySelector(
    "#tempoStreeftijdSeconden"
  ).value
  document.getElementById("tempoResultErrors").innerText =
    "Niet alles is ingevuld"
  if (tempoAfstand == "") {
    document.getElementById("tempoAfstand").className = "inputDropdownError"
  }
  if (tempoStreeftijdUren == "") {
    document.getElementById("tempoStreeftijdUren").className = "inputSmallError"
  }
  if (tempoStreeftijdMinuten == "") {
    document.getElementById("tempoStreeftijdMinuten").className =
      "inputSmallError"
  }
  if (tempoStreeftijdSeconden == "") {
    document.getElementById("tempoStreeftijdSeconden").className =
      "inputSmallError"
  }
  {
    if (
      tempoAfstand != "" &&
      tempoStreeftijdUren != "" &&
      tempoStreeftijdMinuten != "" &&
      tempoStreeftijdSeconden != ""
    )
      if (
        tempoStreeftijdUren == "00" &&
        tempoStreeftijdMinuten == "00" &&
        tempoStreeftijdSeconden == "00"
      ) {
        document.getElementById("tempoStreeftijdUren").className =
          "inputSmallError"
        document.getElementById("tempoStreeftijdMinuten").className =
          "inputSmallError"
        document.getElementById("tempoStreeftijdSeconden").className =
          "inputSmallError"
        document.getElementById("tempoResultErrors").innerText =
          "Je streeftijd mag geen 00:00:00 zijn"
      } else {
        let tempoStreeftijdTotaal
        tempoStreeftijdTotaal =
          parseInt(tempoStreeftijdSeconden) +
          parseInt(tempoStreeftijdMinuten) * 60 +
          parseInt(tempoStreeftijdUren) * 3600
        let tempoTempoMinuten, tempoTempoSeconden
        tempoTempoMinuten = Math.floor(
          tempoStreeftijdTotaal / parseFloat(tempoAfstand) / 60
        )

        tempoTempoSeconden = Math.floor(
          tempoStreeftijdTotaal / parseFloat(tempoAfstand) -
            tempoTempoMinuten * 60
        )
        if (tempoTempoSeconden < 10) {
          tempoTempoSeconden = "0" + tempoTempoSeconden
        }
        let tempoTempo, tempoSecondenPerMinuut, tempoSnelheid
        tempoTempo = tempoTempoMinuten + ":" + tempoTempoSeconden
        tempoSecondenPerMinuut =
          parseInt(tempoTempoSeconden) + parseInt(tempoTempoMinuten) * 60
        console.log(tempoSecondenPerMinuut)
        tempoSnelheid = Number(3600 / tempoSecondenPerMinuut)
          .toFixed(1)
          .replace(".", ",")
        console.log(tempoSnelheid)
        document.getElementById("tempoResultErrors").className =
          "outputErrorsBerekening"
        document.getElementById("tempoResultErrors").innerText =
          "Hiervoor heb je een snelheid van " +
          tempoSnelheid +
          " km/u nodig. Dat is gelijk aan:"
        document.getElementById(
          "tempoResultBerekening"
        ).innerHTML = `<b>${tempoTempo}</b> min/km`
      }
  }
}

// DONE!

function calcEindtijd() {
  document.getElementById("eindtijdResultErrors").className = "outputErrors"
  document.getElementById("eindtijdResultErrors").innerText = ""
  document.getElementById("eindtijdResultBerekening").innerText = ""
  document.getElementById("eindtijdTempoMinuten").className = "inputSmall"
  document.getElementById("eindtijdTempoSeconden").className = "inputSmall"
  document.getElementById("eindtijdAfstand").className = "inputDropdown"
  let eindtijdTempoMinuten = document.querySelector(
    "#eindtijdTempoMinuten"
  ).value
  let eindtijdTempoSeconden = document.querySelector(
    "#eindtijdTempoSeconden"
  ).value
  let eindtijdAfstand = document.querySelector("#eindtijdAfstand").value
  document.getElementById("eindtijdResultErrors").innerText =
    "Niet alles is ingevuld"
  if (eindtijdTempoMinuten == "") {
    document.getElementById("eindtijdTempoMinuten").className =
      "inputSmallError"
  }
  if (eindtijdTempoSeconden == "") {
    document.getElementById("eindtijdTempoSeconden").className =
      "inputSmallError"
  }
  if (eindtijdAfstand == "") {
    document.getElementById("eindtijdAfstand").className = "inputDropdownError"
  }
  {
    if (
      eindtijdTempoMinuten != "" &&
      eindtijdTempoSeconden != "" &&
      eindtijdAfstand != ""
    )
      if (eindtijdTempoMinuten == "00" && eindtijdTempoSeconden == "00") {
        document.getElementById("eindtijdTempoMinuten").className =
          "inputSmallError"
        document.getElementById("eindtijdTempoSeconden").className =
          "inputSmallError"
        document.getElementById("eindtijdResultErrors").innerText =
          "Je tempo moet groter zijn dan 00:00"
      } else {
        let eindtijdTotaalSeconden,
          eindtijdEindtijdUren,
          eindtijdEindtijdMinuten,
          eindtijdEindtijdSeconden,
          eindtijdSnelheid
        eindtijdTotaalSeconden =
          parseInt(eindtijdTempoMinuten) * 60 + parseInt(eindtijdTempoSeconden)

        eindtijdTotaalSecondenMaalAfstand =
          eindtijdTotaalSeconden * parseFloat(eindtijdAfstand)

        eindtijdEindtijdUren = Math.floor(
          eindtijdTotaalSecondenMaalAfstand / 3600
        )
        eindtijdEindtijdMinuten =
          Math.floor(eindtijdTotaalSecondenMaalAfstand / 60) -
          eindtijdEindtijdUren * 60
        eindtijdEindtijdSeconden =
          Math.floor(eindtijdTotaalSecondenMaalAfstand) -
          eindtijdEindtijdMinuten * 60 -
          eindtijdEindtijdUren * 3600

        if (eindtijdEindtijdMinuten < 10) {
          eindtijdEindtijdMinuten = "0" + eindtijdEindtijdMinuten
        }
        if (eindtijdEindtijdSeconden < 10) {
          eindtijdEindtijdSeconden = "0" + eindtijdEindtijdSeconden
        }
        if (eindtijdEindtijdUren == 0) {
          eindtijdEindtijd =
            eindtijdEindtijdMinuten + ":" + eindtijdEindtijdSeconden
        } else {
          eindtijdEindtijd =
            eindtijdEindtijdUren +
            ":" +
            eindtijdEindtijdMinuten +
            ":" +
            eindtijdEindtijdSeconden
        }

        eindtijdSnelheid = Number(3600 / eindtijdTotaalSeconden)
          .toFixed(1)
          .replace(".", ",")
        document.getElementById("eindtijdResultErrors").className =
          "outputErrorsBerekening"
        document.getElementById("eindtijdResultErrors").innerText =
          "Je tempo staat gelijk aan een snelheid van " +
          eindtijdSnelheid +
          " km/u."
        document.getElementById(
          "eindtijdResultBerekening"
        ).innerHTML = `je verwachte eindtijd is dan <br><b>${eindtijdEindtijd}</b>`
      }
  }
}
// DONE!!!

function calcAfstand() {
  document.getElementById("afstandResultErrors").innerText =
    "Deze module wordt aan gewerkt..."
}
// TODO
