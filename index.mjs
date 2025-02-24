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
    "description": "A handbook of agile software craftsmanship, emphasizing best coding practices and maintainability."
  },
  {
    "id": 2,
    "book_name": "The Pragmatic Programmer",
    "publisher": "Addison-Wesley",
    "year_published": 1999,
    "description": "A guide to software development best practices, covering coding techniques, debugging, and career growth."
  },
  {
    "id": 3,
    "book_name": "You Don't Know JS",
    "publisher": "O'Reilly Media",
    "year_published": 2015,
    "description": "A deep dive into JavaScript concepts, explaining closures, scope, and asynchronous programming in detail."
  },
  {
    "id": 4,
    "book_name": "Design Patterns: Elements of Reusable Object-Oriented Software",
    "publisher": "Addison-Wesley",
    "year_published": 1994,
    "description": "A foundational book on software design patterns, providing solutions to common object-oriented design issues."
  },
  {
    "id": 5,
    "book_name": "Introduction to the Theory of Computation",
    "publisher": "Cengage Learning",
    "year_published": 1997,
    "description": "An in-depth exploration of computational theory, covering automata, formal languages, and complexity theory."
  },
  {
    "id": 6,
    "book_name": "The Mythical Man-Month",
    "publisher": "Addison-Wesley",
    "year_published": 1975,
    "description": "A classic on software project management, discussing team dynamics, scheduling, and productivity challenges."
  },
  {
    "id": 7,
    "book_name": "Code Complete",
    "publisher": "Microsoft Press",
    "year_published": 1993,
    "description": "A comprehensive guide on software construction, covering coding techniques, design principles, and debugging."
  },
  {
    "id": 8,
    "book_name": "Artificial Intelligence: A Modern Approach",
    "publisher": "Pearson",
    "year_published": 1995,
    "description": "A widely used textbook on artificial intelligence, covering fundamental AI concepts and applications."
  },
  {
    "id": 9,
    "book_name": "Deep Learning",
    "publisher": "MIT Press",
    "year_published": 2016,
    "description": "A detailed introduction to deep learning, covering neural networks, optimization, and AI applications."
  },
  {
    "id": 10,
    "book_name": "Computer Networking: A Top-Down Approach",
    "publisher": "Pearson",
    "year_published": 2000,
    "description": "A textbook covering networking concepts from the application layer down to hardware implementation."
  },
  {
    "id": 11,
    "book_name": "Operating System Concepts",
    "publisher": "Wiley",
    "year_published": 1983,
    "description": "A comprehensive book on operating systems, covering processes, memory management, and security."
  },
  {
    "id": 12,
    "book_name": "Introduction to Algorithms",
    "publisher": "MIT Press",
    "year_published": 1990,
    "description": "A widely used textbook covering algorithms, data structures, and computational complexity."
  },
  {
    "id": 13,
    "book_name": "The Art of Computer Programming",
    "publisher": "Addison-Wesley",
    "year_published": 1968,
    "description": "A multi-volume work by Donald Knuth covering algorithms, combinatorial mathematics, and programming techniques."
  },
  {
    "id": 14,
    "book_name": "Refactoring: Improving the Design of Existing Code",
    "publisher": "Addison-Wesley",
    "year_published": 1999,
    "description": "A guide on refactoring techniques to improve the structure and maintainability of code."
  },
  {
    "id": 15,
    "book_name": "Eloquent JavaScript",
    "publisher": "No Starch Press",
    "year_published": 2011,
    "description": "An engaging introduction to JavaScript, covering programming fundamentals and modern web development practices."
  },
  {
    "id": 16,
    "book_name": "Soft Skills: The Software Developer's Life Manual",
    "publisher": "Manning Publications",
    "year_published": 2014,
    "description": "A book covering personal development, career management, and productivity for software engineers."
  },
  {
    "id": 17,
    "book_name": "Cracking the Coding Interview",
    "publisher": "CareerCup",
    "year_published": 2008,
    "description": "A collection of programming interview questions with solutions and explanations for aspiring developers."
  },
  {
    "id": 18,
    "book_name": "Computer Organization and Design",
    "publisher": "Morgan Kaufmann",
    "year_published": 1993,
    "description": "A detailed book on computer architecture, covering processors, memory, and digital logic."
  },
  {
    "id": 19,
    "book_name": "The C Programming Language",
    "publisher": "Prentice Hall",
    "year_published": 1978,
    "description": "The authoritative guide to C programming, written by its creators, covering syntax and best practices."
  },
  {
    "id": 20,
    "book_name": "Structure and Interpretation of Computer Programs",
    "publisher": "MIT Press",
    "year_published": 1985,
    "description": "A foundational textbook on computer science, covering programming paradigms and functional programming."
  },
  {
    "id": 21,
    "book_name": "Eloquent JavaScript",
    "publisher": "No Starch Press",
    "year_published": 2011,
    "description": "An engaging introduction to JavaScript, covering programming fundamentals and modern web development practices."
  }
]

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