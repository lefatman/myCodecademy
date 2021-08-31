const randomGenerator = num => {
    return Math.floor(Math.random() * num)
 }
 
 let historicalFigures = {
     peasRobin: [
         `I believe once a man comes of age he has no reason to be poor`,
         `Life Insurance is commodified legacy`, 
         `what is poverty is it a fruit?`, 
         `Laughter is the best medicine`, 
         `Gents never let your wife and the love of your life meet`
     ],
     nelsonMandela: [
         `To be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of other`,
         `Resentment is like drinking poison and then hoping it will kill your enemies`,
         `Education is the most powerful weapon we can use to change the world`,
         `I like friends who have independent minds because they tend to make you see problems from all angles`,
         `Lead from the back and let others believe they are in front`
     ],
     martinLutherKing: [
         `Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that`,
         `Injustice anywhere is a threat to justice everywhere`,
         `The time is always right to do what is right`,
         `Life's most persistent and urgent question is, 'What are you doing for others?`,
         `Our lives begin to end the day we become silent about things that matter`
     ],
     marcusGarvey: [
        `Our lives begin to end the day we become silent about things that matter`,
        `If you have no confidence in self, you are twice defeated in the race of life`,
        `Liberate the minds of men and ultimately you will liberate the bodies of men`,
        `Chance has never yet satisfied the hope of a suffering people`,
        `I have no desire to take all black people back to Africa; there are blacks who are no good here and will likewise be no good there`
    ]
 }
 let weirdBeginnings=['It may be the weed talking but,','A unicorn once told me','This is strange but what the hell,',' I am not racist but'];
 let weirdEndings =['with dees nuts', 'but hey I was in a stripclub bathroom','thats the last time I drink spiked tequila',' maybe it was because I was drunk at the time'];
 let generateMassage = document.getElementById('generate_joke');
 let output = document.getElementById('output_data');
 
 generateMassage.addEventListener('click', () => {
     let final_message = [];
     let randomPerson = randomGenerator(4)
     let randomQuote = randomGenerator(5)
     let randomWeirdness = randomGenerator(4)
     let randomBeginning = randomGenerator(4)
     if (randomPerson === 0) {
         final_message.push(`"${weirdBeginnings[randomBeginning]} ${historicalFigures.peasRobin[randomQuote]} ${weirdEndings[randomWeirdness]}" - Peazy the Conqueror`)
     } else if (randomPerson === 1) {
         final_message.push(`"${weirdBeginnings[randomBeginning]} ${historicalFigures.nelsonMandela[randomQuote]} ${weirdEndings[randomWeirdness]}"  - Nelson Mandela`)
     } else if (randomPerson === 2) {
         final_message.push(`"${weirdBeginnings[randomBeginning]} ${historicalFigures.martinLutherKing[randomQuote]} ${weirdEndings[randomWeirdness]}" - Martin-Luther King`)
     }   
     else if (randomPerson === 3) {
        final_message.push(`"${weirdBeginnings[randomBeginning]} ${historicalFigures.marcusGarvey[randomQuote]} ${weirdEndings[randomWeirdness]}" - Marcus Garvey`)
    }   
     let formatFinalMessage = message => message = final_message;
     output.innerHTML = formatFinalMessage(final_message);
 });