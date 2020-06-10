<template>
  <div>
    <footer>
      <div class="container">
        <div class="agile-footer-grids">
          <div class="col-md-4 agile-footer-grid">
            <h4>About</h4>
            <div class="agile-footer-info">
              <p>Aliquam turpis nisl, malesuada et vehicula et, laoreet eu enim. Aliquam eu pharetra urna. Proin accumsan augue massa, vitae malesuada sem pharetra et.</p>
              <h5>Subscribe Here</h5>
              <form action="#" method="post">
                <input type="email" name="Email" placeholder="Email" required />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
          <div class="col-md-4 agile-footer-grid">
            <h4>Recent Posts</h4>
            <div class="agile-post-grids">
              <div class="agile-post-grid">
                <div class="col-md-5 agile-post-left">
                  <router-link to="/single">
                    <img src="static/picture/p1.jpg" alt />
                  </router-link>
                </div>
                <div class="col-md-7 agile-post-right">
                  <h5>
                    <router-link to="/single">Nulla at arcu eu justo blandit eleifend.</router-link>
                  </h5>
                  <p>
                    <i class="fa fa-calendar-o" aria-hidden="true"></i> 03 Jan 2017
                  </p>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="agile-post-grid">
                <div class="col-md-5 agile-post-left">
                  <router-link to="/single">
                    <img src="static/picture/p2.jpg" alt />
                  </router-link>
                </div>
                <div class="col-md-7 agile-post-right">
                  <h5>
                    <router-link to="/single">Nulla at arcu eu justo blandit eleifend.</router-link>
                  </h5>
                  <p>
                    <i class="fa fa-calendar-o" aria-hidden="true"></i> 24 Jan 2017
                  </p>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 agile-footer-grid">
            <h4>Flickr Images</h4>
            <div class="aa">
              <div class="ee">
                <router-link to="/single" v-for="(item,index) in imgList" :key="index">
                  <img :src="item.src" />
                </router-link>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          src: "/static/picture/f1.jpg"
        },
        {
          src: "/static/picture/f2.jpg"
        },
        {
          src: "/static/picture/f3.jpg"
        },
        {
          src: "/static/picture/f4.jpg"
        },
        {
          src: "/static/picture/f5.jpg"
        },
        {
          src: "/static/picture/f6.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.aa {
  width: 288.3px;
  height: 76.49;
}
.ee img {
  width: 76.49px;
  height: 76.49px;
  border: solid 2px #fff;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
