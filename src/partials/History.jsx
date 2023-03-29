import React from 'react';

import FeatImage01 from '../images/features-03-image-01.png';
import FeatImage02 from '../images/features-03-image-02.png';
import FeatImage03 from '../images/features-03-image-03.png';

import About1 from '../images/about_1.jpg';
import About2 from '../images/about_2.jpg';
import About3 from '../images/about_3.jpg';
import About4 from '../images/about_4.jpg';
import About5 from '../images/about_5.jpg';

import Staff1 from '../images/staff1.jpg';
import Staff2 from '../images/staff2.jpg';
import Staff3 from '../images/staff3.jpg';
import Staff4 from '../images/staff4.jpg';
import Staff5 from '../images/staff5.jpg';

import Logo1 from '../images/logos/logo1.jpg';
import Logo2 from '../images/logos/logo2.jpg';
import Logo3 from '../images/logos/logo3.jpg';
import Logo4 from '../images/logos/logo4.jpg';
import Logo5 from '../images/logos/logo5.jpg';
import Logo6 from '../images/logos/logo6.jpg';
import Logo7 from '../images/logos/logo7.jpg';
import Logo8 from '../images/logos/logo8.jpg';
import Logo9 from '../images/logos/logo9.jpg';

import Doodling from './Doodling';

import { Link } from "react-scroll";
import { BsFillCaretUpFill } from 'react-icons/bs';

