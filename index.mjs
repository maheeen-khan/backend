import express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 3000

const allBooks = [
  {
    "id": 1,
    "book_name": "Clean Code",
    "publisher": "Prentice Hall",
    "year_published": 2008,
    "description": "A handbook of agile software craftsmanship, emphasizing best coding practices and maintainability.",
    "img": "https://m.media-amazon.com/images/I/41jEbK-jG+L._SX376_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/3735293-clean-code"
  },
  {
    "id": 2,
    "book_name": "The Pragmatic Programmer",
    "publisher": "Addison-Wesley",
    "year_published": 1999,
    "description": "A guide to software development best practices, covering coding techniques, debugging, and career growth.",
    "img": "https://m.media-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer"
  },
  {
    "id": 3,
    "book_name": "You Don't Know JS",
    "publisher": "O'Reilly Media",
    "year_published": 2015,
    "description": "A deep dive into JavaScript concepts, explaining closures, scope, and asynchronous programming in detail.",
    "img": "https://m.media-amazon.com/images/I/51W5+eC5XLL._SX379_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/23306365-you-don-t-know-js"
  },
  {
    "id": 4,
    "book_name": "Design Patterns: Elements of Reusable Object-Oriented Software",
    "publisher": "Addison-Wesley",
    "year_published": 1994,
    "description": "A foundational book on software design patterns, providing solutions to common object-oriented design issues.",
    "img": "https://m.media-amazon.com/images/I/51k+eTgqfXL._SX377_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/85009.Design_Patterns"
  },
  {
    "id": 5,
    "book_name": "Introduction to the Theory of Computation",
    "publisher": "Cengage Learning",
    "year_published": 1997,
    "description": "An in-depth exploration of computational theory, covering automata, formal languages, and complexity theory.",
    "img": "https://m.media-amazon.com/images/I/41JJWeHJWNL._SX331_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/400928.Introduction_to_the_Theory_of_Computation"
  },
  {
    "id": 6,
    "book_name": "The Mythical Man-Month",
    "publisher": "Addison-Wesley",
    "year_published": 1975,
    "description": "A classic on software project management, discussing team dynamics, scheduling, and productivity challenges.",
    "img": "https://m.media-amazon.com/images/I/41uPjEenkFL._SX331_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/13629.The_Mythical_Man_Month"
  },
  {
    "id": 7,
    "book_name": "Code Complete",
    "publisher": "Microsoft Press",
    "year_published": 1993,
    "description": "A comprehensive guide on software construction, covering coding techniques, design principles, and debugging.",
    "img": "https://m.media-amazon.com/images/I/51FQGIyU2kL._SX377_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/4845.Code_Complete"
  },
  {
    "id": 8,
    "book_name": "Artificial Intelligence: A Modern Approach",
    "publisher": "Pearson",
    "year_published": 1995,
    "description": "A widely used textbook on artificial intelligence, covering fundamental AI concepts and applications.",
    "img": "https://m.media-amazon.com/images/I/51l+gG7xwtL._SX377_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/351809.Artificial_Intelligence"
  },
  {
    "id": 9,
    "book_name": "Deep Learning",
    "publisher": "MIT Press",
    "year_published": 2016,
    "description": "A detailed introduction to deep learning, covering neural networks, optimization, and AI applications.",
    "img": "https://m.media-amazon.com/images/I/41f9gl5YDfL._SX373_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/27833542-deep-learning"
  },
  {
    "id": 10,
    "book_name": "Computer Networking: A Top-Down Approach",
    "publisher": "Pearson",
    "year_published": 2000,
    "description": "A textbook covering networking concepts from the application layer down to hardware implementation.",
    "img": "https://m.media-amazon.com/images/I/41UsxNYxcWL._SX396_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/79134.Computer_Networking"
  },
  {
    "id": 11,
    "book_name": "Operating System Concepts",
    "publisher": "Wiley",
    "year_published": 1983,
    "description": "A comprehensive book on operating systems, covering processes, memory management, and security.",
    "img": "https://m.media-amazon.com/images/I/41EGpN6cLXL._SX349_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/134444.Operating_System_Concepts"
  },
  {
    "id": 12,
    "book_name": "Introduction to Algorithms",
    "publisher": "MIT Press",
    "year_published": 1990,
    "description": "A widely used textbook covering algorithms, data structures, and computational complexity.",
    "img": "https://m.media-amazon.com/images/I/41UBuoH8utL._SX398_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/108986.Introduction_to_Algorithms"
  },
  {
    "id": 13,
    "book_name": "The C Programming Language",
    "publisher": "Prentice Hall",
    "year_published": 1978,
    "description": "The authoritative guide to C programming, written by its creators, covering syntax and best practices.",
    "img": "https://m.media-amazon.com/images/I/41k+E1U98UL._SX352_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/515601.The_C_Programming_Language"
  },
  {
    "id": 14,
    "book_name": "Structure and Interpretation of Computer Programs",
    "publisher": "MIT Press",
    "year_published": 1985,
    "description": "A foundational textbook on computer science, covering programming paradigms and functional programming.",
    "img": "https://m.media-amazon.com/images/I/41uPjEenkFL._SX398_BO1,204,203,200_.jpg",
    "url": "https://www.goodreads.com/book/show/43713.Structure_and_Interpretation_of_Computer_Programs"
  }
];


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.get('/books', (req, res) => {
  res.send(allBooks)
})
app.get('/books/:book', (req, res) => {
  res.send(allBooks)
  const selectedBook = req.params.book
  console.log(selectedBook)
})

// POST Request
app.post('/addbook', (req, res) => {
  allBooks.push({ id: allBooks.length + 1, ...req.body })
  res.send("User added successfully!")
})

// Delete Request
app.delete('/deletebook/:id', (req, res) => {
  const idToBedeleted = req.params.id
  const index = allBooks.findIndex(v => v.id === Number(idToBedeleted))
  allBooks.splice(index, 1)
  res.send("User deleted successfully!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})