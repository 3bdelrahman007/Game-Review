import { Ui } from "./UI.js";
new Ui();


export class Details {

    constructor () {

        this.ui = new Ui();
        document.querySelector(".btn-close").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".game-detail").classList.add("d-none");
        });
    }

    async getDetails(gemeId) {
        const loader = document.querySelector(".loading");
        loader.classList.remove("d-none");
        try {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'fdb321108emshd97abe78e0e4556p146924jsn4a40dbe9908a',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
        };

        const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gemeId}`, options);
        const data = await res.json();
        this.ui.displayGameDetails(data);
        loader.classList.add("d-none")

        } catch (err) {
            alert(err);
        }
    }
}