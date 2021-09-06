import Vue from 'vue'
const elasticsearch = require('elasticsearch')
const client = new elasticsearch.Client({
  host: 'localhost:9200'
})
client.ping(
  {
    requestTimeout: Infinity
  },
  function (error) {
    if (error) {
      console.trace('elasticsearch cluster is down!')
    } else {
      console.log('All is well Elasticsearch Running....')
    }
  }
)
Vue.prototype.$nameOfMyPlugin = () => {
  return client
}

// Vue.mixin({
//   methods: {
//     mySpecialMethod (value) {
//       console.log('searching...')
//       client
//         .search({
//           index: 'crud',
//           type: 'doc',
//           body: {
//             query: {
//               multi_match: {
//                 query: value,
//                 type: 'bool_prefix',
//                 fields: ['name', 'name._2gram', 'name._3gram']
//               }
//               // terms: {
//               //   name: searchValue,
//               // },
//               // query_string: {
//               //   fields: ["name*"],
//               //   query: searchValue,
//               // },
//               // simple_query_string: {
//               //   query: searchValue,
//               //   fields: ["age", "name"],
//               //   default_operator: "or",
//               // },
//               // match: {
//               //   name: searchValue,
//               // },
//             }
//           }
//         })
//         .then(function (resp) {
//           console.log('results', resp.hits.hits)
//           //   storage = resp.hits.hits
//           //   console.log('storage', storage)

//           //   store.state.question.questions = resp.hits.hits.slice()
//           //   console.log('store', this.$store.state.question.questions)
//         })
//     }
//   }
// })
// Vue.use(client)
