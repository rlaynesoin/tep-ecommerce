import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './screens/Home'
import Product from './screens/Product'
import Brands from './screens/Brands'
import Startup from './screens/Startup'
import SlugBrand from './components/Brands/SlugBrand'
import Department from './screens/Department'
import Contact from './screens/Contact'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:id" element={<SlugBrand />} />
          <Route path="/department/:id" element={<Department />} />
          <Route path="/starup" element={<Startup />} />
          <Route path="/about" element={<Startup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}
