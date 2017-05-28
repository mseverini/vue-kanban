<template>
  <div id="app">
    <Kanban ></Kanban>
  </div>
</template>

<script>
import faker from 'faker';
import Kanban from './components/Kanban';

export default {
  name: 'app',
  components: {
    Kanban,
  },
  mounted() {
    for (let i = 0; i <= 10; i += 1) {
      this.$store.state.blocks.push({
        id: i,
        status: this.$store.state.stages[Math.floor(Math.random() * 4)],
        title: faker.company.bs(),
      });
    }
  },
};
</script>

<style lang="scss">
    @import './assets/kanban.scss';
    * {
    	box-sizing: border-box;
    }

    body {
    	background: #33363D;
    	color: white;
    	font-family: 'Lato';
    	font-weight: 300;
    	line-height: 1.5;
    	-webkit-font-smoothing: antialiased;
    }

    .section {
    	padding: 20px;
    	text-align: center;

    	a {
    		color: white;
    		text-decoration: none;
    		font-weight: 300;
    	}

    	h4 {
    		font-weight: 400;
    		a {
    			font-weight: 600;
    		}
    	}
    }
</style>
