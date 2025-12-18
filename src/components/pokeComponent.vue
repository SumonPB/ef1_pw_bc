<template>
  <div class="container">
    <div class="scores">
      <label for="score">Score: {{ score }}</label>
      <label for="attempts">Attempts:{{ attempts }}</label>
    </div>

    <div class="images">
      <div
        class="card"
        v-for="pokemon in pokename"
        :key="pokemon.species.name"
        v-if="pokename != null"
      >
        <img
          :src="pokemon.sprites.other.dream_world.front_default"
          alt="No se pudo cargar la imagen"
        />
        <label for="nombre">{{ pokemon.species.name }}</label>
      </div>
      <div class="card" v-for="n in 3" :key="n" v-else>
        <img :src="image" alt="No se pudo cargar la imagen" />
        <label for="nombre">***********</label>
      </div>
    </div>

    <div class="Jugarbtn">
      <button @:click="consumir()">Jugar</button>
    </div>
    <div v-if="gano">Gano</div>
    <div v-if="perdio">Perdio</div>
  </div>
</template>

<script>
import { RetornarPokemones } from "../clients/pokeClient.js";
export default {
  data() {
    return {
      pokename: [],
      image: "https://dummyimage.com/250x250",
      perdio: false,
      gano: false,
      score: 0,
      attempts:5,
    };
  },
  methods: {
    async consumir() {
      this.pokename = [];
      for (let i = 0; i < 3; i++) {
        const Api = await RetornarPokemones();
        this.pokename.push(Api);
      }

      let contador = {};

      for (const poke of this.pokename) {
        const nombre = poke.species.name;
        contador[nombre] = (contador[nombre] || 0) + 1;
      }

      const repetidos = Object.values(contador).filter(
        (cantidad) => cantidad + 1
      );

      if (repetidos[0] === 3) {
        this.score = this.score + 5;
        this.attempts--;
      } else if (repetidos[0] == 2) {
        this.score = this.score + 2;
        this.attempts--;
      } else {
        this.attempts--;
      }
      if (this.attempts === 0) {
        if (this.score <= 10) {
          this.perdio = false;
          this.gano = true;
          setTimeout(() => {
            this.gano = false;
          }, 1000);
        } else {
          this.gano = false;
          this.perdio = true;
          setTimeout(() => {
            this.perdio = false;
          }, 1000);
        }
        this.score = 0;
        this.pokename = null;
        this.attempts = 5;
      }
    },
  },
};
</script>
<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

img {
  width: 250px;
  height: 250px;
}

.Jugarbtn {
  display: flex;
  justify-content: center;
}
</style>