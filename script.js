window.onload = function() {
    fetch('airdrops.json')
        .then(response => response.json())
        .then(airdrops => {
            const airdropList = document.getElementById('airdrops-list');
            airdrops.forEach(airdrop => {
                const airdropItem = document.createElement('a');
                airdropItem.className = 'grid-33';
                airdropItem.href = airdrop.link; // Link to individual airdrop page using the link field
                airdropItem.innerHTML = `
                    <div class="inside-article">
                        <div class="air-thumbnail">
                            <img src="${airdrop.logo}" alt="${airdrop.title} Logo">
                            <div class="air-content-front">
                                <h3>${airdrop.title}</h3>
                                <p>${airdrop.category}</p>
                                <div class="est-value">
                                    Value: ${airdrop.value}
                                </div>
                            </div>
                        </div>
                        <div class="droptemp">
                            HOT
                        </div>
                    </div>
                `;
                airdropList.appendChild(airdropItem);
            });
        })
        .catch(error => console.error('Error fetching airdrops:', error));
};
