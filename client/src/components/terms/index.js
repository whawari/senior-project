import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./index.css";

const TermsAndConditions = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <section id="terms-and-conditions">
      <div className="container">
        <h1>Privacy</h1>
        <h3>Customer Privacy Notice</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          beatae necessitatibus magnam aperiam expedita sequi earum, delectus
          quae reiciendis, neque ad blanditiis praesentium, autem harum quasi
          inventore iusto officia et. Deserunt eos, itaque mollitia similique
          modi asperiores eius unde quae commodi quibusdam nulla odio porro nam
          fugit distinctio? Modi doloremque et ut consectetur deleniti non id,
          distinctio, obcaecati laboriosam iure iste ipsa quibusdam
          necessitatibus velit officia provident voluptatem nobis molestias
          porro adipisci, fuga quisquam molestiae sint. Hic asperiores sed quia
          alias eveniet labore voluptatem ratione! Expedita, necessitatibus cum,
          illo quaerat debitis nam labore minus sapiente iusto, saepe a. Veniam,
          rerum.
        </p>
        <br />
        <h1>Terms of Use</h1>
        <h3>General</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea
          voluptatum doloribus voluptas expedita non saepe pariatur eveniet?
          Eveniet explicabo unde mollitia delectus officia dignissimos expedita,
          omnis nesciunt maiores amet impedit soluta earum aperiam totam
          similique doloribus molestiae quas optio enim accusantium. Voluptas,
          vitae. Iste harum consequatur velit omnis obcaecati!
        </p>
        <h3>Pay Per Use</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum
          alias excepturi corporis et quaerat qui modi, nihil natus repellendus
          autem aut aliquid at. Dolor nesciunt, pariatur mollitia quo, quae
          doloremque odio facilis dolorum vitae maiores dolorem quis cupiditate
          ut, corporis suscipit accusamus eius voluptatem laboriosam dolores
          exercitationem quaerat esse deserunt. Soluta facilis magni delectus
          dicta fuga tenetur amet nemo atque rerum? Quas, animi consequatur!
        </p>
        <br />
        <h1>Terms & Conditions</h1>
        <h3>Agreement to Terms</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quidem
          ratione obcaecati rerum delectus molestias, molestiae adipisci,
          dignissimos porro, saepe veritatis nam sequi repellat ad est ab nulla
          at tempora.
        </p>
        <h3>Changes to Terms & Conditions</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quasi
          consequatur, nisi ducimus praesentium saepe, facilis cum earum neque
          amet doloribus molestias harum temporibus repudiandae est quidem
          dolores possimus quas mollitia. Et minus explicabo inventore?
        </p>
        <h3>Your Responsibilities</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          doloribus, qui soluta autem magni vero, sint dolorem molestias facere
          nisi non tenetur fugiat, aliquid explicabo necessitatibus. Suscipit et
          aliquid maxime, possimus sint numquam praesentium culpa dolorum dicta
          esse, aspernatur quidem quam modi reprehenderit nulla voluptatem.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
