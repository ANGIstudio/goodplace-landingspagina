/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';

import policy from '../assets/policy.png';
import { Section } from '../components/Section/Section';
import { Td } from '../components/Table/Td';
import { Th } from '../components/Table/Th';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Privacy: NextPage = () => {
  return (
    <Base>
      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="md:w-2/3">
            <h3 className="break-words mb-4">
              <strong>
                Privacyverklaring van de App van Stichting Goodplace Foundation
              </strong>
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="mt-4">
                  <strong>Wie zijn wij en wat bieden wij aan?</strong>
                </h4>
                <p>
                  Wij zijn Stichting Goodplace Foundation (
                  <strong>"Goodplace"</strong>). Wij bieden een online platform
                  waarop gebruikers gemakkelijk kunnen doneren aan goede doelen
                  en op een positieve manier op de hoogte blijven (het
                  <strong> "Platform"</strong>).
                </p>
                <p>
                  Je kunt toegang krijgen tot ons Platform via onze{' '}
                  <strong>App</strong>. De App kun je downloaden via onze
                  Website www.goodplace.foundation. Op de Website vind je ook
                  meer information over ons Platform. Het gebruik van het
                  Platform en de Website gezamenlijk: onze{' '}
                  <strong>Diensten</strong>.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>Persoonsgegevens en privacyverklaring</strong>
                </h4>
                <p>
                  Wij verwerken <strong>Persoonsgegevens</strong>. Onder
                  Persoonsgegevens wordt verstaan alle informatie waarmee een
                  persoon direct of indirect kan worden geïdentificeerd.
                </p>
                <p>
                  In deze privacyverklaring leggen wij uit wat voor
                  Persoonsgegevens wij verzamelen via onze Diensten. Ook leggen
                  wij uit welke rol wij hebben bij de verwerking van jouw
                  Persoonsgegevens, hoe lang wij jouw Persoonsgegevens bewaren
                  en welke rechten jij als betrokkene heeft.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>Verwerkings-verantwoordelijke</strong>
                </h4>
                <p>
                  Wij verwerken jouw persoonsgegevens als zogeheten
                  <strong> Verwerkings-verantwoordelijke</strong> in de zin van
                  de Algemene Verordening Gegevensbescherming (
                  <strong>AVG</strong>
                  ). Als je vragen hebt over de verwerking van jouw
                  Persoonsgegevens, kun je altijd contact met ons opnemen via de
                  contactgegevens onderaan deze Privacyverklaring.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>
                    Welke Persoonsgegevens verzamelen en verwerken wij als
                    Verwerkings-verantwoordelijke?
                  </strong>
                </h4>

                <div className="flex flex-col">
                  <p className="underline py-4">
                    Als je een account aanmaakt op het Platform, verwerken wij
                    de volgende Persoonsgegevens:
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full">
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead className="border-b">
                            <tr>
                              <Th>(Persoons)gegevens:</Th>
                              <Th>Doel(en):</Th>
                              <Th>Rechtsgrondslag:</Th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <Td>
                                Accountgegevens E-mailadres, geboortedatum
                                (optioneel), profielfoto (optioneel) en
                                uitgevoerde donaties.
                              </Td>
                              <Td>
                                We gebruiken deze Persoonsgegevens om:
                                <ul className="list-disc">
                                  <li className="list-inside">
                                    jouw account te registreren en je toegang
                                    tot jouw account te geven;
                                  </li>
                                  en
                                  <li className="list-inside">
                                    je een overzicht te geven van jouw donaties
                                    als onderdeel van onze Diensten.
                                  </li>
                                </ul>
                              </Td>
                              <Td>
                                Wij verwerken deze persoonsgegevens om onze
                                overeenkomst met jou uit te voeren.
                              </Td>
                            </tr>
                          </tbody>
                        </table>

                        <table className="min-w-full">
                          <tbody>
                            <tr className="border-b border-t">
                              <Td>
                                Betalings- en belastinggegevens Jouw naam,
                                e-mailadres, factuurgegevens en bankgegevens
                                (rekeningnummer, IBAN en BIC-code).
                              </Td>
                              <Td>
                                We gebruiken deze Persoonsgegevens om:
                                <ul className="list-disc">
                                  <li className="list-inside">
                                    jouw betaling te verwerken en administeren;
                                  </li>
                                  en
                                  <li className="list-inside">
                                    in onze financiele administratie op te nemen
                                    om te voldoen aan (fiscale) wet- en
                                    regelgeving.
                                  </li>
                                </ul>
                              </Td>
                              <Td>
                                We verwerken deze Persoonsgegevens om onze
                                overeenkomst met jou uit te voeren ten aanzien
                                van jouw donatie(s). Ook zijn wij wettelijk
                                verplicht om (een deel van) deze gegevens te
                                verwerken voor de belastingdienst en met de
                                belastingdienst te delen.
                              </Td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="underline py-4">
                    Als je doneert aan een goed doel via het Platform, verwerken
                    wij de volgende Persoonsgegevens:
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full">
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead className="border-b">
                            <tr>
                              <Th>(Persoons)gegevens:</Th>
                              <Th>Doel(en):</Th>
                              <Th>Rechtsgrondslag:</Th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-t">
                              <Td>
                                Gebruiksgegevens: Informatie over hoe onze
                                Website/App wordt geopend en gebruikt, zoals
                                jouw IP-adres, wanneer en hoelang je de
                                Website/App bezoekt, welke pagina's je op de
                                Website/App bezoekt, op welke links je klikt en
                                technische informatie (bijv. type browser en
                                besturingssysteem).
                              </Td>
                              <Td>
                                We verzamelen deze (Persoons)gegevens met behulp
                                van cookies en/of vergelijkbare technieken.
                                Onze&nbsp;
                                <span className="underline">
                                  <Link href="/cookiestatement">
                                    Cookieverklaring
                                  </Link>
                                </span>
                                &nbsp; beschrijft de doeleinden waarvoor deze
                                gegevens worden verwerkt en de principes die ten
                                grondslag liggen aan de verwerking van deze
                                gegevens.
                              </Td>
                              <Td>
                                We verwerken deze(Persoons)gegevens omdat we
                                daar een gerechtvaardigd belang bij hebben,
                                namelijk om het Platform te analyseren en te
                                verbeteren, of omdat je ons daarvoor toestemming
                                hebt gegeven.
                              </Td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="underline py-4">
                    Als je onze sociale media-pagina’s bezoekt, verwerken wij de
                    volgende Persoonsgegevens:
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full">
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <tbody>
                            <tr className="border-b border-t">
                              <Td>
                                Via onze sociale media pagina's: Gegevens van
                                bezoekers die een reactie achterlaten of iets
                                posten op onze sociale media-pagina's, inclusief
                                de Persoonsgegevens in deze reacties en/of
                                posts.
                              </Td>
                              <Td>
                                Wij gebruiken deze Persoonsgegevens om: contact
                                op te nemen met de bezoekers als reactie op hun
                                post en/of opmerking via onze social
                                media-pagina's; en de feedback die op onze
                                sociale media-pagina's wordt achtergelaten te
                                verwerken.
                              </Td>
                              <Td>
                                Wij verwerken deze Persoonsgegevens omdat we
                                daar een gerechtvaardigd belang bij hebben,
                                namelijk om contact met je op te nemen, je te
                                helpen op basis van jouw opmerking of vraag en
                                om onze Diensten te verbeteren naar aanleiding
                                van vragen en feedback die we ontvangen.
                                Daarnaast is deze informatie vrijwillig door de
                                betrokkene openbaar gemaakt. Onze sociale
                                media-pagina's worden ook door het sociale media
                                platform zelf beheerd. Raadpleeg de
                                privacyverklaring van het platform zelf om meer
                                informatie te krijgen over de verwerking van
                                jouw persoonsgegevens door het platform.
                                <ul>
                                  <li>
                                    {' '}
                                    LinkedIn:{' '}
                                    <a
                                      className="underline"
                                      href="https://nl.linkedin.com/legal/privacy-policy?"
                                    >
                                      Privacyverklaring
                                    </a>
                                  </li>
                                  <li>
                                    {' '}
                                    Instagram:{' '}
                                    <a
                                      className="underline"
                                      href="https://help.instagram.com/519522125107875"
                                    >
                                      Privacyverklaring
                                    </a>
                                  </li>
                                </ul>
                              </Td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="underline py-4">
                    Als je contact met ons opneemt, verwerken wij de volgende
                    persoonsgegevens:
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full">
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <tbody>
                            <tr className="border-b border-t">
                              <Td>
                                Contactgegevens: Jouw naam, e-mailadres en de
                                inhoud van de correspondentie.
                                Nieuwsbriefgegevens: Naam, e-mailadres.
                              </Td>
                              <Td>
                                Wij gebruiken deze Persoonsgegevens om:
                                <ul className="list-disc">
                                  <li className="list-inside">
                                    jouw vragen te beantwoorden en/of eventuele
                                    klachten te behandelen;
                                  </li>
                                  <li className="list-inside">
                                    je te ondersteunen bij het gebruik van onze
                                    Diensten;
                                  </li>
                                  en
                                  <li className="list-inside">
                                    onze Diensten te verbeteren naar aanleiding
                                    van jouw vragen en feedback.
                                  </li>
                                </ul>
                                Wij gebruiken deze Persoonsgegevens om: je onze
                                nieuwsbrief te sturen; en je op de hoogte te
                                houden van al onze (toekomstige) Diensten via
                                e-mail, SMS en push-notificaties.
                              </Td>
                              <Td>
                                Wij verwerken deze Persoonsgegevens omdat we
                                daar een gerechtvaardigd belang bij hebben,
                                namelijk om contact met je op te nemen, je te
                                helpen op basis van jouw opmerking of vraag en
                                om onze Diensten te verbeteren naar aanleiding
                                van vragen en feedback die we ontvangen. Wij
                                verwerken Persoonsgegevens indien je ons
                                daarvoor toestemming hebt gegeven (door je aan
                                te melden voor deze nieuwbrieven via onze
                                Website of App). Wij mogen onze gebruikers
                                nieuwbrieven sturen omdat wij daar een
                                gerechtvaardigd belang bij hebben. In elke
                                nieuwsbrief staat een link waarmee je je kunt
                                uitschrijven voor dergelijke nieuwbrieven.
                              </Td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mt-4">
                    <strong>Verplichte informatie</strong>
                  </h4>
                  <p>
                    Wanneer je gebruik maakt van onze Diensten, kan het
                    wettelijk of contractueel vereist zijn dat je ons bepaalde
                    Persoonsgegevens verstrekt, zoals aangegeven met een (*). Zo
                    hebben wij bijvoorbeeld je e-mailadres nodig hebben om je
                    account te registeren. Wanneer je ons dergelijke informatie
                    niet verstrekt, betekent dit gewoonlijk dat wij je bepaalde
                    Diensten niet kunnen verlenen of een deel van onze
                    overeenkomst met jou niet kunnen uitvoeren.
                  </p>
                </div>

                <div>
                  <h4 className="mt-4">
                    <strong>Hoe lang bewaren wij de Persoonsgegevens?</strong>
                  </h4>
                  <p>
                    Wij zullen geen Persoonsgegevens verwerken of opslaan die
                    wij niet nodig hebben. Wij bewaren Persoonsgegevens zo lang
                    als wij deze nodig hebben voor bovengenoemde doeleinden,
                    tenzij wij wettelijk verplicht zijn de Persoonsgegevens
                    langer te bewaren. Wij hanteren de volgende bewaartermijnen:
                  </p>
                  <ul className="list-disc py-4">
                    <li className="list-inside">
                      <strong>Accountgegevens | </strong> Jouw accountgegevens
                      worden bewaard zolang jouw account is geactiveerd en
                      worden binnen zes (6) maanden na het deactiveren van jouw
                      account verwijderd (tenzij hieronder anders vermeld). Als
                      jij jouw account 24 maanden niet hebt gebruikt, zullen we
                      deze automatisch verwijderen nadat we jou een reminder
                      hebben gestuurd.
                    </li>
                    <li className="list-inside">
                      <strong>Nieuwsbrieven | </strong>Wij bewaren de
                      Persoonsgegevens die worden gebruikt voor het verzenden
                      van nieuwsbrieven totdat je zich afmeldt voor onze
                      nieuwsbrief.
                    </li>
                    <li className="list-inside">
                      <strong>
                        Persoonlijke gegevens in onze correspondentie |{' '}
                      </strong>
                      Deze gegevens worden bewaard zolang als nodig is om jouw
                      bericht/vraag/klacht te behandelen.
                    </li>
                    <li className="list-inside">
                      <strong>
                        Persoonsgegevens in onze administratie voor de
                        (belasting)autoriteiten |{' '}
                      </strong>
                      Deze gegevens worden zeven (7) jaar bewaard, tenzij wij
                      wettelijk verplicht zijn de gegevens langer te bewaren.
                    </li>
                  </ul>
                  <p>
                    Na het verstrijken van de voornoemde bewaartermijn(en)
                    kunnen wij bepaalde Persoonsgegevens verwerken en bewaren om
                    te voldoen aan wettelijke bewaarplichten en/of voor
                    onderzoek naar fraude/misbruik of ter onderbouwing van een
                    (rechts)vordering. In dergelijke gevallen zullen wij de
                    Persoonsgegevens afzonderlijk bewaren en deze
                    Persoonsgegevens uitsluitend gebruiken voor de voornoemde
                    doeleinden.
                  </p>
                </div>

                <div>
                  <h4 className="mt-4">
                    <strong>
                      Delen wij jouw Persoonsgegevens met anderen?
                    </strong>
                  </h4>
                  <i className="my-4">Verwerkers</i>
                  <p>
                    Wij maken gebruik van derden die ons ondersteunen bij het
                    verlenen van onze Diensten (Verwerkers). In dit kader
                    verwerken deze Verwerkers Persoonsgegevens namens ons. Zo
                    gebruiken wij bijvoorbeeld Verwerkers voor het bouwen en
                    onderhouden van onze Website en App, het versturen van
                    push-notificaties en updates per e-mail/SMS (Notificare),
                    het hosten van onze data en het analyseren van het gebruik
                    van onze Website/App (Firebase). Deze Verwerkers mogen de
                    door ons verzamelde en aan hen verstrekte Persoonsgegevens
                    alleen verwerken in het kader van onze instructies aan hen
                    en in geen geval voor andere doeleinden. Wij sluiten met al
                    deze Verwerkers een verwerkersovereenkomst.
                  </p>
                  <i className="my-4">Verwerkingsverantwoordelijken</i>
                  <p>
                    Wij kunnen jouw Persoonsgegevens in de volgende gevallen ook
                    delen met andere Verwerkingsverantwoordelijken:
                  </p>
                  <ul className="list-disc py-4">
                    <li className="list-inside">
                      <strong>Betaaldienstverleners: </strong>betalingen voor
                      donaties worden verwerkt door Mollie en de specifieke
                      betaaldienstverlener die u kiest, zoals Visa, MasterCard,
                      PayPal, IDEAL of Apple Pay.
                    </li>
                    <li className="list-inside">
                      <strong>Belastingdienst: </strong>Wij zijn wettelijk
                      verplicht om (een deel van) jouw Persoonsgegevens op te
                      nemen in onze financiële administratie, die mogelijk
                      gedeeld moet worden met de belastingdienst. De
                      belastingdienst zal deze Persoonsgegevens verwerken in
                      overeenstemming met haar eigen privacybeleid.
                    </li>
                  </ul>
                  <p>
                    Afgezien van het bovenstaande zullen wij jouw
                    Persoonsgegevens niet met derden delen, tenzij wij daartoe
                    wettelijk verplicht zijn.
                  </p>
                </div>

                <div>
                  <h4 className="mt-4">
                    <strong>
                      Export van Persoonsgegevens buiten de Europese Unie
                    </strong>
                  </h4>
                  <p>
                    Wij kunnen Persoonsgegevens doorgeven aan partijen buiten de
                    Europese Unie, indien een van de bovengenoemde Verwerkers of
                    Verwerkingsverantwoordelijken (of hun sub-Verwerkers) is
                    gevestigd buiten de Europese Unie. De Persoonsgegevens
                    zullen alleen worden doorgegeven aan landen en/of partijen
                    die een passend beschermingsniveau bieden in overeenstemming
                    met de Europese normen. Je kunt contact met ons opnemen als
                    je meer informatie of een kopie van de waarborgen die wij in
                    dit kader treffen (waar nodig) wenst te ontvangen.
                  </p>
                </div>

                <div>
                  <h4 className="mt-4">
                    <strong>Websites van derden</strong>
                  </h4>
                  <p>
                    Je kunt reclame of andere (hyper)links in/op onze
                    App/Website aantreffen die verwijzen naar websites,
                    producten en diensten van partners, leveranciers,
                    adverteerders, sponsors, licentiegevers of andere derden.
                    Wij hebben geen controle over de inhoud of de links die op
                    deze websites verschijnen en wij zijn niet verantwoordelijk
                    voor het beleid dat gehanteerd wordt door websites waarnaar
                    op onze App/Website wordt verwezen of die verwijzen naar
                    onze App/Website. Bovendien kunnen deze websites, producten
                    en diensten, met inbegrip van hun inhoud en links,
                    voortdurend veranderen. Deze websites, producten en diensten
                    kunnen hun eigen privacyverklaringen, gebruikersvoorwaarden
                    en klantenservicebeleid hebben. Het browsen en uitvoeren van
                    acties op elke andere website, inclusief websites waarnaar
                    op onze App/Website wordt verwezen of die verwijzen naar
                    onze App/Website, zijn onderworpen aan de voorwaarden en het
                    beleid van die website.
                  </p>
                </div>

                <div>
                  <h4 className="mt-4">
                    <strong>Wijzigingen van de privacyverklaring</strong>
                  </h4>
                  <p>
                    Deze Privacyverklaring kan van tijd tot tijd worden
                    gewijzigd. Wij raden je aan onze Privacyverklaring
                    regelmatig te raadplegen. De nieuwe Privacyverklaring zal
                    onmiddellijk van kracht worden na publicatie op onze
                    Website. Indien we onze Privacyverklaring aanzienlijk
                    wijzigen, zullen we dit op onze Website vermelden samen met
                    de gewijzigde Privacyverklaring.
                  </p>
                </div>

                <div>
                  <h4 className="mt-4">
                    <strong>
                      Uw rechten als betrokkene en onze contactgegevens
                    </strong>
                  </h4>
                  <img src={policy.src} alt="" />
                  <p>
                    Je hebt altijd het recht om een klacht in te dienen bij een
                    toezichthoudende gegevensbeschermingsautoriteit als je van
                    mening bent dat we jouw Persoonsgegevens niet verwerken in
                    overeenstemming met de AVG. In Nederland is de
                    toezichthoudende gegevensbeschermingsautoriteit:
                  </p>
                  <strong className="mt-4 block">
                    De Autoriteit Persoonsgegevens
                  </strong>{' '}
                  <a href="https://www.autoriteitpersoonsgegevens.nl">
                    https://www.autoriteitpersoonsgegevens.nl
                  </a>
                </div>

                <div className="mt-4">
                  <p>
                    <strong>Stichting Goodplace Foundation</strong>
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
                      href="mailto:hello@goodplace.foundation"
                    >
                      hello@goodplace.foundation{' '}
                    </a>
                    <br />
                    <strong>W:</strong>{' '}
                    <a
                      className="underline"
                      href="https://goodplace.foundation"
                    >
                      https://goodplace.foundation
                    </a>
                    <br />
                    <strong>Kamer van Koophandel:</strong> 82244154
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default Privacy;
