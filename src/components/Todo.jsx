import { VStack, Button, Input, Text, HStack, OrderedList, Flex, ListItem, FormControl, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoSend, setTodoSend] = useState([]);
  const [checked, setChecked] = useState([]);
  const [all, setAll] = useState("");

  
  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('todoList');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTodoSend(parsedData.todos);
      setChecked(parsedData.checked);
      taskCompleted();
    }
  }, []);

  const handleValue = (e) => {
    setTodo(e.target.value);
  };
  
  const handleSend = () => {
    if (todo === "") return;

    const newTodoList = [...todoSend, todo];
    const newChecked = [...checked, false];
    const dataToStore = {
      todos: newTodoList,
      checked: newChecked
    };

    localStorage.setItem('todoList', JSON.stringify(dataToStore));
    setTodoSend(newTodoList);
    setChecked(newChecked);
    taskCompleted();
    setTodo("");
  };

  const handleAllDel = () => {
    setTodoSend([]);
    setChecked([]);

        const storedData = localStorage.getItem('todoList');
        const parsedData = JSON.parse(storedData);
        parsedData.todos = [];
        parsedData.checked = [];
        // console.log(parsedData.todos,parsedData.checked)
        localStorage.setItem("todoList", JSON.stringify(parsedData) )
  };

  const handleChecked = (index) => {
    const updatedChecked = checked.map((item, i) => (i === index ? !item : item));
    setChecked(updatedChecked);

    // Update localStorage
    const storedData = localStorage.getItem('todoList');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      parsedData.checked = updatedChecked;
      localStorage.setItem('todoList', JSON.stringify(parsedData));
      taskCompleted();
    }
  };

  const del = (index) => {
    const storedData = localStorage.getItem('todoList');
    const todoList = storedData ? JSON.parse(storedData) : { todos: [], checked: [] };

    if (index >= 0 && index < todoList.todos.length) {
      todoList.todos.splice(index, 1);
      todoList.checked.splice(index, 1);
    }

    localStorage.setItem('todoList', JSON.stringify(todoList));
    setTodoSend((items) => items.filter((_, itemIndex) => index !== itemIndex));
    setChecked((checks) => checks.filter((_, itemIndex) => index !== itemIndex));
  };

  const taskCompleted = () => {
        const storedData = localStorage.getItem('todoList');
        const parsedData = JSON.parse(storedData);

    const allChecked = parsedData.checked.every((element) => element == true );
      if (allChecked) {
        setAll(true)
      } else {
        setAll(false)
      } 
  }

const getPercentage = () => {
  if(checked.length === 0) return 0;
  return (checked.filter(Boolean).length / checked.length  * 100)
} 
const percentage = getPercentage()


const getBg = () => {
  const darknessFactor = 0.3
  const red = Math.max(255-(percentage * 2.55),0 * darknessFactor ) 
  const green = Math.min(percentage * 2.55, 255  * darknessFactor );
  return `rgb(${red}, ${green}, 0)`;
}

  return (
    <FormControl w="full" >
      <Flex align="center" justify="center" > 
       <Flex w="full"  h="3rem" align="center">  
         <Box transition="all 0.7s ease-in-out"
          style={{ width: checked ? `${percentage}%` : "" , backgroundColor : getBg() }}  h="full" />
      </Flex>
     </Flex>
      <VStack align="end" justify="end" w="full">
        <Text w="full" fontSize="3rem"
        transition="color 0.7s ease-in-out"
                  style={{color: all ? 'green' : '#E5B80B' }} >Todo List
        </Text>
        <Text w="full" fontSize=".8rem" >( {todoSend.length === 0 
       ? "No tasks here yet—let's add some and conquer the day!" 
       : `${all ? "No tasks left, You're unstoppable!" : "Tasks are waiting to be done"}`
  }
)</Text>
        <HStack pt="2rem" >
          <Input
           border="2px solid #E5B80B"
                 borderRadius="50%" borderTopRightRadius="none"
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            onChange={handleValue}
            value={todo}
            placeholder="Your Todo"
          />
          <Button  border="2px solid #E5B80B"
                 borderRadius="50%" borderTopRightRadius="none"   w="7.7rem" onClick={handleSend}   
                  boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" >
            Send
          </Button>
        </HStack>
        <Button  border="2px solid #E5B80B"
                 borderRadius="50%" borderTopRightRadius="none"   w="6rem" onClick={handleAllDel}   
                  boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" >
          Wipe All
        </Button>
        <Flex>
          <OrderedList w="full">
            {todoSend.map((item, index) => (
              <Flex key={index} w="full" align="center" justify="space-between" >
                <ListItem
                pos="relative"
                fontSize={{ base: '.8rem', md: '.9rem', lg: '1.1rem', xl: '1.2rem' }}
                  textTransform="capitalize"
                  onClick={() => handleChecked(index)}
                  style={{ textDecoration: checked[index] ? 'line-through' : 'none',
                   border: checked[index] ? '2px solid green' : '2px solid #E5B80B' }}
                  p="6"
                  mt="1rem"
                 border="2px solid #E5B80B"
                 borderRadius="50%" borderTopRightRadius="none"
                >
                  {item}
                  <Flex  justify="end" w ="full" pos="absolute" top="0%" right="0%" >
                  <Box zIndex='2'cursor="pointer" opacity="0.7" borderRadius="50%" borderTopRightRadius="none" w="1rem" h="1rem" ></Box>
                  </Flex>
                </ListItem>
                <Flex align="center" justify="center" gap="2rem">
                  <Button  border="2px solid #E5B80B"
                 borderRadius="50%" borderTopRightRadius="none"  w="6rem" onClick={() => del(index)}  
                 
                  style={{ border: checked[index] ? '2px solid green' : '2px solid #E5B80B' }} 
                  boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" >
                    Del
                  </Button>
                </Flex>
              </Flex>
            ))}
          </OrderedList>
        </Flex>
      </VStack>
    </FormControl>
  );
};

export default Todo;
