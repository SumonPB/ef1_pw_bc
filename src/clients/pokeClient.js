import axios from "axios"

const request = async() => {
    const randomId = Math.floor(Math.random() * 3) + 1
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)

        return response.data
}



export async function RetornarPokemones() {

    return await request();
}






















































/*

        async consumir() {
            this.pokename = [];
            for (let i = 0; i < 3; i++) {
                const Api = await ConsumirApi()
                this.pokename.push(Api)
            }


            let contador = {}

            for (const poke of this.pokename) {
                const nombre = poke.species.name
                contador[nombre] = (contador[nombre] || 0) + 1
            }

            const repetidos = Object.values(contador)
                .filter(cantidad => cantidad + 1)


            if (repetidos[0] === 3) {
                this.score = this.score + 5
                this.attempts--;
            } else if (repetidos[0] == 2) {
                this.score = this.score + 2
                this.attempts--;
            }
            else {
                this.attempts--;
            }
            if (this.attempts === 0) {
                if (this.score <= 10) {
                    this.perdio = false;
                    this.gano = true;
                    setTimeout(() => {
                        this.gano = false
                    }, 1000)
                } else {
                    this.gano = false;
                    this.perdio = true;
                    setTimeout(() => {
                        this.perdio = false
                    }, 1000)
                }
                this.score = 0;
                this.pokename = null;
                this.attempts = 5;
            }

        }

*/