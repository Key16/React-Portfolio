import React from "react";

const styles = {
  image: {
    width: "250px",
  },
  projects: {
    backgroundColor: "rgb(171, 152, 207)",
    color: "white",
  },
};

export default function About() {
  return (
    <div>
      <div>
        <h1 class="text-center">About Me</h1>
        <img
          src="https://i.pinimg.com/564x/f7/21/11/f721111727680f4d7f3f61e5c96cf71d.jpg"
          class="img-fluid rounded mx-auto d-block"
          style={styles.image}
          alt="avatar"
        ></img>
        <div class="p-3 mt-4 mb-4 rounded-2 border ">
          <p>
            Hi I'm Jess, I'm on a journey to become a full stack web developer
            and very interested in developing these skills for future projects
            and career opportuninties.
          </p>
          <p>
            I love solving puzzles and look at code as a great way to find
            creative solutions. I also enjoy digital art and 3D printing, so UX
            design interests me, in a sense where art meets tech. In future,
            using the fundamentals of web dev, I would be interested in learning
            other coding languages and create a mobile app, or program to share
            awareness of the environment or promote sustainable solutions.
          </p>
        </div>

        <div
          class="container rounded-2 border p-3 mt-3"
          style={styles.projects}
        >
          <div class="row align-items-start  text-center">
            <div class="col-md-4 col-sm-12">
              <p class="fs-4">30+</p> <p class="fs-6">Projects</p>
            </div>
            <div class="col-md-4 col-sm-12">
              <p class="fs-4">3</p>
              <p class="fs-6">Programming Languages</p>
            </div>
            <div class="col-md-4 col-sm-12">
              <p class="fs-4">5+</p> <p class="fs-6"> Months of Coding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
