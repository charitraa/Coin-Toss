const score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0
        }

        updateScored();

        const playGame = (playerMove) =>{
            const coin = flipCoin();

            let result = '';
            if (playerMove === 'head') {
                if (coin === 'head') {
                    result = 'you win.';
                }
                else if (coin === 'tail') {
                    result = 'you lose.';
                }
                
            }
            else if (playerMove === 'tail') {
                if (coin === 'tail') {
                    result = 'you win.';
                }
                else if (coin === 'head') {
                    result = 'you lose.';
                }
                
            }

            if (result === 'you win.') {
                score.wins += 1;
            }
            else if (result === 'you lose.') {
                score.losses += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScored();


            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `you choose: <img src="${playerMove}.png" alt=""> Result:<img src="${coin}.png" alt=""> `;

            //     alert(`you picked ${C}. Computer Picked ${coin}. ${result}
            // wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);
        }
    

        function updateScored() {
            document.querySelector('.js-score').innerHTML = `wins:${score.wins}, Losses:${score.losses}`;

        }

        function flipCoin() {
            let coin = '';

            const randomNumber = Math.random();
            
            if (randomNumber >= 0 && randomNumber < 1 / 2) {
                coin = 'head';
            }
            else if (randomNumber >= 1 / 2 && randomNumber < 1) {
                coin = 'tail';
            }
            return coin;
        }