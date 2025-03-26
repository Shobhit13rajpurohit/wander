import React from "react";
import { Flight, Hotel } from "../data/mockData";
import { Star, Clock, Users } from "lucide-react";
import HotelList from "./HotelList";


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

const cardStyle = { width: "18rem" };


interface SearchResultsProps {
  type: "flight" | "hotel";
  results: (Flight | Hotel)[];
  cityName: string; // ✅ Now we are getting cityName from parent (App.tsx)
  onBook: (item: Flight | Hotel) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ type, results, onBook, cityName }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {type === "hotel" ? (
      <HotelList cityName={cityName} />
      ) : (
      results.map((item) => {
        if (type === "flight" && "airline" in item)
        return (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
          <Card style={cardStyle}>
            <CardImg
            alt="Flight"
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            top
            />
            <CardBody>
            <CardTitle>{item.airline}</CardTitle>
            <CardText>
              {item.from} → {item.to}
            </CardText>
            <CardText>
              ${item.price}
            </CardText>
            <Button onClick={() => onBook(item)} color="primary" href="javascript:;">
              Go somewhere
            </Button>
            </CardBody>
          </Card>
          </div>
            );
          return null;
        })
      )}
    </div>
  );
};

export default SearchResults;
