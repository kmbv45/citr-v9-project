import { createRoot } from "react-dom/client";
import Pizza from "./pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Big Meat"
        description="Mozzarella Cheese, Sausage, Bacon, Pepperoni"
        image={"/public/pizzas/big_meat.webp"}
      />
      <Pizza
        name="Cheese"
        description="Mozzarella Cheese"
        image={"/public/pizzas/four_cheese.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="Mozzarella Cheese, Canadian Bacon, Pineapple"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Dumpster"
        description="Mozzarella Cheese, Pepperoni, Sausage, Peppers, Onions"
        image={"/public/pizzas/classic_dlx.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
