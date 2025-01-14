<template>
  <div class="px-8 md:px-24 flex flex-col gap-8">
    <div class="flex justify-center flex-col items-center">
      <h2 class="text-6xl font-bold mx-auto mb-2">
        {{ menuSection.title }}
      </h2>
      <a
        class="text-sm font-bold p-2 bg-white rounded-lg text-black uppercase hover:bg-gray-200 hover:scale-110 transition duration-300"
        target="_blank"
        href="menu.pdf"
        @click="trackButtonClick"
        >See All Menu (PDF) <i class="fas fa-book-open"></i
      ></a>
    </div>
    <Tabs v-model="activeTab" class="">
      <div class="flex overflow-x-scroll whitespace-nowrap md:justify-center">
        <TabsList class="flex justify-center">
          <TabsTrigger
            v-for="(type, index) in foodTypes"
            :key="index"
            :value="type"
            class="uppercase inline-block"
          >
            {{ type }}
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent
        v-for="(type, index) in foodTypes"
        :key="index"
        :value="type"
        class="w-full"
      >
        <Accordion type="single" collapsible>
          <div class="md:flex gap-16 hidden">
            <div class="w-full md:w-1/2">
              <AccordionItem
                v-for="(food, index) in filteredItems.slice(
                  0,
                  Math.ceil(filteredItems.length / 2)
                )"
                :key="index"
                :value="`item-${index}`"
              >
                <AccordionTrigger>
                  <div class="flex justify-between w-full pr-4">
                    <span class="text-2xl font-bold capitalize text-left">{{
                      food.title
                    }}</span>
                    <span class="text-lg">{{ food.price }}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent v-if="food?.description">
                  <span class="text-lg"> {{ food.description }}</span>
                </AccordionContent>
              </AccordionItem>
            </div>
            <div class="w-full md:w-1/2">
              <AccordionItem
                v-for="(food, index) in filteredItems.slice(
                  Math.ceil(filteredItems.length / 2)
                )"
                :key="index + Math.ceil(filteredItems.length / 2)"
                :value="`item-${index + Math.ceil(filteredItems.length / 2)}`"
              >
                <AccordionTrigger>
                  <div class="flex justify-between w-full pr-4">
                    <span class="text-2xl font-bold capitalize text-left">{{
                      food.title
                    }}</span>
                    <span class="text-lg">{{ food.price }}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent v-if="food?.description">
                  <span class="text-lg"> {{ food.description }}</span>
                </AccordionContent>
              </AccordionItem>
            </div>
          </div>
          <div class="flex gap-16 md:hidden">
            <div class="w-full md:w-1/2">
              <AccordionItem
                v-for="(food, index) in filteredItems"
                :key="index"
                :value="`item-${index}`"
              >
                <AccordionTrigger>
                  <div class="flex justify-between w-full pr-4">
                    <span class="text-2xl font-bold capitalize text-left">{{
                      food.title
                    }}</span>
                    <span class="text-lg">{{ food.price }}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent v-if="food?.description">
                  <span class="text-lg"> {{ food.description }}</span>
                </AccordionContent>
              </AccordionItem>
            </div>
          </div>
        </Accordion>
      </TabsContent>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { gtag } = useGtag(); // Note that `gtag` is a function, not `event`

// Function to track button clicks
const trackButtonClick = () => {
  gtag('event', 'button_click', {
    event_category: 'Button',
    event_label: 'menu-pdf-click',
  });
};

const foodTypes = [
  "pizzas",
  "entrantes",
  "tapas",
  "burger",
  "salads",
  "paella",
  "pescado",
  "carnes",
  "postres",
  "menu",
  "menu-picapiedra",
  "menu-options",
];

