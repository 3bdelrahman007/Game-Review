export class Ui {

    displayGames(games) {
        let gamesContent = "";
        for (let i=0; i < games.length; i++) {
            gamesContent += `
                <div class="col-lg-4 col-md-6 col-xl-3">
                    <div class="card h-100 bg-transparent" data-id="${games[i].id}">
                        <div class="px-3 pt-3">
                            <img src="${games[i].thumbnail}" class="card-img-top" alt="game thumbnail">
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <h3 class="m-0 text-white">${games[i].title}</h3>
                                <span class="p-2 text-bg-primary">Free</span>
                            </div>
                            <p class="card-text text-center text-white opacity-50">
                                ${games[i].short_description.split(" ").slice(0, 8).join(" ")}...
                            </p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <span>${games[i].genre}</span>
                            <span>${games[i].platform}</span>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById("gamesData").innerHTML = gamesContent;
        }
    }

    displayGameDetails(data) {
        let gameDetail = `
            <div class="col-md-4">
                <img src="${data.thumbnail}" alt="game thumbnail" class="w-100">
            </div>
            <div class="col-md-8">
                <h3>Title: ${data.title}</h3>
                <p>Category: <span class="text-bg-info">${data.genre}</span></p>
                <p>Platform: <span class="text-bg-info">${data.platform}</span></p>
                <p>Status: <span class="text-bg-info">${data.status}</span></p>
                <p class="small">${data.description}</p>
                <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning mb-3">Show Game</a>
            </div>
            `;
        document.querySelector(".game-data").innerHTML = gameDetail;
    }
}