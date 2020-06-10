<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="header-top-grids">
          <div class="agileits-logo">
            <h1>
              <a href>
                WV
                <span>Wedding venue</span>
              </a>
            </h1>
          </div>
          <div class="top-nav">
            <nav class="navbar navbar-default">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                <nav>
                  <ul class="nav navbar-nav">
                    <li class="active">
                      <a href>Home</a>
                    </li>
                    <li>
                      <router-link to="/about">About</router-link>
                    </li>
                    <li>
                      <router-link to="/gallery">Gallery</router-link>
                    </li>
                    <li class>
                      <a
                        href="#"
                        class="dropdown-toggle hvr-bounce-to-bottom"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Codes
                        <span class="caret"></span>
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="hvr-bounce-to-bottom" href="#">Icons</a>
                        </li>
                        <li>
                          <a class="hvr-bounce-to-bottom" href="#">Typography</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/mall">Mail Us</router-link>
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- /.navbar-collapse -->
            </nav>
          </div>
          <div class="agileinfo-social-grids">
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-rss"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
