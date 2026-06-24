// variables
const commentForm = document.querySelector(".comment-form")
const formButton = commentForm.querySelector("button")
const commentsContainer = document.querySelector(".recent-comments-container")
const originalButtonText = formButton.textContent

// code logic
commentForm.addEventListener("submit", async (event) => {
  event.preventDefault()

  try {
    formButton.classList.add("loading")
    formButton.textContent = "Loading..."
    formButton.textContent = "✅"

    const formData = new FormData(commentForm)

    const response = await fetch(commentForm.action, {
      method: commentForm.method,
      body: new URLSearchParams(formData),
    })

    if (!response.ok) {
      console.error("Fout bij het opslaan van de reactie", response.status)
      formButton.textContent = "❌"
      formButton.classList.remove("loading")
      return
    }

    const responseData = await response.text()

    const parser = new DOMParser()
    const responseDOM = parser.parseFromString(responseData, "text/html")

    const newCommentsContainer = responseDOM.querySelector(
      ".recent-comments-container"
    )

    if (newCommentsContainer) {
      commentsContainer.innerHTML = newCommentsContainer.innerHTML
    }

    commentForm.reset()
  } catch (err) {
    console.error("Fout bij plaatsen comment:", err)
  } finally {
    formButton.classList.remove("loading")
    formButton.textContent = originalButtonText
  }
})