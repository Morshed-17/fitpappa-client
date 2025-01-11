import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TCategory } from "@/types";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ name, image, _id }: TCategory) => {
  const navigate = useNavigate();

  return (
    <div className="group">
      <Card
        onClick={() => navigate("/products", { state: { categoryId: _id } })}
        className="cursor-pointer overflow-hidden transition-transform  h-full"
      >
        <CardHeader className="p-3">
          <CardTitle className="w-full pb-[100%] relative">
            <img
              className="rounded-lg absolute inset-0 group-hover:scale-105 transition-all duration-300 w-full h-full object-cover"
              src={image}
              alt={name}
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <h3 className="text-center text-sm sm:text-base lg:text-lg truncate">{name}</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;

