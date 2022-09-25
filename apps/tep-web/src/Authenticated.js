import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './screens/Home'
import Product from './screens/Product'
import Brands from './screens/Brands'
import Startup from './screens/Startup'
import SlugBrand from './components/Brands/SlugBrand'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brand" element={<SlugBrand />} />
          <Route path="/starup" element={<Startup />} />
        </Routes>
      </Layout>
    </Router>
  )
}
