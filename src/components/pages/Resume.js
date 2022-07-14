import React from "react";

const styles = {
  text: {
    textAlign: "center",
  },
};
export default function Contact() {
  return (
    <div>
      <h1 style={styles.text}>Resume</h1>
      <p style={styles.text}>
        To download a copy of a resume, please click{" "}
        <a
          href="https://cdn-blog.novoresume.com/articles/resume-examples/resume-examples-2021.png"
          download
        >
          here
        </a>
        <p>(Actual Resume coming soon)</p>
      </p>
    </div>
  );
}
