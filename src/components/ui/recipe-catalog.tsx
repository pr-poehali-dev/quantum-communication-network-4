import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Icon from "@/components/ui/icon"

type Recipe = {
  id: number
  name: string
  origin: string
  difficulty: "Лёгкое" | "Среднее" | "Сложное"
  method: "Аэрогриль" | "Плита" | "Мультиварка"
  time: string
  description: string
  image: string
  steps: string[]
  ingredients: string[]
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Борщ классический",
    origin: "Россия / Украина",
    difficulty: "Среднее",
    method: "Плита",
    time: "90 мин",
    description: "Наваристый красный суп на говяжьем бульоне со свёклой, капустой и картофелем. Одно из самых любимых блюд русской кухни.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/cd5b5b27-ea08-4c49-95b3-682e733f29c4.jpg",
    ingredients: ["Говядина 500г", "Свёкла 2шт", "Капуста 300г", "Картофель 3шт", "Морковь 1шт", "Лук 1шт", "Томатная паста 2 ст.л.", "Сметана для подачи"],
    steps: [
      "Сварите говяжий бульон: залейте мясо 2л воды, доведите до кипения, снимите пену, варите 1 час.",
      "Нарежьте свёклу соломкой, обжарьте на масле 10 мин, добавьте томатную пасту и уксус.",
      "Картофель нарежьте кубиками, добавьте в бульон, варите 10 мин.",
      "Добавьте нашинкованную капусту, варите ещё 7 мин.",
      "Введите зажарку со свёклой, посолите, поперчите, варите 5 мин.",
      "Дайте настояться 20 мин. Подавайте со сметаной и чесноком.",
    ],
  },
  {
    id: 2,
    name: "Пельмени домашние",
    origin: "Сибирь, Россия",
    difficulty: "Среднее",
    method: "Плита",
    time: "120 мин",
    description: "Сочные пельмени из смешанного фарша с тонким тестом. Визитная карточка сибирской кухни, любимая от Москвы до Владивостока.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/e24e7d36-0539-4e15-8806-b2cca21b1cae.jpg",
    ingredients: ["Мука 500г", "Яйцо 1шт", "Вода 200мл", "Говядина фарш 300г", "Свинина фарш 200г", "Лук 2шт", "Соль, перец"],
    steps: [
      "Замесите тесто: смешайте муку, яйцо, воду и щепотку соли. Вымешивайте 10 мин до эластичности.",
      "Фарш смешайте с мелко нарезанным луком, посолите и поперчите.",
      "Раскатайте тесто тонко (2мм), вырежьте кружочки диаметром 7 см.",
      "На каждый кружок положите 1 ч.л. фарша, сложите пополам и защипните края.",
      "Варите в подсоленной кипящей воде 7–8 мин после всплытия.",
      "Подавайте с маслом, сметаной или уксусом.",
    ],
  },
  {
    id: 3,
    name: "Бефстроганов",
    origin: "Санкт-Петербург, Россия",
    difficulty: "Среднее",
    method: "Плита",
    time: "50 мин",
    description: "Нежные полоски говядины в сливочно-грибном соусе. Блюдо графа Строганова, ставшее классикой мировой кухни.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/6f9ecad1-c9e2-4299-b951-e26b6fb8fbac.jpg",
    ingredients: ["Говядина 600г", "Шампиньоны 300г", "Лук 2шт", "Сметана 200г", "Сливочное масло 50г", "Мука 2 ст.л.", "Горчица 1 ч.л."],
    steps: [
      "Говядину нарежьте поперёк волокон тонкими полосками 5–6 см, отбейте слегка.",
      "Обваляйте в муке, обжарьте на сильном огне 2–3 мин до корочки, отложите.",
      "В той же сковороде обжарьте лук до золотистости, добавьте грибы, жарьте 7 мин.",
      "Добавьте сметану, горчицу, соль, перец. Перемешайте.",
      "Верните мясо в соус, тушите на малом огне 15 мин.",
      "Подавайте с картофельным пюре или гречкой.",
    ],
  },
  {
    id: 4,
    name: "Щи из квашеной капусты",
    origin: "Центральная Россия",
    difficulty: "Лёгкое",
    method: "Мультиварка",
    time: "90 мин",
    description: "Кислые щи — один из древнейших супов русской кухни. Квашеная капуста придаёт особую кислинку и аромат.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/cd5b5b27-ea08-4c49-95b3-682e733f29c4.jpg",
    ingredients: ["Квашеная капуста 400г", "Свинина 400г", "Картофель 3шт", "Морковь 1шт", "Лук 1шт", "Лавровый лист 2шт"],
    steps: [
      "Свинину нарежьте кусками, положите в мультиварку.",
      "Добавьте квашеную капусту, лавровый лист, залейте 1.5л воды.",
      "Режим «Суп» или «Тушение» на 60 мин.",
      "Добавьте нарезанный картофель, морковь и лук, ещё 30 мин.",
      "Посолите по вкусу. Подавайте со сметаной и ржаным хлебом.",
    ],
  },
  {
    id: 5,
    name: "Котлеты по-киевски",
    origin: "Россия / Украина",
    difficulty: "Сложное",
    method: "Аэрогриль",
    time: "60 мин",
    description: "Хрустящие куриные котлеты с начинкой из сливочного масла и зелени. Знаменитое блюдо, которое покорило весь мир.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/6f9ecad1-c9e2-4299-b951-e26b6fb8fbac.jpg",
    ingredients: ["Куриное филе 4шт", "Сливочное масло 100г", "Укроп пучок", "Яйцо 2шт", "Панировочные сухари 100г", "Мука 50г"],
    steps: [
      "Масло смешайте с рубленым укропом, сформируйте колбаску, заморозьте 20 мин.",
      "Куриное филе отбейте до толщины 5мм, посолите и поперчите.",
      "Положите кусочек замороженного масла на край филе, туго скатайте рулетом.",
      "Обваляйте в муке, затем в яйце, затем в сухарях (дважды).",
      "Разогрейте аэрогриль до 200°C, смажьте котлеты маслом.",
      "Готовьте 25 мин при 200°C, перевернув на половине времени.",
    ],
  },
  {
    id: 6,
    name: "Гречневая каша с грибами",
    origin: "Россия",
    difficulty: "Лёгкое",
    method: "Мультиварка",
    time: "40 мин",
    description: "Рассыпчатая гречка с ароматными лесными грибами — простое и сытное блюдо, богатое белком и железом.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/e24e7d36-0539-4e15-8806-b2cca21b1cae.jpg",
    ingredients: ["Гречка 2 стакана", "Белые грибы 300г", "Лук 1шт", "Морковь 1шт", "Сливочное масло 50г", "Вода 4 стакана"],
    steps: [
      "Грибы промойте, нарежьте. Лук и морковь нарежьте мелко.",
      "Обжарьте в мультиварке на режиме «Жарка» лук, морковь и грибы 10 мин.",
      "Добавьте промытую гречку, воду, соль.",
      "Режим «Гречка» или «Крупа» — 25 мин.",
      "По готовности добавьте сливочное масло, перемешайте и дайте постоять 5 мин.",
    ],
  },
  {
    id: 7,
    name: "Картошка в аэрогриле",
    origin: "Россия",
    difficulty: "Лёгкое",
    method: "Аэрогриль",
    time: "30 мин",
    description: "Хрустящая румяная картошка без лишнего масла — идеальный гарнир или самостоятельное блюдо.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/cd5b5b27-ea08-4c49-95b3-682e733f29c4.jpg",
    ingredients: ["Картофель 6шт", "Масло растительное 2 ст.л.", "Чеснок 3 зубчика", "Розмарин", "Соль, паприка"],
    steps: [
      "Картофель нарежьте дольками, промойте и обсушите.",
      "Смешайте с маслом, давлёным чесноком, солью, паприкой и розмарином.",
      "Разложите в один слой в корзине аэрогриля.",
      "Готовьте при 200°C 25 мин, встряхнув корзину в середине.",
    ],
  },
  {
    id: 8,
    name: "Солянка сборная мясная",
    origin: "Москва, Россия",
    difficulty: "Сложное",
    method: "Плита",
    time: "100 мин",
    description: "Густой ароматный суп с копчёностями, оливками и каперсами. Московская солянка — праздничное блюдо с насыщенным вкусом.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/6f9ecad1-c9e2-4299-b951-e26b6fb8fbac.jpg",
    ingredients: ["Говядина 300г", "Колбаса копчёная 200г", "Сосиски 200г", "Солёные огурцы 3шт", "Оливки 100г", "Лук 2шт", "Томатная паста 3 ст.л.", "Лимон"],
    steps: [
      "Сварите говяжий бульон. Мясо выньте и нарежьте кубиками.",
      "Обжарьте лук с томатной пастой 5 мин.",
      "Огурцы нарежьте кубиками, добавьте к луку, тушите 5 мин.",
      "В кипящий бульон добавьте зажарку, нарезанные колбасы, мясо.",
      "Добавьте оливки, каперсы, лавровый лист, варите 15 мин.",
      "Подавайте с ломтиком лимона и сметаной.",
    ],
  },
  {
    id: 9,
    name: "Вареники с картошкой",
    origin: "Россия / Украина",
    difficulty: "Среднее",
    method: "Плита",
    time: "80 мин",
    description: "Нежные вареники с картофельной начинкой и жареным луком. Сытное и доступное блюдо для всей семьи.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/e24e7d36-0539-4e15-8806-b2cca21b1cae.jpg",
    ingredients: ["Мука 500г", "Вода 200мл", "Яйцо 1шт", "Картофель 500г", "Лук 2шт", "Масло сливочное 50г"],
    steps: [
      "Замесите тесто из муки, яйца и воды, дайте отдохнуть 30 мин.",
      "Сварите картошку, разомните в пюре, добавьте жареный лук, соль.",
      "Раскатайте тесто, вырежьте кружочки 7 см.",
      "Начините картошкой, тщательно защипните края.",
      "Варите в подсоленной воде 5–6 мин после всплытия.",
      "Подавайте с жареным луком и сметаной.",
    ],
  },
  {
    id: 10,
    name: "Шашлык из свинины в аэрогриле",
    origin: "Кавказ / Россия",
    difficulty: "Лёгкое",
    method: "Аэрогриль",
    time: "50 мин",
    description: "Сочный ароматный шашлык прямо дома — без мангала, дыма и ожидания. Маринованная свинина в аэрогриле не хуже, чем на углях.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/6f9ecad1-c9e2-4299-b951-e26b6fb8fbac.jpg",
    ingredients: ["Свинина (шея) 1кг", "Лук 3шт", "Уксус 2 ст.л.", "Кориандр, зира, паприка", "Соль, чёрный перец"],
    steps: [
      "Мясо нарежьте кусками 4×4 см.",
      "Лук натрите на тёрке, смешайте с мясом, специями, уксусом. Маринуйте 2–6 часов.",
      "Нанижите мясо на шпажки, чередуя с кольцами лука.",
      "Разогрейте аэрогриль до 220°C.",
      "Готовьте 30–35 мин, переворачивая каждые 10 мин.",
      "Подавайте с лавашом, свежей зеленью и томатным соусом.",
    ],
  },
  {
    id: 11,
    name: "Уха рыбацкая",
    origin: "Поволжье, Россия",
    difficulty: "Лёгкое",
    method: "Плита",
    time: "50 мин",
    description: "Прозрачный золотистый бульон с рыбой, картофелем и специями. Рецепт волжских рыбаков, согревающий с XV века.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/cd5b5b27-ea08-4c49-95b3-682e733f29c4.jpg",
    ingredients: ["Судак или щука 700г", "Картофель 4шт", "Морковь 1шт", "Лук 1шт", "Лавровый лист", "Перец горошком", "Укроп"],
    steps: [
      "Рыбу почистите, нарежьте кусками. Из голов и хвостов сварите бульон 20 мин.",
      "Бульон процедите, поставьте на огонь.",
      "Добавьте нарезанный картофель и морковь, варите 10 мин.",
      "Добавьте куски рыбы, специи, варите 15 мин на малом огне.",
      "Посолите, добавьте укроп. Не мешайте — уха должна быть прозрачной.",
      "Подавайте с ржаным хлебом и рюмкой для «нагрева».",
    ],
  },
  {
    id: 12,
    name: "Голубцы в мультиварке",
    origin: "Россия",
    difficulty: "Среднее",
    method: "Мультиварка",
    time: "90 мин",
    description: "Капустные конверты с мясным фаршем и рисом в томатно-сметанном соусе. Домашний уют в каждой тарелке.",
    image: "https://cdn.poehali.dev/projects/9c64aa5a-32af-4958-ae82-73ff23b7c649/files/e24e7d36-0539-4e15-8806-b2cca21b1cae.jpg",
    ingredients: ["Капуста белокочанная 1 кочан", "Фарш свинина+говядина 500г", "Рис 100г", "Лук 1шт", "Томатная паста 3 ст.л.", "Сметана 200г"],
    steps: [
      "Кочан капусты опустите в кипяток, снимайте мягкие листья.",
      "Рис отварите до полуготовности. Смешайте с фаршем, луком, солью, перцем.",
      "Заворачивайте фарш в капустные листья, закрепите края.",
      "Выложите в мультиварку, залейте смесью томатной пасты и сметаны (500 мл воды).",
      "Режим «Тушение» 60 мин.",
      "Подавайте горячими со сметаной.",
    ],
  },
]

