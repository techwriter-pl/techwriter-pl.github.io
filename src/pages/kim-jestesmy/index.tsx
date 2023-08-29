import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React from "react";
import AuthorList from "@site/src/components/AuthorList/AuthorList";

export default function AboutPage(): JSX.Element {
  return (
    <Layout title="O nas">
      <div className="container padding-top--lg padding-bottom--lg">
        <h1>O nas</h1>
        <Link>English version</Link>
        <h2>Dlaczego to robimy?</h2>
        <p>
          Przede wszystkim dlatego, że komunikacja techniczna to nie tylko nasza
          praca, ale też pasja. Zawsze brakowało nam strony z nowościami z
          branży, opisem narzędzi, dobrych praktyk, informacjami o
          konferencjach, szkoleniach i innych wydarzeniach związanych z
          komunikacją techniczną. Dlatego w chwili słabości postanowiliśmy ją
          stworzyć.
        </p>
        <p>Przyświecają nam takie cele:</p>
        <ul>
          <li>
            Przekazywanie informacji na temat polskiej i zagranicznej sceny
            komunikacji technicznej,
          </li>
          <li>Śledzenie bieżących wydarzeń,</li>
          <li>Pisanie o „tech commie” na poważnie i na wesoło,</li>
          <li>
            Tworzenie polskiej bazy wiedzy na temat komunikacji technicznej,
            która nowicjuszom pomoże rozpocząć karierę w naszym zawodzie, a
            bardziej doświadczonym – poszerzyć wiedzę,
          </li>
          <li>
            Poszerzanie świadomości na temat zawodu Technical Writera w Polsce,
          </li>
          <li>Budowanie społeczności i dzielenie się doświadczeniem.</li>
          <li>Kim jesteśmy?</li>
          <li>
            Jesteśmy grupką osób, które zajmują się zawodowo tworzeniem,
            dystrybuowaniem i zarządzaniem szeroko pojętą dokumentacją
            techniczną.
          </li>
        </ul>
        <p>
          Część z nas to humaniści, którzy trafili do tej pracy dzięki bardzo
          dobrej znajomości języków obcych i ciągle próbują zrozumieć techniczne
          niuanse. Inni są po studiach technicznych, ale lubią pisać, choć
          niekoniecznie potrafią. Pracowaliśmy i pracujemy w ogromnych
          korporacjach, firmach, firemkach i jako freelancerzy. Lubimy tą pracę
          a ona lubi nas 🙂
        </p>
        <p>Obecnie zespół redakcyjny tworzą:</p>
        <AuthorList />
      </div>
    </Layout>
  );
}
