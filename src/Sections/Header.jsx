/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../assets/dwad.svg"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Papa from "../assets/papa.png"

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const fadeInVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Usa useInView para cada sección
  const { ref: section1Ref, inView: section1InView } = useInView({ triggerOnce: true });
  const { ref: section2Ref, inView: section2InView } = useInView({ triggerOnce: true });
  const { ref: section3Ref, inView: section3InView } = useInView({ triggerOnce: true });
  const { ref: section4Ref, inView: section4InView } = useInView({ triggerOnce: true });

  return (
    <div className="isolate bg-main">
      <div className="flex gap-10 flex-col px-6 pt-6 lg:px-8">
        <div className='px-6 lg:px-8 items-center justify-items-center'>
            <img src={Logo} className="logo" alt="Vite logo" />
        </div>
      </div>
      <main>
      <motion.div ref={section1Ref} variants={fadeInVariant} initial="hidden" animate={section1InView ? "visible" : "hidden"} className="relative px-6 lg:px-8">
          <div className="flex flex-col items-center mx-auto max-w-6xl py-10 sm:py-18 sm:flex-row-reverse lg:py-16 gap-10">
            <div className="max-w-2xl sm:mb-8 sm:flex sm:justify-center">
                <img src={Papa}>
                </img>
            </div>
            <div className="text-center max-w-md">
              <h1 className="text-4xl font-display tracking-tight text-title sm:text-6xl">
              Nuestra Boda
              </h1>
              <p className="font-display mt-6 text-2xl leading-8 text-gray-600">
              Amarte no es solo querer compartir mis días contigo; es desear que nuestros sueños caminen juntos, que nuestras risas se encuentren y que nuestras almas se sostengan para siempre
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeKWIYuzwfDPSbsnDzvOmkh5hQPpVVW1sz1qPdEM3s_sP0rcQ/viewform?usp=pp_url"
                  className="border-2 rounded-md bg-transparent px-12 py-5 text-base font-display leading-7 text-black-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Unete a nosotros
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div ref={section2Ref} variants={fadeInVariant} initial="hidden" animate={section2InView ? "visible" : "hidden"} className="relative px-6 lg:px-8">
          <div className="flex flex-col items-center mx-auto max-w-7xl pb-36 pt-28 gap-10">
            <div className="max-w-3xl sm:mb-8 sm:flex sm:justify-center">
                <img src='https://static.4nets.sk/photo/50/774050/album/46020111_s1600x1600.jpg'>
                </img>
            </div>
            <div className="text-center max-w-md">
              <h1 className="text-2xl font-display tracking-tight text-title sm:text-6xl">
              Queridos amigos y familia
              </h1>
              <p className="font-display mt-6 text-lg leading-8 text-gray-600">
              Con una inmensa ilusión en nuestros corazones, queremos compartirles que muy pronto uniremos nuestras vidas en matrimonio. Este día no estaría completo sin ustedes, nuestras personas más queridas, quienes han sido parte fundamental de nuestro camino. Nos encantaría que nos acompañen en este momento tan especial, rodeados del amor y la alegría que solo ustedes pueden traer.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div ref={section3Ref} variants={fadeInVariant} initial="hidden" animate={section3InView ? "visible" : "hidden"} className="relative px-6 lg:px-8">
          <div className="flex flex-col items-center mx-auto max-w-7xl gap-10 border-2 border-second pb-10">
            <div className="sm:mb-8 sm:flex sm:justify-center">
                <img src='https://dbi-blog.s3.amazonaws.com/uploads/2018/10/Shopping-Tips-for-Tweens-2-2048x1365.jpg'>
                </img>
            </div>
            <div className="text-center max-w-md">
              <h1 className="text-2xl font-display tracking-tight text-gray-900 sm:text-6xl">
              Vestimenta
              </h1>
              <p className="font-display mt-6 text-lg leading-8 text-gray-600">
              Nos encantaría que todos se sientan cómodos y disfruten al máximo de este día tan especial para nosotros. Como sugerencia, recomendamos asistir con vestimenta formal, acorde a la ocasión. Esto significa traje o esmoquin para los caballeros y vestido elegante para las damas. Los niños también son bienvenidos a vestir en conjunto con esta formalidad.
              </p>
            </div>
          </div>
        </motion.div>
  
        <motion.div ref={section4Ref} variants={fadeInVariant} initial="hidden" animate={section4InView ? "visible" : "hidden"} className="relative px-6 lg:px-8">
          <div className="flex flex-col items-center mx-auto max-w-7xl py-10 sm:py-18 lg:py-16 gap-10">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl py-4 font-display tracking-tight text-gray-900 sm:text-6xl">
                Lugar y Hora
              </h1>            
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d238.75762216868296!2d-93.16047265282216!3d16.77060706280628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1731401853377!5m2!1ses-419!2smx" width="600" height="450" loading="lazy"></iframe>
              <p className="font-display mt-6 text-lg leading-8 text-gray-600">
                Av Samaria Mz6 Lte 15 Col.Nuevo Eden Tuxtla Gutierrez, Chiapas.
              </p>
              <p className="font-display mt-6 text-2xl leading-8 text-gray-600">
                14 de diciembre del 2024
              </p>
              <p className="font-display mt-6 text-2xl leading-8 text-gray-600">
                6:00 pm
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeKWIYuzwfDPSbsnDzvOmkh5hQPpVVW1sz1qPdEM3s_sP0rcQ/viewform?usp=pp_url"
                  className="border-2 rounded-md bg-transparent px-12 py-5 text-base font-display leading-7 text-black-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Confirmar asistencia
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
      </main>
    </div>
  )
}
