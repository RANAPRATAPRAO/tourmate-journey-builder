import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const HotelData = [
  {
    id: 1,
    name: "Luxury Resort & Spa",
    description:
      "Experience ultimate luxury and relaxation at our resort and spa.",
    price: "$299.99 per night",
    photo:
    "https://th.bing.com/th/id/OIP.7srIbLy1WnzLRNqhELTqSQHaE7?rs=1&pid=ImgDetMain",
},
  {
    id: 2,
    name: "Seaside Villa",
    description: "Relax by the sea in our charming seaside villa.",
    price: "$199.99 per night",
    photo:
    "https://th.bing.com/th/id/OIP.gv5OpoWHSuI20lI_PU-hnQHaE8?rs=1&pid=ImgDetMain",
},
  {
    id: 3,
    name: "Mountain Retreat",
    description: "Escape to the mountains and enjoy breathtaking views.",
    price: "$179.99 per night",
    photo:
    "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80",
},
  {
    id: 4,
    name: "City Center Hotel",
    description:
      "Stay in the heart of the city and explore all it has to offer.",
    price: "$249.99 per night",
    photo:
    "https://th.bing.com/th/id/OIP.AtsC1METE-txY4l1LyVelAHaEJ?rs=1&pid=ImgDetMain",
},
  {
    id: 5,
    name: "Riverside Lodge",
    description: "Enjoy a peaceful stay by the river in our cozy lodge.",
    price: "$159.99 per night",
    photo:
    "https://www.shortstayhomes.co.uk/wp-content/uploads/2015/12/Riverside-lodge-at-dusk.jpg",
},
  {
    id: 6,
    name: "Desert Oasis",
    description: "Experience serenity in the midst of the desert at our oasis.",
    price: "$179.99 per night",
    photo:
    "https://th.bing.com/th/id/OIP.tRWyIP7EaHUte7ghua3rVAHaFj?rs=1&pid=ImgDetMain",
},
  {
    id: 7,
    name: "Historic Manor House",
    description: "Step back in time and stay in our historic manor house.",
    price: "$349.99 per night",
    photo:
    "https://th.bing.com/th/id/OIP.ULKhVVXHFoiSIQdbbagaXQHaE8?rs=1&pid=ImgDetMain",
},
  {
    id: 8,
    name: "Tropical Paradise Resort",
    description: "Escape to our tropical paradise and enjoy luxury amenities.",
    price: "$399.99 per night",
    photo:
    "https://th.bing.com/th/id/OIP.2neZF_ZL3u_nEHWUPya_aQHaFP?rs=1&pid=ImgDetMain",
},
  {
    id: 9,
    name: "Ski Chalet",
    description: "Hit the slopes and then relax in our cozy ski chalet.",
    price: "$299.99 per night",
    photo:
    "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/11/Rochebrune-_3__354774162_599495451-1620x1081.jpg",
},
  {
    id: 10,
    name: "Urban Loft",
    description: "Experience modern urban living in our stylish loft space.",
    price: "$179.99 per night",
    photo:
    "https://i.pinimg.com/originals/44/82/a6/4482a6069333664e0ceea082e4446c00.jpg",
},
];

const HotelCard = ({ hotel }) => {
  return (
    <Card
      maxW={["full", "full", "90%"]}
      flex={["1 0 100%", "1 0 100%", "0 0 calc(33.33% - 2rem)"]}
      mb={["4", "4", "4"]}
      mx={["auto", "auto", "4"]}
      my="4"
      bg="gray.800"
      color="green.200"
    >
      <CardBody>
        <Image src={hotel.photo} alt={hotel.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{hotel.name}</Heading>
          <Text>{hotel.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            Price: {hotel.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardBody>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" mr="2">
            Book now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to wishlist
          </Button>
        </ButtonGroup>
      </CardBody>
      <Divider />
    </Card>
  );
};

const HotelPage1 = () => {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] overflow-hidden py-8">
      <div className="flex justify-center mt-8 space-x-4 flex-wrap">
        {HotelData.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

const theme = extendTheme({
  components: {
    Button,
  },
});

function HotelPage() {
  return (
    <ChakraProvider theme={theme}>
      <HotelPage1 />
    </ChakraProvider>
  );
}

export default HotelPage;