function History() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800 ">

          {/* Section header */}
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <Doodling />
            <h1 className="h2 mb-4">Oto nasza historia</h1>
            <div className="flex flex-row gap-8 mt-10 justify-between">
                <Link className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer" to="history" spy={true} smooth={true} offset={-70} duration={500}>Historia</Link>
                <Link className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer" to="structure" spy={true} smooth={true} offset={-70} duration={500}>Struktura</Link>
                <Link className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer" to="members" spy={true} smooth={true} offset={-70} duration={500}>Pracownicy</Link>
                <Link className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer" to="owners" spy={true} smooth={true} offset={-70} duration={500}>Udziałowcy</Link>
                <Link className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer" to="offices" spy={true} smooth={true} offset={-70} duration={500}>Oddziały</Link>
            </div>
          </div>

          {/* Items */}
          <div className="grid gap-40 mt-10 ">

            {/* 1st item */}
            <div id="history" className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-5 mb-8 md:mb-0 md:order-1 self-start mt-16" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={About1} width="440" height="305" alt="Osoby trzymające się za ręce" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-7" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16 gap-2 flex flex-col">
                  <h3 className="h3 mb-3">Historia firmy</h3>
                  <p className="text-xl text-gray-400 mb-4">Historia naszej firmy sięga 2015 roku, kiedy to grupa przyjaciół zdecydowała się na stworzenie aplikacji mobilnej, która generowałaby losowe przysłowia z Wikipedii. Wtedy właśnie narodziła się nasza firma, którą nazwaliśmy "Przysłowioinator".</p>

                  <p className="text-xl text-gray-400 mb-4">Na początku byliśmy niewielką startupową firmą, która działała tylko na lokalnym rynku. Jednak dzięki wciąż rosnącej popularności aplikacji, szybko zaczęliśmy się rozwijać i poszerzać swoją działalność. W ciągu kilku miesięcy nasza aplikacja zaczęła cieszyć się dużą popularnością wśród użytkowników na całym świecie, a Przysłowioinator stał się jednym z najlepiej ocenianych i najczęściej pobieranych narzędzi w App Store.</p>

                  <p className="text-xl text-gray-400 mb-4">Wkrótce po tym, firma zdobyła inwestycję od znaczącego funduszu venture capital, co pozwoliło nam na dalszy rozwój i ekspansję. Rozpoczęliśmy prace nad nowymi funkcjonalnościami, takimi jak tłumaczenie przysłów na różne języki oraz możliwość dodawania własnych przysłów do aplikacji.</p>

                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div id="structure" className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-5 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={About2} width="440" height="305" alt="budynek firmy" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-7" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Struktura firmy</h3>
                  <p className="text-xl text-gray-400 mb-4">W hierarchicznej strukturze funkcjonalnej naszej firmy każdy pracownik ma jasno określone zadania i odpowiedzialności. Poszczególne działy i stanowiska są ułożone w logiczny sposób, a pracownicy mają dostęp do wyraźnie zdefiniowanych procedur i zasad działania. Dzięki temu struktura firmy pozwala na łatwiejsze zarządzanie zadaniami i projektami oraz na wykorzystanie w pełni potencjału pracowników.</p>
                  <p className="text-xl text-gray-400 mb-4">Władza w firmie jest centralizowana, a decyzje podejmowane są przez wyższe szczeble hierarchii. Jest to korzystne dla firmy, ponieważ umożliwia skuteczne i szybkie podejmowanie decyzji, a jednocześnie minimalizuje ryzyko chaosu i konfliktów między pracownikami. Co więcej, struktura funkcjonalna firmy Przysłowioinator umożliwia elastyczne dostosowanie się do zmieniających się potrzeb rynku i szybką reakcję na nowe wyzwania.</p>
                  
                </div>
              </div>
            </div>

            {/* 3rd item */}

            <div id="members" >
              <h3 className="h3 mb-20" data-aos="fade-right">Władze oraz nasi pracownicy</h3>
              <div className="flex flex-col gap-20">
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col gap-2 mb-40 text-end" data-aos="fade-right">
                    <p className="text-2xl font-bold">Bolesław Kwiatkowski</p>
                    <p className="text-xl">Chief Executive Officer (CEO)</p>
                  </div>
                  <img className="mx-20" src={Staff1} width="500" alt="CEO Bolesław Kwiatkowski" data-aos="fade-up" />
                </div>
                <div className="flex flex-row-reverse items-center justify-center">
                  <div className="flex flex-col gap-2 mb-40" data-aos="fade-left">
                    <p className="text-2xl font-bold">Marek Nowicki</p>
                    <p className="text-xl">Chief Technology Officer (CTO)</p>
                  </div>
                  <img className="mx-20" src={Staff2} width="500" alt="CTO Marek Nowicki" data-aos="fade-up" />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col gap-2 mb-40 text-end" data-aos="fade-right">
                    <p className="text-2xl font-bold">Jan Krzyżanowski</p>
                    <p className="text-xl">Chief Information Officer (CIO)</p>
                  </div>
                  <img className="mx-20" src={Staff3} width="500" alt="CIO Jan Krzyżanowski" data-aos="fade-up" />
                </div>
                <div className="flex flex-row-reverse items-center justify-center">
                  <div className="flex flex-col gap-2 mb-40" data-aos="fade-left">
                    <p className="text-2xl font-bold">Grzegorz Wysocki</p>
                    <p className="text-xl">Head of human resources</p>
                  </div>
                  <img className="mx-20" src={Staff4} width="500" alt="Grzegorz Wysocki" data-aos="fade-up" />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col gap-2 mb-40 text-end" data-aos="fade-right">
                    <p className="text-2xl font-bold">Piotr Swobodny</p>
                    <p className="text-xl">Head of Enterprise Infrastructure Operations & Technology</p>
                  </div>
                  <img className="mx-20" src={Staff5} width="500" alt="Piotr Swobodny" data-aos="fade-up" />
                </div>
              </div>
            </div>
            {/* 4th item */}
            <div id="owners" data-aos="fade-up" className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-5 mb-8 md:mb-0 rtl bg-white h-full items-center flex rounded-xl px-4">
                <div className="grid grid-cols-3 gap-10 p-4">
                  <img src={Logo1} width="500" alt="Bic" />
                  <img src={Logo2} width="500" alt="Oreo" />
                  <img src={Logo3} width="500" alt="Cisco" />
                  <img src={Logo4} width="500" alt="Steelcase" />
                  <img src={Logo5} width="500" alt="Hershey" />
                  <img src={Logo6} width="500" alt="NatGeo" />
                  <img src={Logo7} width="500" alt="RedBull" />
                  <img src={Logo8} width="500" alt="Lego" />
                  <img src={Logo9} width="500" alt="Hp" />
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-7" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Nasi Udziałowcy</h3>
                  <p className="text-xl text-gray-400 mb-4">W przypadku naszej firmy, udziałowcami są głównie inwestorzy instytucjonalni, takie jak fundusze inwestycyjne i banki inwestycyjne. Udziałowcy mają wpływ na decyzje podejmowane przez zarząd, w tym na kierunek rozwoju firmy, alokację kapitału i dywidendy dla akcjonariuszy.</p>
                  <p className="text-xl text-gray-400 mb-4">Firma regularnie informuje udziałowców o swojej sytuacji finansowej i planach na przyszłość, w celu utrzymania ich zaufania i zainteresowania inwestycją. Zarząd regularnie przedstawia udziałowcom wyniki finansowe oraz postępy w realizacji celów strategicznych, a także udziela odpowiedzi na pytania i wątpliwości dotyczące działalności firmy.</p>
                </div>
              </div>
            </div>

            {/* 5th item */}
            <div id="offices" className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-5 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={About5} width="440" height="305" alt="Budynek" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-7" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Nasze oddziały</h3>
                  <p className="text-xl text-gray-400 mb-4">Wraz ze swoim rozwojem tworzymy nowe oddziały naszej firmy. Dzięki temu nasz kontakt z klientem będzie o wiele szybszy i bardziej dostępny.</p>
                  <p className="text-xl text-gray-400 mb-4">Lokalizacje:</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>ul. Kucharek 6, 60-107 Poznań</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>ul. Wesołowska 12, 00-017 Warszawa</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>ul. Buraczana 3, 80-011 Gdańsk</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default History;