import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TCategory } from "@/types";

const CategoryCard = ({ name, image }: TCategory) => {
  return (
    <Card className="cursor-pointer group">
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
