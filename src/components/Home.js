import React from "react";

const HomePage = () => {
  return (
    <div class="container col-xl-8 px-3 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/07/99405769.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="400"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Tech-Blogs
          </h1>
          <p class="lead">
            Welcome to Tech Blog, your go-to source for engaging and informative
            content on a wide range of topics. We're passionate about sharing
            our knowledge, insights, and experiences, covering everything from
            technologies and more.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
