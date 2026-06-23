// variables
const commentForm = document.querySelector(".comment-form")
const formButton = commentForm.querySelector("button")
const comments = document.querySelector("#comments article")
const originalButtonText = formButton.textContent

// code logic
commentForm.addEventListener("submit", async function (event) {
  event.preventDefault()

  formButton.classList.add("loading")
  formButton.textContent = "loading..."

  let formData = new FormData(commentForm)

  const response = await fetch(commentForm.action, {
    method: commentForm.method,
    body: new URLSearchParams(formData),
  })

  const responseData = await response.text()

  const parser = new DOMParser()
  const responseDOM = parser.parseFromString(responseData, "text/html")

  const newState = responseDOM.querySelector("#comments article:first-of-type")

  comments.innerHTML = newState.innerHTML

  console.log("Loading state weghalen")
  formButton.classList.remove("loading")
  formButton.textContent = "Laden"

  setTimeout(() => {
    formButton.textContent = originalButtonText
  }, 1000)
})