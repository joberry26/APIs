let residents = document.querySelector("#residents");



residents.addEventListener('click', requestSwapi);

function requestSwapi () {
    console.log('button clicked');
    axios
        .get("https://swapi.dev/api/planets/?search=Alderaan")
        .then((res) => {
            let results = res.data.results[0].residents;
            for (let i = 0; i < results.length; i++) {
                axios 
                    .get(results[i])
                    .then((res) => {
                        let nameResident = document.createElement("h2");
                        nameResident.textContent = res.data.name;
                        nameResident.id = "resName";
                        let div = document.querySelector("#new");
                        div.appendChild(nameResident);
                    })
            }
    })
};
