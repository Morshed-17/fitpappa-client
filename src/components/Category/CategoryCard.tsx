import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CategoryCard = ({
  _id,
  name,
  thumbnail,
}: {
  _id: string;
  name: string;
  thumbnail: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <img src={thumbnail} alt="" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-center lg:text-2xl">{name}</h3>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
