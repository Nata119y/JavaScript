const ObtenerInput = () => {
    let inputTexto = document.getElementById('input_pokemon');
    let valor = inputTexto.value;
    PeticionApi(valor);
}

const PeticionApi = (pokemon) => {
    const baseUrl = 'https://pokeapi.co/api/v2/';
    const endpoint = `pokemon/${pokemon}`; 
    const url = `${baseUrl}${endpoint}`;

    axios.get(url)
        .then(res => printData(res.data)) 
        .catch(err => console.log(err));
}

const printData =(data) => {
    let respuesta = document.getElementById('show-info');
    respuesta.innerHTML = `
    <p><b>Nombre:</b> ${data.name}</p>
    <p><b>Peso:</b> ${data.weight}</p>
    <p><b>Altura:</b> ${data.height}</p>
    <p><b>Tipos:</b> ${data.types.map(type => type.type.name).join(', ')}</p>
    <p><b>Habilidades:</b> ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
    <p><b>Experiencia Base:</b> ${data.base_experience}</p>
    <img src="${data.sprites.front_default}" alt="Imagen de ${data.name}" style="max-width: 300px;">
    <p><b>Estadísticas:</b></p>
    <ul>
        ${data.stats.map(stat => `<li><b>${stat.stat.name}:</b> ${stat.base_stat}</li>`).join('')}
    </ul>
    <p><strong>Movimientos:</strong></p>
    <ul>
        ${data.moves.slice(0, 5).map(move => `<li><strong>${move.move.name}</strong></li>`).join('')}
    </ul>
`;
    }

