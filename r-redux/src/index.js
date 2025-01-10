import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// create func to create component
// const Greet= ()=> {
//     return (
//         <>
//         {/* same as <div></div>
//         React.createElement('div', {}, <h1></h1>)
//         can have only 1 parent element in jsx 
//         if more req, use react.fragment(<>)*/}
//         <div className='prnt'>
//             <h1>1st Component</h1>
//         </div>
//         <div>
//             <ul>
//                 <li>
//                     <a href="/" value="link">link</a>
//                 </li>
//             </ul>
//         </div>
//         <h2 className='hi'>hlo</h2>

//          {/* tags need to be self-closed in React */}
//          <img src="" />

//         {/* Cmpnnt Nesting: cmpnnt within cmpnnt */}
//         <Prsn />
//         <Msg />
//         </>
//     );
// }

// const Prsn= ()=> <p>how do you do?</p>
// const Msg= ()=> {return <p>4 ur eyes only</p>}

const books= [
    {
        title:'Psychology of Money',
        author: 'Morgan Housel',
        img: './images/img 1.jpg',
        children: 'To demonstrate "children" prop',
        id: 1
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        img: './images/img2.webp',
        children:'',
        id: 2
    }   
]

// const fstbook={
//     title:'Psychology of Money',
//     author: 'Morgan Housel',
//     imglink: './images/img 1.jpg'
// }

// const secbook= {
//     title: 'Atomic Habits',
//     author: 'James Clear',
//     imglink: './images/img2.webp'
// }

const BookList= ()=> {
    return <section className='bookList'>
        {/* <Book 
        title= {fstbook.title}
        author= {fstbook.author}
        img= {fstbook.imglink}
        >
            <p>To demonstrate special 'children' prop by React.</p>
        </Book>
        <Book 
        title= {secbook.title}
        author= {secbook.author}
        img= {secbook.imglink}
        /> */}
        {books.map(b => {
            // {...b} alternate to title={title} author={author} img={imglink} child={children} num={id}
            return <Book {...b} />;})}
        </section>
}

// props (params) created and passed as 'prop'
// {img, title, author} if 'prop' not required
const Book= (prop)=> {

    // alt to prop.img, prop.title using destructuring
    const {img, title, author, children, id}= prop;

    // if <article> placed on next line, unreacheable code error occurs
    return <article className='bookDeets'>
        <div className='container books'>
            <img className='img-responsive' src={img} alt={`${title} by ${author.toString().toUpperCase()}`} />
            <h2>{id}. {title}</h2>
            
            {/* toString() required only if props passed not variable */}
            <h3>{author.toString().toUpperCase()}</h3>

            <p>{children}</p>
        </div>
    </article>
}


// const inlnHdStyle={
    //     // JavaScript objs
    //     color: '#555',
    //     fontSize: '1rem',
    //     marginTop: '5px'
    // };


// to render component
const root= ReactDOM.createRoot(document.getElementById('root'));
// component name always start with capital letter
// root.render(<Greet />);
root.render(<BookList />);