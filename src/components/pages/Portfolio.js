import React from "react";

const styles = {
  text: {
    textAlign: "center",
  },
  a: {
    textDecoration: "none",
    color: "rgba(48, 20, 99, 0.527)",
    boxShadow: "8px 8px 2px 1px rgba(106, 106, 201, 0.397)",
  },
};

export default function Contact() {
  return (
    <div>
      <h1 style={styles.text}>Portfolio</h1>
      <h4 style={styles.text}>A list of my latest projects</h4>
      <div class="row">
        <div class="col-md-6 col-sm-12 p-2 ">
          <div class="card  ">
            <a
              href="https://github.com/Key16/Offline-Text-Editor"
              style={styles.a}
              target="_blank"
            >
              <img
                src="https://github.com/Key16/Offline-Text-Editor/raw/main/ssJATE.png"
                class="card-img-top"
                alt="PWA text editor"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Offline Text Editor</h5>
                <p class="card-text">
                  This progressive web app allows your application to run
                  offline and store your text edits in the indexedDB database,
                  as well as your local storage, and if there is no data in
                  either, then a default message will be shown.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 p-2 ">
          <div class="card ">
            <a
              href="https://github.com/Key16/Social-Media-API"
              style={styles.a}
              target="_blank"
            >
              <img
                src="https://wallpaperaccess.com/full/7274432.jpg"
                class="card-img-top"
                alt="Social Media App"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Social Media Manager</h5>
                <p class="card-text">
                  Manage your social media backend using MongoDB to perform CRUD
                  APIs.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 p-2 ">
          <div class="card ">
            <a
              href="https://github.com/Key16/just-kidding"
              style={styles.a}
              target="_blank"
            >
              <img
                src="https://user-images.githubusercontent.com/99461390/172051490-e53992be-c994-4055-b156-42a0329b514d.jpg"
                class="card-img-top"
                alt="Just Kidding"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Just Kidding</h5>
                <p class="card-text">
                  Forum style threads friendly for parents with login and
                  authentication.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 p-2 ">
          <div class="card ">
            <a
              href="https://github.com/Key16/Tech-blog"
              style={styles.a}
              target="_blank"
            >
              <img
                src="https://github.com/Key16/Tech-blog/raw/main/assets/Homepage.png"
                class="card-img-top"
                alt="Tech Blog"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Online Tech Blog</h5>
                <p class="card-text">
                  Post your tech tips on this blog site, login to interact with
                  your posts!
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 p-2 ">
          <div class="card ">
            <a
              href="https://github.com/Key16/Team-Generator"
              style={styles.a}
              target="_blank"
            >
              <img
                src="https://github.com/Key16/Team-Generator/raw/main/assets/MyTeamScreenshot.png"
                class="card-img-top"
                alt="Employee Generator"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Generate your team in one view!</h5>
                <p class="card-text">
                  This application will run in your command line and asks a
                  series of questions regarding your team profile. These
                  employees and the manager will be generated onto a HTML file
                  that has CSS already styled for use.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 p-2 ">
          <div class="card ">
            <a
              href="https://github.com/Key16/E-Commerce-Back-End"
              style={styles.a}
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dte7upwcr/image/upload/f_auto,w_1200/blog/blog/imagens-ecommerce.png"
                class="card-img-top"
                alt="E commerce backend"
              ></img>
              <div class="card-body">
                <h5 class="card-title">E Commerce Backend</h5>
                <p class="card-text">
                  Manage your ecommerce backend easily with a database to track
                  different items, categories and tags. Delete, create and
                  update existing items
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
