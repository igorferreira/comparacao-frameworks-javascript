<template>
  <div>
    <div v-if="estado === 'INICIO'">
      <p>Jogo da adivinhação com Vue</p>
      <button @click="iniciarJogo">Iniciar</button>
    </div>
    <div v-if="estado === 'EXECUTANDO'">
      <p>O número é {{ palpiteAtual }}?</p>

      <p>(min {{ min }}, max {{ max }})</p>

      <button @click="menor">Menor!</button>
      <button @click="acertar">Acertou!</button>
      <button @click="maior">Maior!</button>
      <p>
        <button @click="maior">Voltar</button>
      </p>
    </div>
    <div v-if="estado === 'FINALIZADO'">
      <p>Adivinhou o número {{ palpiteAtual }} com {{ totalPalpites }} chute{{ totalPalpites > 1 ? 's' : '' }}!</p>
      <button @click="iniciarJogo">Reiniciar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "JogoAdivinhacao",
  props: {
    valorMinimo: { type: Number, default: 0 },
    valorMaximo: { type: Number, default: 300 }
  },
  data: () => ({
    estado: "INICIO",
    min: 0,
    max: 0,
    totalPalpites: 1,
    palpiteAtual: 0
  }),
  methods: {
    iniciarJogo() {
      this.estado = "EXECUTANDO";
      this.totalPalpites = 0;
      this.min = this.valorMinimo;
      this.max = this.valorMaximo;
      this.palpiteAtual = parseInt((this.max + this.min) / 2);
    },
    acertar() {
      this.totalPalpites = this.totalPalpites == 0 ? 1 : this.totalPalpites;
      this.estado = "FINALIZADO";
    },
    menor() {
      this.totalPalpites++;
      this.max = this.palpiteAtual;
      this.palpiteAtual =
        parseInt((this.palpiteAtual - this.min) / 2) + this.min;
      if (this.min === this.palpiteAtual) {
        this.estado = "FINALIZADO";
      }
    },
    maior() {
      this.totalPalpites++;
      this.min = this.palpiteAtual;
      if (this.palpiteAtual >= this.max - 1) {
        this.palpiteAtual = this.max;
        this.estado = "FINALIZADO";
        return false;
      }

      this.palpiteAtual =
        parseInt((this.max - this.palpiteAtual) / 2) + this.palpiteAtual;
      if (this.palpiteAtual === this.max) {
        this.estado = "FINALIZADO";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
