<template>
    <div class="drag-container">
    	<ul class="drag-list">
    		<li v-for="stage in statuses" class="drag-column" >
    			<span class="drag-column-header" :style="'background-color:'+stage.color+';'">
    				<h2>{{ stage.title }}</h2>
    			</span>
    			<div class = 'drag-options'></div>
    			<ul class="drag-inner-list" ref="list" >
                    <li class="drag-item" v-for="block in getBlocks(stage)" >
                        <slot :name="block.id">
                            <strong>{{ block.title }}</strong>
                        </slot>
                    </li>
    			</ul>
    		</li>
    	</ul>
    </div>

</template>

<script>
    import dragula from 'dragula';
    //import { mapGetters, mapActions } from 'vuex'

    export default {
      name: 'KanbanBoard',
      computed:{
        statuses(){
           return this.$store.state.stages
        },
        localBlocks(){
          return this.$store.state.blocks
        }
      },
      methods: {
        getBlocks(status) {
          return this.localBlocks.filter(block => block.status === status);
        },
      },

      mounted() {
        dragula(this.$refs.list)
            .on('drag', (el) => {
              el.classList.add('is-moving');
            })
            .on('drop', (block, list) => {
              this.$store.dispatch('updateBlock',{block: block,staus: list})
            })
            .on('dragend', (el) => {
              el.classList.remove('is-moving');

              window.setTimeout(() => {
                el.classList.add('is-moved');
                window.setTimeout(() => {
                  el.classList.remove('is-moved');
                }, 600);
              }, 100);
            });
      },
    };
</script>
