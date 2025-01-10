import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TCategory } from "@/types";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ name, image, _id }: TCategory) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate("/products", { state: { categoryId: _id } })}
      className="cursor-pointer group min-w-56"
    >
      <CardHeader>
        <CardTitle>
          <img
            className="rounded-lg group-hover:scale-105 transition-all"
            src={image}
            alt=""
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-center lg:text-xl">{name}</h3>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
