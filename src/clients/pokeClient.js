import axios from "axios"

const request = async() => {
    const randomId = Math.floor(Math.random() * 3) + 1
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)

        return response.data
}



export async function RetornarPokemones() {

    return await request();
}









