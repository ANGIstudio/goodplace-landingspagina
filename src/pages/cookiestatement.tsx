import React from 'react';

import { NextPage } from 'next';

import { Section } from '../components/Section/Section';
import { Td } from '../components/Table/Td';
import { Th } from '../components/Table/Th';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const CookieStatement: NextPage = () => {
  return (
    <Base>
      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="md:w-2/3">
            <h3 className="break-words mb-4">
              <strong>
                Cookieverklaring van Stichting Goodplace Foundation
              </strong>
            </h3>

            <div>
              <h4 className="mt-4">
                <strong>Wat zijn cookies?</strong>
              </h4>
              <p>
                Cookies zijn kleine (tekst)bestanden die op je apparaat worden
                opgeslagen bij gebruik van onze <strong>Website</strong>{' '}
                www.goodplace.foundation en/of <strong>App</strong>. Deze
                cookies zullen worden opgehaald wanneer je onze Website/App
                opnieuw bezoekt. Dit zorgt ervoor dat onze Website/App je
                herkent als een eerdere bezoeker.
              </p>
            </div>

            <div>
              <h4 className="mt-4">
                <strong>Waarom gebruiken we cookies?</strong>
              </h4>
              <p>
                Door het gebruik van cookies, kunnen we zien hoe onze
                Website/App wordt gebruikt en hoe we onze Website/App en
                diensten kunnen optimaliseren. Cookies helpen ook om de
                Website/App snel en veilig te maken. Zie onderstaande tabel voor
                de specifieke doeleinden per cookie die wij gebruiken.
              </p>
            </div>

            <div>
              <h4 className="mt-4">
                <strong>Welke cookies gebruiken we?</strong>
              </h4>
              <h4 className="mt-4">
                <strong>FUNCTIONELE COOKIES</strong>
              </h4>
              <p>
                Wij hebben een <strong>gerechtvaardigd belang</strong> om de via
                deze cookies verzamelde persoonsgegevens te gebruiken, namelijk
                om onze Website/App goed te laten werken.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="py-2 inline-block min-w-full">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="border-b">
                        <tr>
                          <Th>Naam:</Th>
                          <Th>Provider:</Th>
                          <Th>Functie/Doeleinde:</Th>
                          <Th>Bewaartermijn:</Th>
                          <Th>Bij gebruik van:</Th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <Td>Firebase crashlitics</Td>
                          <Td>
                            <a
                              className="underline"
                              href="https://firebase.google.com/support/privacy"
                            >
                              Google – Firebase
                            </a>
                          </Td>
                          <Td>
                            Een crashreporter die ons helpt
                            stabiliteitsproblemen op te sporen, te prioriteren
                            en op te lossen. Zie het privacybeleid van Firebase
                            voor meer informatie over de verwerking van
                            persoonsgegevens.
                          </Td>
                          <Td>1 jaar </Td>
                          <Td>App </Td>
                        </tr>
                        <tr className="border-b">
                          <Td>Firebase - Google</Td>
                          <Td>
                            <a
                              className="underline"
                              href="https://firebase.google.com/support/privacy"
                            >
                              Google – Firebase
                            </a>
                          </Td>
                          <Td>
                            Volgen van het gebruik van de Mobiele App voor onze
                            interne analytische doeleinden en om de kwaliteit en
                            relevantie van onze Mobiele App te verbeteren. Zie
                            het Privacybeleid van Firebase voor meer informatie
                            over de verwerking van persoonsgegevens.
                          </Td>
                          <Td>1 jaar </Td>
                          <Td>App </Td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mt-4">
                <strong>Kan ik de cookies verwijderen?</strong>
              </h4>
              <p>
                Wij gebruiken geen cookies op onze website. Deze kunnen en
                hoeven dus ook niet verwijderd te worden. De analytische
                technieken die wij in de app gebruiken zoals hierboven genoemd
                leiden niet tot verwijderbare cookies of soortgelijke bestanden
                op je mobiele telefoon.
              </p>
            </div>

            <div>
              <h4 className="mt-4">
                <strong>Wijzigingen in deze Cookieverklaring</strong>
              </h4>
              <p>
                Deze Cookieverklaring kan worden gewijzigd. De meest recente
                versie van de Cookieverklaring is van toepassing. Wij adviseren
                je daarom regelmatig de Cookieverklaring na te lezen op
                eventuele wijzigingen.
              </p>
            </div>

            <div className="mt-4">
              <p>
                <strong>Contactgegevens</strong>
              </p>
              <p>
                Prinses Margrietplantsoen 33 <br />
                2595AM ‘s-Gravenhage <br />
                Nederland
                <br />
              </p>

              <p>
                <strong>E:</strong>{' '}
                <a
                  className="underline"
                  href="mailto:team@goodplace.foundation"
                >
                  team@goodplace.foundation{' '}
                </a>
                <br />
                <strong>W:</strong>{' '}
                <a className="underline" href="https://goodplace.foundation">
                  https://goodplace.foundation
                </a>
                <br />
                <strong>Kamer van Koophandel:</strong> 82244154
                <br />
                <br />
              </p>
            </div>
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default CookieStatement;
