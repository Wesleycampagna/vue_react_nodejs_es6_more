<template>
  <div class="post-component">
    <h1>{{msg}} {{ test }}</h1>
    <h1>Latest Posts</h1>
    <hr>
    <p class="error" v-if="error">{{error}}</p>

    <div class="create-post">
      <label class="create-post">Say something  </label>
      <input type="text" id="create-post" v-model="text" placeholder="create a post...">
      <button v-on:click="createPost">go!</button>
    </div>

    <div class="post-container">
      <div class="post"
      v-for="(post, index) in posts"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
      v-on:dblclick="deletePost(post._id)"
      >
        id: {{post._id}}
        {{ `${post.createdAt.getDate()} / ${post.createdAt.getMonth()} / ${post.createdAt.getFullYear() } `}}
        <p class="text"> {{ post.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import Api from '../service/api/api'

export default {
  name: 'PostComponent',
  props: {
    msg: String,
    test: String
  },
  data: () => {
    return {
      posts: [],
      error: '',
      text: '' 
    }
  },
  async created() {
    try{
      this.posts = await Api.getPosts()
    }catch (error) {
      this.error = error.message
    }
  },
  methods: {
    async createPost() {
      await Api.insertPost(this.text)
      this.posts = await Api.getPosts()
    },
    async deletePost(_id) {
      try{
        await Api.deletePost(_id)
      }catch(er) {
        this.error = er.message
      }
      //this.posts = await Api.getPosts()
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.post-component {
  max-width: 800px;
  margin: 0 auto;
}

div.post-container {
  margin: 0
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px;
  margin-top: 15px

}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-top: 30px
}

</style>
