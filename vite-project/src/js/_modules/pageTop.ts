export default class PageTop {
	app = document.querySelector("#app");

	init(): void {
		if (this.app) {
			this.app.addEventListener("click", (event) => {
				event.preventDefault();
				console.log("ok");
			});
		}
	}
}
