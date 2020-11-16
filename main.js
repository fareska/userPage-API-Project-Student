
const firstUser = new APIManager
const renderer = new Renderer()

$("#data").on("click", () => firstUser.loadData())

$("#view").on("click", () =>renderer.Render(firstUser.getData()))
