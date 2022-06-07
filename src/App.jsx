import './App.css';

function App() {

   const categories = [
      {
         id: 1,
         title: 'Hats',
      },
      {
         id: 2,
         title: 'Jackets',
      },
      {
         id: 3,
         title: 'Sneakers',
      },
      {
         id: 4,
         title: 'Womens',
      },
      {
         id: 5,
         title: 'Mens',
      }
   ]


   return (
      <div className="app-container">
         {
            categories.map((category) => {
               return (
                  <div className='category-container' key={category.id}>
                     <img src="#" alt="" />
                     <h2>{category.title}</h2>
                     <p>Shop Now</p>
                  </div>
               )
            })
         }
      </div>
   );
}

export default App;