const menuSection = {
  title: "Menu",
  items: [
    {
      id: "pizzas",
      food: [
        {
          title: "MARGHERITA",
          price: "10€",
          description: "Tomato, mozzarella, Parmesan, basil, and oil",
        },
        {
          title: "MARINARA",
          price: "9€",
          description: "Double tomato, oregano, garlic, basil, and oil",
        },
        {
          title: "BUFALINA",
          price: "14€",
          description:
            "Cherry tomatoes, buffalo mozzarella, mozzarella, Parmesan, basil, and oil",
        },
        {
          title: "CAPRICCIOSA",
          price: "14.50€",
          description:
            "Tomato, mushrooms, olives, cooked ham, mozzarella, artichokes, and oil",
        },
        {
          title: "CALZONE CLASSICO",
          price: "14.50€",
          description: "Neapolitan salami, ricotta, and mozzarella",
        },
        {
          title: "FOCACCIA",
          price: "8€",
          description: "Oregano, oil, and olives",
        },
        {
          title: "QUATTRO FORMAGGI",
          price: "14€",
          description: "Parmesan, mozzarella, blue cheese, provolone, basil, and oil",
        },
        {
          title: "MAMARITA",
          price: "15.90€",
          description:
            "Tomato, mozzarella, arugula, Parmesan in scaglie, buffalo mozzarella, cherry tomatoes, and serrano ham",
        },
        {
          title: "TROPICAL",
          price: "15€",
          description: "Cooked ham, mozzarella, and pineapple",
        },
        {
          title: "PROSCIUTTO Y FUNGHI",
          price: "14.50€",
          description: "Tomato, mozzarella, Parmesan, mushrooms, cooked ham, and basil",
        },
        {
          title: "SICILIANA",
          price: "14.50€",
          description: "Tomato, mozzarella, eggplant, and Grana Padano",
        },
        {
          title: "MARE Y MONTI",
          price: "14.50€",
          description: "Mozzarella, asparagus, cherry tomatoes, shrimp, and basil",
        },
        {
          title: "NAPOLETANA",
          price: "14.50€",
          description:
            "Tomato, mozzarella, oregano, garlic, anchovies, capers, black olives, and basil",
        },
        {
          title: "CARBONARA TARTUFATA",
          price: "17.50€",
          description:
            "Mozzarella, truffle cream, guanciale, egg, and Parmesan in scaglie",
        },
        {
          title: "MEDITERRANEO",
          price: "16€",
          description: "Tuna, onion, mozzarella, and cherry tomatoes",
        },
        {
          title: "SALMONE",
          price: "17.50€",
          description:
            "Mozzarella, cherry tomatoes, caramelized onions, and smoked salmon",
        },
        {
          title: "BARBACOA",
          price: "17.50€",
          description: "Chicken, onion, bacon, corn, and barbecue sauce",
        },
        {
          title: "STRACCIATELLA",
          price: "16€",
          description:
            "Mozzarella, provolone, Parmesan, mortadella, stracciatella, sun-dried tomatoes, and pistachio pesto",
        },
        {
          title: "VEGETARIANA",
          price: "14.50€",
          description:
            "Tomato, mozzarella, mushrooms, cherry tomatoes, black olives, artichokes, and zucchini",
        },
        {
          title: "BURRATA",
          price: "15.50€",
          description:
            "Double tomato, arugula, cherry tomatoes, Parmesan in scaglie, burrata, and basil pesto",
        },
        {
          title: "PICCANTE",
          price: "14€",
          description: "Tomato, mozzarella, spicy chorizo, Parmesan, basil, and oil",
        },
        {
          title: "BABY",
          price: "13€",
          description: "Sliced Frankfurt, French fries, and mozzarella",
        },
      ],
    },
    {
      id: "entrantes",
      food: [
        {
          title: "Jamón Ibérico de Bellota",
          description: "Iberic Ham",
          price: "24.50€",
        },
        {
          title: "Tabla de Queso",
          description: "Cheese Assortment",
          price: "12.95€",
        },
        {
          title: "Tabla de Fuet / Chorizo",
          description: "Mixed Plate Fuet / Chorizo Ibéric",
          price: "11.50€",
        },
        {
          title: "Ibérico Platter (Fuet, chorizo, jamón)",
          description: "Ibéric Mix Plate",
          price: "20.50€",
        },
        {
          title: "Canelones de Carne Gratinados Del Chef",
          description: "Homemade Meat Chef’s Cannelloni",
          price: "18.50€",
        },
        {
          title: "Canelones de Marisco Gratinados Del Chef",
          description: "Homemade Seafood Chef’s Cannelloni",
          price: "18.50€",
        },
        {
          title: "Salmón con Aguacate",
          description: "Salmon Tartar with Avocado",
          price: "18.50€",
        },
        {
          title: "Calamares a la Andaluza",
          description: "Squids to the Andaluza",
          price: "13.50€",
        },
        {
          title: "Parrillada de Verduras con Salsa Romesco",
          description: "Grilled Vegetables with Romesco",
          price: "12.50€",
        },
        {
          title: "Steak Tartar",
          description: "Raw Beef Steak Tartar",
          price: "21.50€",
        },
        {
          title: "Carpaccio de Ternera con Virutas de Parmesano",
          description: "Raw Carpaccio of Beef with Cheese Parmesan",
          price: "18.50€",
        },
        {
          title: "Risotto de Setas",
          description: "Mushroom Risotto with Cheese Parmesan",
          price: "17€",
        },
        {
          title: "Risotto de Gambas y Setas",
          description: "Mushroom & Shrimps Risotto with Cheese Parmesan",
          price: "21€",
        },
        {
          title: "Alitas de Pollo Mexicanas",
          description: "Mexican Chicken Wings",
          price: "11.50€",
        },
        {
          title: "Rejos a la Andaluza",
          description: "Bars at Andaluza Style",
          price: "11.50€",
        },
        {
          title: "Bruschetta Classica Napolitana (3 unidades)",
          description: "Classic Neapolitan Bruschetta (3 Pieces)",
          price: "9€",
        },
      ],
    },
    {
      id: "salads",
      food: [
        {
          title: "Ensalada César",
          description: "Caesar Salad (Grilled Chicken, Croutons & Parmesan Cheese)",
          price: "16€",
        },
        {
          title: "Ensalada de Burrata y Tomate",
          description: "Burrata & Tomato Salad with Pesto Sauce",
          price: "16€",
        },
        {
          title: "Ensalada Caprese",
          description: "Fresh Tomato & Mozzarella Salad",
          price: "15€",
        },
        {
          title: "Mediterráneo Ensalada (Gambas y Anchoas)",
          description: "Mediterranean Salad with Shrimps & Anchovies",
          price: "18€",
        },
        {
          title: "Jamón, Melón y Burrata",
          description: "Ham, Melon & Cheese Burrata",
          price: "14€",
        },
        {
          title: "Ensalada de Queso Provolone y Orégano",
          description: "Provolone Cheese and Oregano baked in a wood-fired oven",
          price: "12€",
        },
      ],
    },
    {
      id: "burger",
      food: [
        {
          title: "Hamburguesa BBQ con Bacon",
          description: "BBQ Bacon Melt Burger",
          price: "12.50€",
        },
        {
          title: "Hamburguesa Pollo con Aguacate",
          description: "Chicken Burger with Avocado",
          price: "13.50€",
        },
        {
          title: "Hamburguesa Mediterránea",
          description: "Burger Mediterranea (Meat, Ham & Cheese Mozzarella)",
          price: "13.50€",
        },
        {
          title: "Hamburguesa Vegetal con Aguacate",
          description: "Veggie Burger with Avocado",
          price: "12.50€",
        },
      ],
    },
    {
      id: "paella",
      food: [
        {
          title: "Arroz a la Marinera",
          description: "Seafood Paella (Cuttlefish, Shrimps, Mussels)",
          price: "21.50€",
        },
        {
          title: "Arroz Negro a la Marinera",
          description: "Black Rice Paella",
          price: "24.50€",
        },
        {
          title: "Arroz Mixta (Marisco y Pollo)",
          description: "Mixed Paella (Seafood & Chicken)",
          price: "25.50€",
        },
        {
          title: "Arroz Caldoso con Bogavante (min 2 personas)",
          description: "Rice with Lobster (Min 2 people)",
          price: "25€ per person",
        },
        {
          title: "Paella de Pollo",
          description: "Chicken Paella",
          price: "19€",
        },
        {
          title: "Paella de Verduras",
          description: "Seasonal Vegetables Paella",
          price: "18€",
        },
        {
          title: "Fideuà a la Marinera o Pollo y Verduras",
          description: "Seafood or Chicken & Vegetables Fideuà",
          price: "21.50€",
        },
      ],
    },
    {
      id: "pescado",
      food: [
        {
          title: "Gambas a la Plancha con Ensalada",
          description: "Grilled Shrimp with Green Salad",
          price: "21.50€",
        },
        {
          title: "Calamares a la Plancha con Ensalada",
          description: "Grilled Squid with Salad",
          price: "18.50€",
        },
        {
          title: "Pulpo a la Brasa con Verduras Salteados",
          description: "Grilled Octopus with Grilled Vegetables",
          price: "21.50€",
        },
        {
          title: "Pulpo a la Gallega",
          description: "Octopus Galician Style with Potatoes",
          price: "22.50€",
        },
        {
          title: "Sepia a la Plancha con Ensalada",
          description: "Grilled Cuttlefish with Salad",
          price: "19.50€",
        },
        {
          title: "Salmón a la Plancha con Ensalada de Aguacate",
          description: "Grilled Salmon Supreme with Avocado Salad",
          price: "20.50€",
        },
        {
          title: "Suprema de Bacalao a la Miel con Verduras",
          description: "Cod Supreme with Honey & Vegetables",
          price: "21.50€",
        },
        {
          title: "MIXTO DE PESCADO PLANCHA",
          description: "Mix Fish (Squid, Shrimp, Rasher, Mussels, Clams)",
          price: "32€",
        },
      ],
    },
    {
      id: "carnes",
      food: [
        {
          title: "Presa Ibérica a la Brasa",
          description: "Iberian Prey Meat",
          price: "22.50€",
        },
        {
          title: "Solomillo de Ternera con Padrones y Fritas",
          description: "Beef Tenderloin with Fries & Green Peppers",
          price: "28€",
        },
        {
          title: "Entrecot de Girona 300gm",
          description: "Entrecote of Girona 300gm",
          price: "24€",
        },
        {
          title: "Costillas de Cordero a la Brasa con Alioli",
          description: "Grilled Lamb Ribs with Alioli Sauce",
          price: "21.50€",
        },
        {
          title: "Chuletón de Galicia 500gm",
          description: "Steak of Galicia 500gm",
          price: "32€",
        },
        {
          title: "Albóndigas a la Jardinera con Sepia",
          description: "Stewed Meatballs with Cuttlefish",
          price: "19.50€",
        },
        {
          title: "Rabo de Toro Estilo Cordobés",
          description: "Oxtail in Red Wine Cordoban Style",
          price: "24€",
        },
      ],
    },
    {
      id: "postres",
      food: [
        {
          title: "Fruta del Tiempo",
          description: "Mixed Seasonal Fruits",
          price: "6.50€",
        },
        {
          title: "Flan / Pudin con Nata",
          description: "Flan / Pudding with Cream",
          price: "6.50€",
        },
        {
          title: "Tarta de Queso",
          description: "Cheesecake",
          price: "7.50€",
        },
        {
          title: "Coulant de Chocolate con Vainilla",
          description: "Chocolate Coulant with Vanilla Ice Cream",
          price: "8.50€",
        },
        {
          title: "Tarta de Tiramisú",
          description: "Tiramisu Cake",
          price: "6.50€",
        },
        {
          title: "Crema Catalana",
          description: "Catalan Cream with Melted Sugar",
          price: "7.50€",
        },
      ],
    },
    {
      id: "menu",
      food: [
        {
          title: "Entrantes / To Share",
          description:
            "Ensaladilla Rusa / Russian Salad , Calamares a la Andaluza / Squids to the Andaluza, Navajas a la Plancha / Grilled Razor",
        },
        {
          title: "Segundo / Second Plate",
          description: "Arroz Caldoso con Bogavante / Rice with Lobster",
        },
        {
          title: "Extras",
          description:
            "Pan con Tomate, Bebida y Postre / Bread with Tomato, Drink & Dessert",
          price: "35€ per person (Min 2 people)",
        },
      ],
    },
    {
      id: "menu-picapiedra",
      food: [
        {
          title: "Entrantes / To Share",
          description:
            "Jamón Ibérico de Bellota / Iberic Ham,Pimientos de Padrón / Green Peppers,Espárragos de Tudela / Asparagus from Tudela",
        },
        {
          title: "Segundo / Second Plate",
          description:
            "Chuletón de Galicia (1 kilo aprox.) / Steak of Galicia (1 kilo approx.)",
        },
        {
          title: "Extras",
          description:
            "Pan con Tomate, Bebida y Postre / Bread with Tomato, Drink & Dessert",
          price: "35€ per person (Min 2 people)",
        },
      ],
    },
    {
      id: "menu-options",
      food: [
        {
          title: "Menu Paella",
          description:
            "Includes Paella (Options: Seafood, Vegetables, Chicken, or Mixed) + Sangría",
          price: "25€ per person",
        },
        {
          title: "Menu Fideuà",
          description:
            "Includes Fideuà (Options: Seafood, Vegetables, Chicken, or Mixed) + Sangría",
          price: "25€ per person",
        },
      ],
    },
    {
      id: "tapas",
      food: [
        {
          title: "Pan Con Tomate",
          description: "Bread with Tomato",
          price: "4.50€",
        },
        {
          title: "Bravas Mediterránea",
          description: "Baked Potato with Tomato & Alioli Sauce",
          price: "6.50€",
        },
        {
          title: "Ensaladilla Rusa",
          description: "Russian Salad",
          price: "6.50€",
        },
        {
          title: "Torreznos de Soria",
          description: "Rasher of Bacon from Soria",
          price: "10.50€",
        },
        {
          title: "Croquetas de Jamón (5 uni.)",
          description: "Croquettes of Ham",
          price: "7.50€",
        },
        {
          title: "Croquetas de Setas (5 uni.)",
          description: "Croquettes of Mushroom",
          price: "7.50€",
        },
        {
          title: "Gambas al Ajillo",
          description: "Shrimps Fried with Garlic & Toasts",
          price: "15.50€",
        },
        {
          title: "Huevos Rotos con Jamón Ibérico",
          description: "Fried Eggs & Potatoes with Iberic Ham",
          price: "12.50€",
        },
        {
          title: "Chips de Alcachofa con Miel de Caña",
          description: "Fried Artichoke with Cane Honey",
          price: "9.50€",
        },
        {
          title: "Berenjena a la Miel con Salsa Romesco",
          description: "Eggplant with Cane Honey & Romesco",
          price: "9.50€",
        },
        {
          title: "Pimientos de Padrón",
          description: "Fried Green Peppers",
          price: "7.50€",
        },
        {
          title: "Navajas a la Plancha",
          description: "Grilled Razor with Garlic & Parsley Sauce",
          price: "12.50€",
        },
        {
          title: "Lacón a la Gallega",
          description: "Lacon to the Galician Style (Dried Ham)",
          price: "11.50€",
        },
        {
          title: "Almejas a la Marinera",
          description: "Clams to the Sailor’s Blouse",
          price: "15.50€",
        },
        {
          title: "Mejillones a la Marinera",
          description: "Mussels to the Sailor’s House",
          price: "13.50€",
        },
      ],
    },
  ],
};
const activeTab = ref("pizzas");
const filteredItems = computed(() => {
  return menuSection.items
    .filter((item) => item.id === activeTab.value)
    .flatMap((item) => item.food);
});
</script>

<style scoped></style>
