import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const foodData = [
    {
      id: 1,
      name: 'Pizza Margherita',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
      price: '$10.99',
      image: 'https://foodbyjonister.com/wp-content/uploads/2020/01/MargheritaPizza.jpg'
    },
    {
      id: 2,
      name: 'Grilled Salmon',
      description: 'Fresh grilled salmon served with steamed vegetables.',
      price: '$15.99',
      image: 'https://th.bing.com/th/id/OIP.Ap6iEGbolwm_UjeHXNNIWAHaK-?rs=1&pid=ImgDetMain'
    },
    {
      id: 3,
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta dish made with eggs, cheese, bacon, and pepper.',
      price: '$12.99',
      image: 'https://www.cookingclassy.com/wp-content/uploads/2020/10/spaghetti-carbonara-01-1024x1536.jpg'
    },
    {
      id: 4,
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce, croutons, parmesan cheese, and Caesar dressing.',
      price: '$8.99',
      image: 'https://bing.com/th?id=OSK.5773c1a49df8f8e641f5a11e18cf5c59'
    },
    {
      id: 5,
      name: 'Tiramisu',
      description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.',
      price: '$7.99',
      image: 'https://bing.com/th?id=OSK.3ea6400452d1cafba030c46baa9bf0bb'
    },
    {
      id: 6,
      name: 'Sushi Platter',
      description: 'Assorted sushi rolls and sashimi pieces served with soy sauce, wasabi, and pickled ginger.',
      price: '$18.99',
      image: 'https://th.bing.com/th/id/OIP.yBcIx7Gq4k6Ycw5KLxtL0wHaJ4?rs=1&pid=ImgDetMain'
    },
    {
      id: 7,
      name: 'Chicken Tikka Masala',
      description: 'Tender pieces of chicken cooked in a creamy tomato-based sauce with aromatic spices.',
      price: '$13.99',
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Tikka-Masala-min.jpg'
    },
    {
      id: 8,
      name: 'BBQ Ribs',
      description: 'Slow-cooked ribs smothered in tangy barbecue sauce, served with coleslaw and fries.',
      price: '$16.99',
      image: 'https://bing.com/th?id=OSK.6603551528ba4a5aaf3f57b0d3fc5085'
    },
    {
      id: 9,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
      price: '$9.99',
      image: 'https://tornadoughalli.com/wp-content/uploads/2020/02/LAVA-CAKES-18-768x1077.jpg'
    },
    {
      id: 10,
      name: 'Vegetable Stir Fry',
      description: 'Assorted vegetables stir-fried in a savory sauce, served over steamed rice.',
      price: '$11.99',
      image: 'https://bing.com/th?id=OSK.afe0b0732f41eaf93c37a27c224c434d'
    },
  ];
  

const ProductCard = ({ food }) => {
  return (
    <Card maxW={['full', 'full', '90%']} flex={['1 0 100%', '1 0 100%', '0 0 calc(33.33% - 2rem)']} mb={['4', '4', '4']} mx={['auto', 'auto', '4']}  my="4" bg="gray.800" color="green.200" >
    <CardBody>
      <Image
        src={food.image}
        alt={food.name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{food.name}</Heading>
        <Text>{food.description}</Text>
        <Text color='blue.600' fontSize='2xl'>
          {food.price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardBody>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' mr="2">
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardBody>
  </Card>
  );
};

const FoodPage1 = () => {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] overflow-hidden py-8">
      <div className="flex justify-between items-center mx-auto max-w-5xl px-4">
        <div className="w-1/2 pr-4">
          <h1 className="text-3xl font-bold text-green-200 mb-4 w-full">Welcome to the jungle of food</h1>
          <p className="font-sm font-bold text-green-100 w-full">Indulge in our tantalizing array of dishes, crafted with the finest ingredients to satisfy every craving. From savory classics to exotic delights, we have something to tantalize every taste bud, ensuring an unforgettable dining experience for all.</p>
        </div>
        <div className="w-1/2">
          <img src="food/delicious-burger-removebg-preview.png" alt="Food" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4 flex-wrap">
        {foodData.map(food => (
          <ProductCard key={food.id} food={food} />
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

function FoodPage() {
  return (
    <ChakraProvider theme={theme}>
      <FoodPage1 />
    </ChakraProvider>
  );
}

export default FoodPage;
