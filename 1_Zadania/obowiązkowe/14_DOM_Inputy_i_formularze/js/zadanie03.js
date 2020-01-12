document.addEventListener('DOMContentLoaded', () => {
    class BoardManager {
        constructor() {
            this.board = document.querySelector("table.table");
            this.form = document.querySelector('form');
        }

        validateTeamNames(name1, name2) {
            if (name1 === name2) {
                return false;
            }

            return true;
        }

        validateScore(_score) {
            let score = parseInt(_score);

            if (isNaN(score)) {        
                return false;
            }

            if (score < 0) {
                return false;
            }

            return true;
        }

        addScoreToBoard(data) {

        }

        handleForm() {
            const { form } = this;
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const validators = [];
                let passed = true;
                const data = {
                    firstTeam: document.querySelector('input#team1').value,
                    secondTeam: document.querySelector('input#team2').value,
                    firstTeamPoints: document.querySelector('input#points1').value,
                    secondTeamPoints: document.querySelector('input#points2').value,
                }
                
                validators.push(this.validateTeamNames(data.firstTeam, data.secondTeam));
                validators.push(this.validateScore(data.firstTeamPoints));
                validators.push(this.validateScore(data.secondTeamPoints));

                validators.forEach((validator) => {
                    if (!validator) {
                        passed = false;
                    }
                });

                console.log(passed);
            });
        }

        init() {
            this.handleForm();
        }
    };

    const boardManager = new BoardManager;
    boardManager.init();
});