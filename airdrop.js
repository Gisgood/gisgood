window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const airdropId = urlParams.get('id');

    if (airdropId) {
        fetch('airdrops.json')
            .then(response => response.json())
            .then(airdrops => {
                const airdrop = airdrops.find(a => a.id === airdropId);
                if (airdrop) {
                    const detailsContainer = document.getElementById('airdrop-details');
                    detailsContainer.innerHTML = `
                        <div class="inside-article">
                            <div class="air-thumbnail">
                                <img src="${airdrop.logo}" alt="${airdrop.title} Logo">
                                <div class="air-content-front">
                                    <h2>${airdrop.title}</h2>
                                    <p>${airdrop.category}</p>
                                    <div class="est-value">
                                        Value: ${airdrop.value}
                                    </div>
                                    <div class="description">
                                        ${airdrop.description}
                                    </div>
                                </div>
                            </div>
                            <div class="droptemp">
                                HOT
                            </div>
                        </div>
                    `;
                } else {
                    detailsContainer.innerHTML = '<p>Airdrop not found.</p>';
                }
            })
            .catch(error => console.error('Error fetching airdrop details:', error));
    } else {
        document.getElementById('airdrop-details').innerHTML = '<p>No airdrop selected.</p>';
    }
};
