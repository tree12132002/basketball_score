let players = [
  { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector("#data-panel")

// write your code here
let icon = `<i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>`

function displayPlayerList(players) {
  let htmlContent = ``
  players.forEach((player) => {
    htmlContent += `
        <tr>
          <td>${player["name"]}</td>
          <td>
            <span>${player["pts"]}</span>
            ${icon}
          </td>
          <td>
            <span>${player["reb"]}</span>
            ${icon}
          </td>
          <td>
            <span>${player["ast"]}</span>
            ${icon}
          </td>
          <td>
            <span>${player["stl"]}</span>
            ${icon}
          </td>
          <td>
            <span>${player["blk"]}</span>
            ${icon}
          </td>
        </tr>
  `
  })
  dataPanel.innerHTML = htmlContent
}

displayPlayerList(players)

// new

dataPanel.addEventListener("click", function (evnet) {
  let target = event.target
  const scores = target.parentElement.children[0]
  let score = Number(scores.textContent)

  if (target.classList.contains('up')) {
    score++
  } else if (target.classList.contains('down')) {
    if (score > 0) {
      score--
    } else {
      score = 0
    }
  }
  scores.innerHTML = score
})
