import { LiquidMetalBackground } from "@/components/LiquidMetalBackground"
import { FloatingNavbar } from "@/components/FloatingNavbar"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Feature } from "@/components/ui/feature-with-advantages"
import { RecipeCatalog } from "@/components/ui/recipe-catalog"
import { ContactCard } from "@/components/ui/contact-card"
import { AboutQuote } from "@/components/ui/about-quote"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import Icon from "@/components/ui/icon"

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const pricingSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY
      const currentScroll = scrollContainer.scrollLeft
      const containerWidth = scrollContainer.offsetWidth
      const currentSection = Math.round(currentScroll / containerWidth)

      if (currentSection === 2 && pricingSectionRef.current) {
        const pricingSection = pricingSectionRef.current
        const isAtTop = pricingSection.scrollTop === 0
        const isAtBottom = pricingSection.scrollTop + pricingSection.clientHeight >= pricingSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) return
        if (delta < 0 && !isAtTop) return

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({ left: 1 * containerWidth, behavior: "smooth" })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({ left: 3 * containerWidth, behavior: "smooth" })
          return
        }
      }

      if (currentSection === 3 && aboutSectionRef.current) {
        const aboutSection = aboutSectionRef.current
        const isAtTop = aboutSection.scrollTop === 0
        const isAtBottom = aboutSection.scrollTop + aboutSection.clientHeight >= aboutSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) return
        if (delta < 0 && !isAtTop) return

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({ left: 2 * containerWidth, behavior: "smooth" })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({ left: 4 * containerWidth, behavior: "smooth" })
          return
        }
      }

      if (currentSection === 4 && contactSectionRef.current) {
        const contactSection = contactSectionRef.current
        const isAtTop = contactSection.scrollTop === 0
        const isAtBottom = contactSection.scrollTop + contactSection.clientHeight >= contactSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) return
        if (delta < 0 && !isAtTop) return

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({ left: 3 * containerWidth, behavior: "smooth" })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          return
        }
      }

      e.preventDefault()

      if (Math.abs(delta) > 10) {
        let targetSection = currentSection
        if (delta > 0) {
          targetSection = Math.min(currentSection + 1, 4)
        } else {
          targetSection = Math.max(currentSection - 1, 0)
        }

        scrollContainer.scrollTo({ left: targetSection * containerWidth, behavior: "smooth" })
      }
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <main className="relative h-screen overflow-hidden">
      <LiquidMetalBackground />

      <div className="fixed inset-0 z-[5] bg-black/50" />

      <FloatingNavbar />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex h-screen w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* HERO */}
        <section id="home" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center px-0 leading-5">
              <div className="flex justify-center mb-6">
                <Icon name="ChefHat" size={64} className="text-white/80" />
              </div>
              <h1 className="mb-8 text-balance text-5xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-6xl lg:text-8xl">
                <span className="font-open-sans-custom not-italic">Русская.</span>{" "}
                <span className="font-serif italic">Кухня.</span>{" "}
                <span className="font-open-sans-custom not-italic">Рецепты.</span>
              </h1>

              <p className="mb-8 mx-auto max-w-2xl text-pretty leading-relaxed text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-thin font-open-sans-custom tracking-wide leading-7 text-xl">
                более 300 рецептов — от простого борща до сложных шедевров,{" "}
                <span className="font-serif italic">пошагово</span> для аэрогриля, мультиварки и плиты
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <ShinyButton
                  className="px-8 py-3 text-base"
                  onClick={() => {
                    const section = document.getElementById("pricing")
                    section?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
                  }}
                >
                  Смотреть рецепты
                </ShinyButton>
              </div>

              <div className="mt-12 flex justify-center gap-8 flex-wrap">
                {[
                  { icon: "Wind", label: "Аэрогриль" },
                  { icon: "Flame", label: "Плита" },
                  { icon: "Cpu", label: "Мультиварка" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2 text-white/60">
                    <Icon name={item.icon as "Wind"} size={28} />
                    <span className="text-xs font-open-sans-custom">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES / RECIPE TYPES */}
        <section id="features" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-7xl w-full">
            <Feature />
          </div>
        </section>

        {/* CATALOG */}
        <section
          id="pricing"
          ref={pricingSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />
          <RecipeCatalog />
        </section>

        {/* ABOUT */}
        <section
          id="about"
          ref={aboutSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                О проекте
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Сохраняем традиции русской кухни и делаем их доступными каждому
              </p>
            </div>
            <AboutQuote />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  icon: "BookOpen",
                  title: "300+ рецептов",
                  desc: "Постоянно пополняемая база — от старинных до современных рецептов",
                },
                {
                  icon: "MapPin",
                  title: "История каждого блюда",
                  desc: "Узнайте, из какого региона России пришло каждое блюдо",
                },
                {
                  icon: "Users",
                  title: "Для всей семьи",
                  desc: "Простые рецепты для детей и сложные шедевры для праздника",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-sm gap-3"
                >
                  <Icon name={item.icon as "BookOpen"} size={32} className="text-white/70" />
                  <h3 className="text-white font-semibold font-open-sans-custom">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-open-sans-custom">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          ref={contactSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Предложить рецепт
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Знаете интересный рецепт русской кухни? Поделитесь — мы добавим его в каталог!
              </p>
            </div>

            <ContactCard
              title="Поделитесь рецептом"
              description="Если вы знаете уникальный рецепт — семейный, региональный или старинный — напишите нам. Мы рассмотрим его и добавим в коллекцию с указанием автора."
              contactInfo={[
                {
                  icon: () => <Icon name="Mail" size={20} />,
                  label: "Email",
                  value: "recipes@russkaya-kuhnya.ru",
                },
                {
                  icon: () => <Icon name="MapPin" size={20} />,
                  label: "Мы из",
                  value: "Россия",
                },
                {
                  icon: () => <Icon name="ChefHat" size={20} />,
                  label: "Рецептов в базе",
                  value: "300+ и растём",
                },
              ]}
            >
              <form className="flex flex-col gap-4 w-full">
                <div className="grid gap-1">
                  <Label htmlFor="name" className="text-white font-open-sans-custom text-sm">
                    Ваше имя
                  </Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 font-open-sans-custom"
                  />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="recipe" className="text-white font-open-sans-custom text-sm">
                    Название блюда
                  </Label>
                  <Input
                    id="recipe"
                    placeholder="Бабушкины пироги..."
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 font-open-sans-custom"
                  />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="message" className="text-white font-open-sans-custom text-sm">
                    Рецепт
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ингредиенты и шаги приготовления..."
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 font-open-sans-custom resize-none"
                    rows={4}
                  />
                </div>
                <Button className="bg-white text-black hover:bg-gray-100 font-open-sans-custom">
                  Отправить рецепт
                </Button>
              </form>
            </ContactCard>
          </div>
        </section>
      </div>
    </main>
  )
}
