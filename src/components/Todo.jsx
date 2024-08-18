import {
  VStack,
  Button,
  Input,
  Text,
  HStack,
  OrderedList,
  Flex,
  ListItem,
  FormControl,
  Box,
  Checkbox,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { transform } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { FaRegCheckCircle } from 'react-icons/fa';

import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoSend, setTodoSend] = useState([]);
  const [checked, setChecked] = useState({});
  const [all, setAll] = useState("");
  const [editId, setEditId] = useState(null);    // Store the ID of the item being edited
  const [editValue, setEditValue] = useState("");      // Store the edited value
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal controls
  const [search, setSearch] = useState("");
  const [complete, setComplete] = useState([]) 
  const [priorities, setPriorities] = useState({});
 const [isToggle, setIsToggle] = useState(false);
  const [isToggleTwo, setIsToggleTwo] = useState({});

const handleToggle = () => {
  setIsToggle(!isToggle)
}


 const handleToggleTwo = (id) => {
    setIsToggleTwo(prev => ({ ...prev, [id]: !prev[id] })); // Toggle specific item
  };



const priorityColors = {
  Trivial: "#90EE90",   
  Standard: "#87CEFA",  
  Critical: "#FF6347"   
};


  useEffect(() => {
    const storedData = localStorage.getItem('todoList');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTodoSend(parsedData.todos);
      setChecked(parsedData.checked);
      taskCompleted();
    }
  }, []);

  useEffect(() => {
    setComplete(todoSend);
  }, [todoSend,setComplete]);

  useEffect(() => {
  const storedData = localStorage.getItem('todoList');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    setPriorities(parsedData.priorities || {});
  }
}, []);


  const handleValue = (e) => {
    setTodo(e.target.value);
  };

  const handleSend = () => {
    if (todo === "") return;

    const newTodo = { id: uuidv4(), text: todo }; // Create a new todo object with a unique ID
    const newTodoList = [...todoSend, newTodo];
    const newChecked = { ...checked, [newTodo.id]: false }; // Store checked status by ID

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
    setChecked({});

    const storedData = localStorage.getItem('todoList');
    const parsedData = JSON.parse(storedData);
    parsedData.todos = [];
    parsedData.checked = {};
    localStorage.setItem("todoList", JSON.stringify(parsedData));
  };

  const handleChecked = (id) => {
    const updatedChecked = { ...checked, [id]: !checked[id] };
    setChecked(updatedChecked);

    const storedData = localStorage.getItem('todoList');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      parsedData.checked = updatedChecked;
      localStorage.setItem('todoList', JSON.stringify(parsedData));
      taskCompleted();
    }
  };

  const edit = (id) => {
    const todoItem = todoSend.find((item) => item.id === id);
    const completedTasks = todoSend.filter((item) => checked[item.id] === true);
    if (completedTasks) {
      setEditId(id);
      setEditValue(todoItem.text)
      todoSend.filter((item) => checked[item.id] === false)
      onOpen();
    } else {
      setEditId(id);
      setEditValue(todoItem.text)
      onOpen();
    }
  };

  const handlePriorityChange = (id, newPriority) => {
  const updatedPriorities = { ...priorities, [id]: newPriority };
  setPriorities(updatedPriorities);

  const storedData = localStorage.getItem('todoList');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    parsedData.priorities = updatedPriorities;
    localStorage.setItem('todoList', JSON.stringify(parsedData));
  }
};



  const handleEditSave = () => {
    const updatedTodoList = todoSend.map((item) => item.id === editId ? { ...item, text: editValue } : item
      )
      console.log(checked)

    const storedData = localStorage.getItem('todoList');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      parsedData.todos = updatedTodoList;
      localStorage.setItem('todoList', JSON.stringify(parsedData));
    }

    setTodoSend(updatedTodoList);
    onClose(); // Close the modal
  };

  const del = (id) => {
    const updatedTodoList = todoSend.filter((item) => item.id !== id);
    const { [id]: _, ...updatedChecked } = checked;

    const storedData = localStorage.getItem('todoList');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      parsedData.todos = updatedTodoList;
      parsedData.checked = updatedChecked;
      localStorage.setItem('todoList', JSON.stringify(parsedData));
    }

    setTodoSend(updatedTodoList);
    setChecked(updatedChecked);
  };

  const taskCompleted = () => {
    const allChecked = Object.values(checked).every((value) => value === true);
    setAll(allChecked);
  };

  const getPercentage = () => {
    const total = Object.keys(checked).length;
    if (total === 0) return 0;
    const completed = Object.values(checked).filter(Boolean).length;
    return (completed / total) * 100;
  };
  
  const totalChecked = Object.values(checked).filter(Boolean).length;

  const percentage = getPercentage();

  const getBg = () => {
    const darknessFactor = 0.3;
    const red = Math.max(255 - percentage * 2.55, 0 * darknessFactor);
    const green = Math.min(percentage * 2.55, 255 * darknessFactor);
    return `rgb(${red}, ${green}, 0)`;
  };

  const handleSearchValue = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = todoSend.filter((element) =>
      element.text.toLowerCase().includes(value)
    );
  
    setComplete(filtered);
  };  

  const completedTasks = todoSend.filter((item) => checked[item.id] === true);
  const unCompeletdTasks = todoSend.filter((item) => checked[item.id] == false )

  const taskStatus = [ 
    {name :"All Tasks", bg : "#f0f0f0", number : todoSend.length },
  { name : "Completed Tasks", bg : "#e0f8f1",number : completedTasks.length  },
  { name : "Pending Tasks", bg : "#ffe6e6",number : unCompeletdTasks.length  }, ]

