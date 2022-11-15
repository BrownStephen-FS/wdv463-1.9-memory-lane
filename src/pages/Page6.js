import React from "react";
import ImageUrl from "../images/json-web-token-diagram.png";

function Page6() {
  return (
    <section>
      <h1 id="page5H1">JSON Web Token</h1>
      <p>
        We use JSON web tokens to keep calls to and from APIs secure. This helps
        us determine if the user is who they say they are and allows us to
        verify that the data content has not been tampered with. The tokens used
        are also digitally signed so we can verify the token is authentic and
        not a mock created by a hacker. A great example of JWT use, according to
        auth0.com, is Single Sign-on. SSO uses JWT because of the small overhead
        of the format, and its ability to easily be used across different
        domains.
      </p>
      <img s src={ImageUrl} alt="JSON web token Diagram" />
    </section>
  );
}

export default Page6;
