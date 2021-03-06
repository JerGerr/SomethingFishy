const form = document.querySelector('form');
const logCatchButton = document.querySelector('.logCatchButton');
const fishesContainer = document.querySelector('.fishesContainer');
const niceCatchPic = document.querySelector('.catchPic');
const API_URL = "http://localhost:5000/fishes";
const summary1 = document.querySelector('.summary1');
const summary2 = document.querySelector('.summary2');
const summary3 = document.querySelector('.summary3');

var username;

form.style.display = '';

// toggle form display
logCatchButton.addEventListener('click', () => {
    if(form.style.display === 'none') {
        form.style.display = '';
    } else {
        form.style.display = 'none';
    }
});


// submit-button event handler
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    username = formData.get('username');
    const fishtype = formData.get('fishtype');
    const weight = formData.get('weight');
    
    const fish = {
        username,
        fishtype,
        weight
    }

    
    // POST to API_URL
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(fish),
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json())
    .then(createdFish => {
        console.log(createdFish);        
        form.style.display = 'none';
        form.reset();
        fishesContainer.innerHTML = '';
        listAllFish();
        getSummary();
    });
});


// GET all fish and list them in cards
function listAllFish() {
    fetch(API_URL)
        .then(response => response.json())
        .then(fishes => {
            fishes.reverse();
            const firstFish = fishes[0];

            const div = document.createElement('div');
            const header = document.createElement('h3');
            const contents = document.createElement('p');
            const created = document.createElement('small');

            header.textContent = firstFish.fishtype + ' / ' + firstFish.weight + 'kg';
            contents.textContent = firstFish.username;

            // clean up date string
            var date = new Date(firstFish.created);
            var dateShort = date.toString().substring(0, 21);
            created.textContent = dateShort;

            div.appendChild(header);
            div.appendChild(contents);
            div.appendChild(created);
            fishesContainer.appendChild(div);

            div.style.cssText = 'box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);margin-bottom: 2vw; padding: 2vw';
            contents.style.color = '#bfa013';
            
        });
}


// get summaries for username
function getSummary() {
    fetch(API_URL)
        .then(response => response.json())
        .then(fishes => {
            // push all elements with 'username' to new array and update summary1
            const newArray = []; 
            for(let i=0; i<fishes.length; i++){
                if(fishes[i].username === username){
                    newArray.push(fishes[i]);
                }
            }   
            console.log(newArray); 
            summary1.innerHTML = "Total:<br><br>"+newArray.length;

            // find heaviest catch from newArray and update summary2
            var heaviestCatch = newArray[0].weight;
            for(let i=0; i<newArray.length; i++){
                if(newArray[i].weight > heaviestCatch){
                    heaviestCatch = newArray[i].weight;
                }
            }
            console.log(heaviestCatch);
            summary2.innerHTML = "Biggest:<br><br>"+heaviestCatch+"KG";

            // find most common fish and update to summary3
            const fishesArray = [];
            for(let i=0; i<newArray.length; i++){
                fishesArray.push(newArray[i].fishtype);
            }
            console.log(fishesArray);
            function mode(arr){
                return arr.sort((a,b) =>
                      arr.filter(v => v===a).length
                    - arr.filter(v => v===b).length
                ).pop();
            }
            const mostCommonFish = mode(fishesArray);
            summary3.innerHTML = "Most:<br><br>"+mostCommonFish;
        })
}