const handleTasks = (item,index) => {
  if (index == 0) {
    setComplete(todoSend)
  }
  if (index == 1) {
    setComplete(completedTasks)
  }
  if (index == 2) {
    setComplete(unCompeletdTasks)
  } 
  }


  return (
    <FormControl w="full">
      <Flex align="center" justify="center">
        <Flex w="full" h="3rem" border="2px solid" >
          <Flex
          color="#fff"
            align="center" justify="center"
            transition="all 0.7s ease-in-out"
            style={{ width: checked ? `${percentage}%` : "", backgroundColor: getBg() }}
            h="full"
          >{ Math.round(percentage)}% </Flex>
        </Flex>
      </Flex>
      <VStack align="center" justify="center" w="full">
        <Text
          textAlign="center"
          w="full"
          fontSize="3rem"
          transition="color 0.7s ease-in-out"
          style={{ color: all ? 'green' : '#E5B80B', fontWeight: "bolder" }}
        >
          Todo List
        </Text>
        <Text textAlign="center" w="full" fontSize=".8rem">
            {todoSend.length === 0
    ? "No tasks here yet—let's add some and conquer the day!"
    : totalChecked === todoSend.length
    ? "No tasks left, You're unstoppable!"
    : "Tasks are waiting to be done"}
        </Text>
        <Flex align="center" justify="space-between" w="20rem" pt="2rem">
              <Input
              borderTopRightRadius="none"
              borderBottomRightRadius="none"
            border="2px solid #E5B80B"
           onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSend();
          } }}
            onChange={handleValue}
            value={todo}
            placeholder="Your Todo"
          />
          <Button
            borderTopLeftRadius="none"
            borderBottomLeftRadius="none"
            border="2px solid #E5B80B"
            onClick={handleSend}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          >
            +
          </Button>
        </Flex>
        <Flex align="center" justify="space-between" w="20rem"  pt="2rem">
          <Button
            w="50%"
            border="2px solid #E5B80B"
            onClick={handleAllDel}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          >
            AllDel
          </Button>
          <Button
          onClick={handleToggle}
            w="50%"
            pos="relative"
            border="2px solid #E5B80B"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          >
            Task Status
            <Flex zIndex="4" align="start"  transformOrigin="top" w="10rem"
            h="6.6rem" bg="#fff" pos="absolute" left="0" top="2.3rem"  
            className='tasks' flexDirection="column"
                  style={{
    transform: isToggle ? "scale(1, 1)" : "scale(1, 0)"
  }}
            transition="all .4s ease-in-out" >
              {taskStatus.map((item,index) => 
              <Flex key={index} w="full" p="2"
            _hover={{ bg : item.bg ,  cursor: "pointer" }}  align="center" justify="space-between"
            >
                <Text textAlign="start"
                onClick={() => handleTasks(item,index)}
                key={index} w="full">
           {item.name} </Text> 
           <Text onClick={() => handleTasks(item,index)} >({item.number})</Text>
              </Flex>
                  )}
            </Flex>
          </Button>
        </Flex>
        <HStack w="20rem" pt="2rem">
          <Input
            border="2px solid #E5B80B"
            onChange={handleSearchValue}
            value={search}
            placeholder="Search Todo"
          />
        </HStack>
        <Flex>

          {/* second */}
          <OrderedList styleType="none"  w="full">
            {complete.map((item,index) => (
              <Flex bg={priorityColors[priorities[item.id]] || "transparent"} paddingInline="2" borderBottom="3px solid #fff"  key={item.id} w="full" align="center" justify="space-between">
                <ListItem
                  fontSize={{ base: '.8rem', md: '.9rem', lg: '1.1rem', xl: '1.2rem' }}
                  textTransform="capitalize"
                  onClick={() => handleChecked(item.id)}
                  p="6"
                >
                  <Flex align="center" justify="flex-start" gap="10px">
                    <Box  >{index + 1}</Box>
                    <Checkbox isChecked={checked[item.id]} colorScheme="green" />
                    <Text
                  style={{ textDecoration: checked[item.id] ? 'line-through' : 'none'}} >{item.text}</Text>
                  </Flex>
                </ListItem>
                <Flex gap="10px">
                  <IconButton
                    icon={<AiFillEdit />}
                    colorScheme="blue"
                    aria-label="Edit Task"
                    onClick={() =>  edit(item.id)}
                    border="2px solid #E5B80B"
                    style={{ border: 'none', boxShadow: 'none' }}
                  />
                  <IconButton
                    icon={<AiFillDelete />}
                    colorScheme="red"
                    aria-label="Delete Task"
                    border="2px solid #E5B80B"
                    onClick={() => del(item.id)}
                    style={{ border: 'none', boxShadow: 'none' }}
                  />
                  <Box
  //  onClick={handleToggleTwo}
   sx={{ 
    _hover: {
      '.data': {
        transform: 'scale(1,1)',
        bg: '#fff',
        position: 'absolute',
        left: '-1rem',
        top: '100%',
        cursor : "pointer",
        overflow: 'hidden',
        zIndex : "2",
      },
    },
  }}
  position="relative"
>
  <IconButton
    icon={<FaRegCheckCircle />}
    colorScheme="#E5B80B;"
    aria-label="Star"
    onClick={handleToggleTwo}
    style={{ boxShadow: 'none' }}
  />
  <Flex
    flexDirection="column"
    justify="center"
    className="data"
    transform="scale(0,0)"
    transition="all .4s ease-in-out"
    position="absolute"
    top="0"
    left="10rem"
    bg="transparent" 
  >
    {Object.keys(priorityColors).map((priority) => (
          <Flex
            p = "2"
            align="start"
            key={priority}
            style={{
    transform: isToggleTwo ? "scale(1, 1)" : "scale(1, 0)"
  }}
            _hover={{  bg : priorityColors[priority]}}
            onClick={(e) => {
            e.stopPropagation(); 
             handlePriorityChange(item.id, priority)
            }}
          >
            {priority}
          </Flex>
        ))}
  </Flex>
</Box>
          </Flex>
            </Flex>
            ))}
          </OrderedList> 
        </Flex>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Edit Todo"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleEditSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FormControl>
  );
};

export default Todo;
