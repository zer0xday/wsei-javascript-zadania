document.addEventListener('DOMContentLoaded', () => {
    class BoardManager {
        constructor() {
            this.board = document.querySelector("table.table > tbody");
            this.form = document.querySelector('form');
        }

        validateTeamNames(name1, name2) {
            return name1 !== name2;
        }

        validateScore(_score) {
            let score = parseInt(_score);

            if (isNaN(score)) {        
                return false;
            }

            return score >= 0;
        }

        _createColumn(text) {
            let td = document.createElement('td');
            td.innerHTML = text;
            return td;
        }

        _createRow(data) {
            let row = document.createElement("tr");
            let team1 = this._createColumn(data.firstTeam.value);
            let team2 = this._createColumn(data.secondTeam.value);
            let score = this._createColumn(
                `${data.firstTeamPoints.value} - ${data.secondTeamPoints.value}`
            );

            row.appendChild(team1);
            row.appendChild(team2);
            row.appendChild(score);
            return row;
        }

        addScoreToBoard(data) {
            const { board } = this;
            let row = this._createRow(data);

            board.appendChild(row);
        }

        clearForm(data) {
            for (let input in data) {
                data[input].value = "";
            }
        }

        handleForm() {
            const { form } = this;
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const validators = [];
                let passed = true;
                const data = {
                    firstTeam: document.querySelector('input#team1'),
                    secondTeam: document.querySelector('input#team2'),
                    firstTeamPoints: document.querySelector('input#points1'),
                    secondTeamPoints: document.querySelector('input#points2'),
                };
                
                validators.push(this.validateTeamNames(data.firstTeam.value, data.secondTeam.value));
                validators.push(this.validateScore(data.firstTeamPoints.value));
                validators.push(this.validateScore(data.secondTeamPoints.value));

                validators.forEach((validator) => {
                    if (!validator) {
                        passed = false;
                    }
                });

                if (passed) {
                    this.addScoreToBoard(data);
                    this.clearForm(data);
                }
            });
        }

        init() {
            this.handleForm();
        }
    }

    const boardManager = new BoardManager;
    boardManager.init();
});