const difficulties = ["Все", "Лёгкое", "Среднее", "Сложное"]
const methods = ["Все", "Аэрогриль", "Плита", "Мультиварка"]

const difficultyColor = {
  "Лёгкое": "bg-green-500/20 text-green-300 border-green-500/30",
  "Среднее": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "Сложное": "bg-red-500/20 text-red-300 border-red-500/30",
}

const methodIcon = {
  "Аэрогриль": "Wind",
  "Плита": "Flame",
  "Мультиварка": "Cpu",
}

type RecipeModalProps = {
  recipe: Recipe
  onClose: () => void
}

function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-white/10 bg-black/90 backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/40 rounded-full p-1.5"
          >
            <Icon name="X" size={20} />
          </button>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-white font-open-sans-custom">{recipe.name}</h2>
            <div className="flex items-center gap-1 mt-1 text-gray-300 text-sm">
              <Icon name="MapPin" size={14} />
              <span>{recipe.origin}</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge className={cn("border", difficultyColor[recipe.difficulty])}>{recipe.difficulty}</Badge>
            <Badge className="bg-white/10 text-white border-white/20">
              <Icon name={methodIcon[recipe.method] as "Flame"} size={12} className="mr-1" />
              {recipe.method}
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20">
              <Icon name="Clock" size={12} className="mr-1" />
              {recipe.time}
            </Badge>
          </div>

          <p className="text-gray-300 font-open-sans-custom leading-relaxed">{recipe.description}</p>

          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2 font-open-sans-custom">
              <Icon name="ShoppingCart" size={16} />
              Ингредиенты
            </h3>
            <ul className="grid grid-cols-2 gap-1.5">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300 text-sm font-open-sans-custom">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2 font-open-sans-custom">
              <Icon name="ListOrdered" size={16} />
              Пошаговый рецепт
            </h3>
            <ol className="space-y-3">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm font-open-sans-custom">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-gray-300 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

