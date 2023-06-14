import { Route, Routes } from 'react-router-dom';
import Navigation from './routers/navigation.pages';
import Home from './routers/home.pages';
import AboutUs from './routers/about-us.pages';
import Category from './routers/category.pages';
import DetailCategoryPage from './routers/category-detail.pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="category/:id" element={<DetailCategoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
