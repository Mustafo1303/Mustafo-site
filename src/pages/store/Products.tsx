import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { 
  Filter, 
  Star, 
  ChevronDown,
  ChevronUp,
  Search,
  X,
  ShoppingCart
} from 'lucide-react';
import { 
  getProductsByCategory, 
  searchProducts, 
  filterProducts,
  formatPrice, 
  Product 
} from '../../data/products';
import { useCart } from '../../context/CartContext';

const Products = () => {
  const { category } = useParams<{ category?: string }>();
  const location = useLocation();
  const { addToCart } = useCart();
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [showInStock, setShowInStock] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get search query from URL if it exists
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchQuery(search);
    } else {
      setSearchQuery('');
    }
  }, [location.search]);
  
  // Load products based on category or search
  useEffect(() => {
    setLoading(true);
    
    let loadedProducts: Product[];
    
    if (searchQuery) {
      loadedProducts = searchProducts(searchQuery);
      document.title = `Qidiruv: ${searchQuery} - OnlineMarket`;
    } else if (category) {
      loadedProducts = getProductsByCategory(category);
      
      // Set title based on category
      let categoryTitle = '';
      switch (category) {
        case 'clothing':
          categoryTitle = 'Kiyimlar';
          break;
        case 'food':
          categoryTitle = 'Oziq-ovqat';
          break;
        case 'electronics':
          categoryTitle = 'Texnika';
          break;
        case 'home':
          categoryTitle = 'Uy jihozlari';
          break;
        default:
          categoryTitle = 'Mahsulotlar';
      }
      
      document.title = `${categoryTitle} - OnlineMarket`;
    } else {
      // All products case
      loadedProducts = filterProducts();
      document.title = 'Barcha mahsulotlar - OnlineMarket';
    }
    
    setProducts(loadedProducts);
    
    // Set price range based on products
    if (loadedProducts.length > 0) {
      const prices = loadedProducts.map(p => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setPriceRange([minPrice, maxPrice]);
    }
    
    setLoading(false);
  }, [category, searchQuery]);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Apply price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Apply in-stock filter
    if (showInStock) {
      result = result.filter(p => p.stock > 0);
    }
    
    // Apply rating filter
    if (minRating > 0) {
      result = result.filter(p => p.rating >= minRating);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Default sorting - featured
        break;
    }
    
    setFilteredProducts(result);
  }, [products, priceRange, showInStock, minRating, sortOption]);
  
  // Reset filters
  const resetFilters = () => {
    if (products.length > 0) {
      const prices = products.map(p => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setPriceRange([minPrice, maxPrice]);
    }
    setShowInStock(false);
    setMinRating(0);
    setSortOption('featured');
  };
  
  // Get category title
  const getCategoryTitle = () => {
    if (searchQuery) {
      return `"${searchQuery}" qidiruv natijalari`;
    }
    
    if (!category) return 'Barcha mahsulotlar';
    
    switch (category) {
      case 'clothing': return 'Kiyimlar';
      case 'food': return 'Oziq-ovqat';
      case 'electronics': return 'Texnika';
      case 'home': return 'Uy jihozlari';
      default: return 'Mahsulotlar';
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-gray-100 py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-store-dark mb-2">{getCategoryTitle()}</h1>
          <div className="flex flex-wrap items-center justify-between">
            <p className="text-gray-600 mb-4 md:mb-0">
              {filteredProducts.length} ta mahsulot topildi
            </p>
            
            {/* Sort options - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <label className="text-gray-700 whitespace-nowrap">Saralash:</label>
              <select 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary text-sm"
              >
                <option value="featured">Mashhur</option>
                <option value="price-low">Narx: pastdan yuqoriga</option>
                <option value="price-high">Narx: yuqoridan pastga</option>
                <option value="rating">Reyting bo'yicha</option>
                <option value="newest">Yangi kelganlar</option>
              </select>
            </div>
            
            {/* Filter toggle - Mobile */}
            <button 
              className="md:hidden flex items-center space-x-1 bg-white rounded-md px-3 py-2 shadow-sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4" />
              <span>Filtrlar</span>
              {isFilterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar - Desktop */}
            <aside className={`md:w-1/4 lg:w-1/5 md:block ${isFilterOpen ? 'block' : 'hidden'}`}>
              <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-store-dark">Filtrlar</h3>
                  <button 
                    className="text-gray-500 hover:text-store-primary text-sm" 
                    onClick={resetFilters}
                  >
                    Tozalash
                  </button>
                </div>
                
                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-gray-700">Narx oralig'i</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">{formatPrice(priceRange[0])}</span>
                    <span className="text-gray-600 text-sm">{formatPrice(priceRange[1])}</span>
                  </div>
                  <input 
                    type="range" 
                    min={products.length > 0 ? Math.min(...products.map(p => p.price)) : 0}
                    max={products.length > 0 ? Math.max(...products.map(p => p.price)) : 10000000}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                {/* In Stock Filter */}
                <div className="mb-6">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={showInStock}
                      onChange={() => setShowInStock(!showInStock)}
                      className="rounded text-store-primary focus:ring-store-primary h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700">Faqat mavjud mahsulotlar</span>
                  </label>
                </div>
                
                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-gray-700">Minimal reyting</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 0].map(rating => (
                      <label key={rating} className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="rating" 
                          checked={minRating === rating}
                          onChange={() => setMinRating(rating)}
                          className="text-store-primary focus:ring-store-primary h-4 w-4"
                        />
                        <div className="ml-2 flex items-center">
                          {rating > 0 ? (
                            <>
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                              <span className="ml-1 text-gray-600 text-sm">va undan yuqori</span>
                            </>
                          ) : (
                            <span className="text-gray-700">Barchasi</span>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Sort options - Mobile */}
                <div className="md:hidden mb-6">
                  <h4 className="font-medium mb-3 text-gray-700">Saralash</h4>
                  <select 
                    value={sortOption} 
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                  >
                    <option value="featured">Mashhur</option>
                    <option value="price-low">Narx: pastdan yuqoriga</option>
                    <option value="price-high">Narx: yuqoridan pastga</option>
                    <option value="rating">Reyting bo'yicha</option>
                    <option value="newest">Yangi kelganlar</option>
                  </select>
                </div>
                
                {/* Categories - Mobile */}
                <div className="md:hidden">
                  <h4 className="font-medium mb-3 text-gray-700">Kategoriyalar</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        to="/store/products"
                        className={`block text-gray-700 hover:text-store-primary ${!category ? 'font-medium text-store-primary' : ''}`}
                      >
                        Barchasi
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/store/products/clothing"
                        className={`block text-gray-700 hover:text-store-primary ${category === 'clothing' ? 'font-medium text-store-primary' : ''}`}
                      >
                        Kiyimlar
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/store/products/food"
                        className={`block text-gray-700 hover:text-store-primary ${category === 'food' ? 'font-medium text-store-primary' : ''}`}
                      >
                        Oziq-ovqat
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/store/products/electronics"
                        className={`block text-gray-700 hover:text-store-primary ${category === 'electronics' ? 'font-medium text-store-primary' : ''}`}
                      >
                        Texnika
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/store/products/home"
                        className={`block text-gray-700 hover:text-store-primary ${category === 'home' ? 'font-medium text-store-primary' : ''}`}
                      >
                        Uy jihozlari
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
            
            {/* Products Grid */}
            <div className="md:w-3/4 lg:w-4/5">
              {/* Search bar */}
              {searchQuery && (
                <div className="mb-6 flex items-center">
                  <span className="mr-2 text-gray-700">Qidiruv:</span>
                  <div className="bg-store-light text-store-primary px-3 py-1.5 rounded-md flex items-center">
                    <span className="mr-2">{searchQuery}</span>
                    <Link to="/store/products" className="text-gray-500 hover:text-store-primary">
                      <X className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
              
              {/* No results */}
              {filteredProducts.length === 0 && !loading && (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2 text-gray-700">Mahsulot topilmadi</h3>
                  <p className="text-gray-600 mb-6">
                    Afsuski, ushbu parametrlar bo'yicha mahsulotlar topilmadi. Iltimos, boshqa so'rovni kiriting yoki filtrlarni o'zgartiring.
                  </p>
                  <button onClick={resetFilters} className="btn btn-primary-store">
                    Filtrlarni tozalash
                  </button>
                </div>
              )}
              
              {/* Products grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="card group overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <Link to={`/store/product/${product.id}`} className="block">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {product.discount && (
                          <div className="absolute top-2 left-2 bg-store-accent text-white text-sm font-bold px-2 py-1 rounded">
                            -{product.discount}%
                          </div>
                        )}
                        {product.isNew && (
                          <div className="absolute top-2 right-2 bg-store-success text-white text-sm font-bold px-2 py-1 rounded">
                            Yangi
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-4">
                      <div className="flex items-center text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                          />
                        ))}
                        <span className="text-gray-600 text-sm ml-1">{product.rating}</span>
                      </div>
                      <Link to={`/store/product/${product.id}`}>
                        <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-store-primary transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-store-dark">
                          {formatPrice(product.price)}
                        </span>
                        <button 
                          onClick={() => addToCart(product)}
                          className="p-2 text-store-primary hover:text-white hover:bg-store-primary rounded-full transition-colors"
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;