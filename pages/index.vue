/* eslint-disable vue/v-on-style */
<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="searchTerm"
            label=" Search an Item"
            placeholder="Search..."
            outlined
            dense
            append-icon="mdi-magnify"
            color="yellow"
            @input="search"
          />
        </v-col>
      </v-row>
      <v-card class="pa-5">
        <v-row>
          <p v-for="(item, i) in questFiltered" :key="i" class="  rot">
            {{ item._source.name }}
          </p>
        </v-row>
      </v-card>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data () {
    return {
      searchTerm: ''
    }
  },
  computed: {
    questFiltered () {
      console.log('com', this.$store.state.question.questions)
      return this.$store.state.question.questions
    }
  },
  methods: {
    async search () {
      try {
        console.log('searching with v-on', this.searchTerm)
        await this.$nameOfMyPlugin()
          .search({
            index: 'crud',
            type: 'doc',
            size: 1000,
            body: {
              query: {
                multi_match: {
                  query: this.searchTerm,
                  type: 'bool_prefix',
                  fields: ['name', 'name._2gram', 'name._3gram']
                }
              }
            }
          })
          .then((resp) => {
            console.log('results', resp.hits.hits)
            this.$store.commit('question/add', resp.hits.hits)
            // this.$store.state.question.questions = resp.hits.hits.slice()
          })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.rot {
  p {
    /* color: red !important; */
  }
}
</style>
