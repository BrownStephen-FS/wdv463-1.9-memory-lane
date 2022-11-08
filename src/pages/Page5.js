import React from "react";
import ImageUrl from "../images/encryption-diagram.jpg";

function Page4() {
  return (
    <section>
      <h1 id="page5H1">Securing an API</h1>
      <p>
        Securing your application is important because it protects the company
        you work for or if you are an independent developer, yourself, and your
        customers. Not only will secure information be stolen and most likely
        sold on the dark web, but companies will fall victim to ransomware.
        Ransomware is a virus that prevents any use unless the hacker’s demands
        are met. A way that we were taught in our previous class was to use
        node.bcrypt.js to encrypt our credentials at rest. We also were taught
        how to use JSON web tokens and how vital they are at keeping webpages
        secure by verifying the user is who they say they are by using digital
        signatures.
      </p>
      <img s src={ImageUrl} alt="Encryption Diagram" />
    </section>
  );
}

export default Page4;
