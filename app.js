console.log('app linked');
const container = document.querySelector('.container');

fetch('https://api.spacexdata.com/v3/capsules') // get data
.then(response => {
    // console.log(response)
    return response.json(); // what we plug into second then call
}) // response is what is returned by fetch call
.then(data => {
    // console.log(data);
    // const firstElement = data[0];
    // console.log(firstElement);
    // let capsuleId = firstElement.capsule_id;
    // console.log(capsuleId);
    // let details = firstElement.details;
    // console.log(details);
    // let landings = firstElement.landings;
    // console.log(landings);
    for (let i = 0; i < data.length; i++) {
        let eachCapsule = data[i];
        // console.log(eachCapsule);
        const obj = { 
            capsuleId: eachCapsule.capsule_id, // get info from each object capsule_id
            details: eachCapsule.details, // each capsules details
            landings: eachCapsule.landings
        };
        console.log(obj);
        
        const capsuleElement = document.createElement('p');
        capsuleElement.textContent = obj.capsuleId; //setting text of p to obj.capsuleId
        container.appendChild(capsuleElement);

    }
    
});

