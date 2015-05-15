
        window.onload = function() {
        var age, hours, answer;
        var Guess = function() {
          //this.ending = "";//
          this.number = 0;
          this.total = 20;
        }
        var guess = new Guess();
        age = prompt("How old are you?");
        hours = prompt("If you are " + age + " then how many hours have you lived? You have a total of " + guess.total + " chances to correctly guess how many hours you've lived.");
        answer = age * 365 * 24;

        while (hours != answer) {
          guess.number++;
          guess.total--;
          if (guess.total == 0) {
            break;
          } else if (hours < answer) {
            hours = prompt("Your guess is too low, you should live longer. You have " + guess.total + " guesses remaining.");
          } else if (hours > answer) {
            hours = prompt("You haven't lived that long yet. You have " + guess.total + " guesses remaining.");
          }
        }

        if (guess.total == 0) {
          finalMessage = ('You lose!');
        } else {
          finalMessage = ("That's correct! You've been alive for " + answer + " hours.");
        }
        var endingTwo = document.getElementById('results')

        endingTwo.textContent = finalMessage
        }
