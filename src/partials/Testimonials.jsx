import React from "react";

import TestimonialImage01 from "../images/testimonial-01.jpg";
import TestimonialImage02 from "../images/testimonial-02.jpg";
import TestimonialImage03 from "../images/testimonial-03.jpg";

function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Poznaj opinie naszych użytkowników</h2>
            <p className="text-xl text-gray-400">
              Z Przysłowioinatora korzysta już ponad 1 000 000 internautów i z
              jego pomocą codziennie wygrywają dyskusje w internecie i nie
              tylko!
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage01}
                    width="48"
                    height="48"
                    alt="Użytkownik"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                — Uwielbiam Przysłowioinator! Kiedy uczestniczę w dyskusjach w
                internecie, często brakuje mi słów, aby wyrazić swoje myśli.
                Dzięki tej aplikacji, mogę szybko znaleźć pasujące przysłowie i
                zastosować je w odpowiednim kontekście. To naprawdę pomaga mi w
                budowaniu bardziej przekonujących argumentów.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anna Kowalska</cite>{" "}
                -{" "}
                <span
                  className="text-purple-600 transition duration-150 ease-in-out"
                >
                  Pasjonatka filozofii
                </span>
              </div>
            </div>
            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage02}
                    width="48"
                    height="48"
                    alt="Użytkownik"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                — Przysłowioinator to świetna aplikacja dla ludzi, którzy chcą
                urozmaicić swoją komunikację w internecie. Uwielbiam to, jak
                łatwo można znaleźć odpowiednie przysłowie do każdej sytuacji.
                Aplikacja jest bardzo łatwa w użyciu i działa bez problemów na
                moim urządzeniu.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Jan Nowak</cite> -{" "}
                <span
                  className="text-purple-600 transition duration-150 ease-in-out"
                >
                  Student informatyki
                </span>
              </div>
            </div>
            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage03}
                    width="48"
                    height="48"
                    alt="Użytkownik"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                — Jeśli szukasz sposobu, aby wzbogacić swoją mowę w internecie,
                polecam wypróbowanie Przysłowioinatora. Ta aplikacja oferuje
                ogromną liczbę przysłowiowych sentencji, które można użyć w
                różnych sytuacjach.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">
                  Alan Wiśniewski
                </cite>{" "}
                -{" "}
                <span
                  className="text-purple-600 transition duration-150 ease-in-out"
                >
                  Aktywny bloger
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
