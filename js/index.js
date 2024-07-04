import { Details } from "./details.js";
new Details();

import { Ui } from "./UI.js";
new Ui();

class Games {

    constructor () {

        this.getGames("MMORPG");

        this.details = new Details();
        this.ui = new Ui();

        this.links = document.querySelectorAll(".nav-link");
        for (const link of this.links) {
            link.addEventListener("click", (e) => {
                document.querySelector(".active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            });
        }
    }

    async getGames (category) {
        const loader = document.querySelector(".loading");
        loader.classList.remove("d-none")

        try {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'fdb321108emshd97abe78e0e4556p146924jsn4a40dbe9908a',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };

            const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            const data = await res.json();

            this.ui.displayGames(data);

            loader.classList.add("d-none")

            this.getGameDetail();

        } catch(err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            let loader = document.querySelector(".loading");
            loader.classList.add("d-none")
        }
    }

    getGameDetail() {
        let cards = document.querySelectorAll(".card");
        for (const card of cards) {
        card.addEventListener("click", () => {
            document.querySelector(".games").classList.add("d-none");
            document.querySelector(".game-detail").classList.remove("d-none");
            this.details.getDetails(card.dataset.id);
        });
        }
    }
}
new Games();