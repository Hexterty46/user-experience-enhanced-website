// variables
const commentForm = document.querySelector("#loadingButton")
const formButton = commentForm.querySelector("button")
const comments = document.querySelector("#comments article")

// code logic
commentForm.addEventListener("submit", async function (event) {
  event.preventDefault()

  formButton.classList.add("loading")
  formButton.textContent = "loading..."

  let formData = new FormData(scoreForm)

  const response = await fetch(scoreForm.action, {
    method: scoreForm.method,
    body: new URLSearchParams(formData),
  })

  const responseData = await response.text()

  const parser = new DOMParser()
  const responseDOM = parser.parseFromString(responseData, "text/html")

  const newState = responseDOM.querySelector("#comments article:first-of-type")

  scores.innerHTML = newState.innerHTML

  console.log("Loading state weghalen")
  formButton.classList.remove("loading")
  formButton.textContent = "Save score"
})