const PAGE_SIZE = 6

export function RecipeCatalog() {
  const [activeDifficulty, setActiveDifficulty] = useState("Все")
  const [activeMethod, setActiveMethod] = useState("Все")
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = recipes.filter((r) => {
    const diffOk = activeDifficulty === "Все" || r.difficulty === activeDifficulty
    const methodOk = activeMethod === "Все" || r.method === activeMethod
    return diffOk && methodOk
  })

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl">
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}

      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
          Каталог рецептов
        </h1>
        <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
          Более 300 рецептов русской кухни — от простых до сложных, для аэрогриля, плиты и мультиварки
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        <div className="flex gap-2 flex-wrap justify-center">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => { setActiveDifficulty(d); setVisibleCount(PAGE_SIZE) }}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-open-sans-custom border transition-all",
                activeDifficulty === d
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-gray-300 border-white/20 hover:bg-white/10"
              )}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {methods.map((m) => (
            <button
              key={m}
              onClick={() => { setActiveMethod(m); setVisibleCount(PAGE_SIZE) }}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-open-sans-custom border transition-all",
                activeMethod === m
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-gray-300 border-white/20 hover:bg-white/10"
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className="group cursor-pointer rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-white/30 hover:bg-white/10 transition-all"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <Badge className={cn("absolute top-3 right-3 border text-xs", difficultyColor[recipe.difficulty])}>
                {recipe.difficulty}
              </Badge>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-white font-semibold font-open-sans-custom">{recipe.name}</h3>
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <Icon name="MapPin" size={11} />
                <span>{recipe.origin}</span>
              </div>
              <p className="text-gray-400 text-xs line-clamp-2 font-open-sans-custom">{recipe.description}</p>
              <div className="flex items-center gap-3 pt-1">
                <span className="flex items-center gap-1 text-gray-400 text-xs">
                  <Icon name={methodIcon[recipe.method] as "Flame"} size={12} />
                  {recipe.method}
                </span>
                <span className="flex items-center gap-1 text-gray-400 text-xs">
                  <Icon name="Clock" size={12} />
                  {recipe.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm font-open-sans-custom">
          Показано {visible.length} из {filtered.length} рецептов
        </p>
        {hasMore && (
          <Button
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            className="mt-4 bg-white/10 text-white border border-white/20 hover:bg-white/20 font-open-sans-custom"
          >
            Загрузить ещё рецепты
          </Button>
        )}
      </div>
    </div>
  )
}