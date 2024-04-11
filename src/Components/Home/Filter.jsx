import React, { useState } from 'react';
import './filter.css'
const CategoryFilter = ({ handleCategoryFilter, isCategorySelected }) => {
    const [showFilters, setShowFilters] = useState(false);
    const toggleFilters = () => { 
        setShowFilters(!showFilters); 
    };
    return (
        <aside className='filter-container'>
            <h2>Filter Category</h2>
           
            <div className='filter-type'>
                <div>
                    <input 
                        type="checkbox"
                        id="fiction"
                        value="fiction"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("fiction")}
                    />
                    <label htmlFor="fiction">Fiction</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="computers"
                        value="computers"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("computers")}
                    />
                    <label htmlFor="computers">Computers</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="Mathematics"
                        value="Mathematics"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("Mathematics")}
                    />
                    <label htmlFor="Mathematics">Maths</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="law"
                        value="law"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("law")}
                    />
                    <label htmlFor="law">Law</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="romantic"
                        value="romantic"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("romantic")}
                    />
                    <label htmlFor="romantic">romantic</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="Juvenile Nonfiction"
                        value="Juvenile Nonfiction"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("Juvenile Nonfiction")}
                    />
                    <label htmlFor="Juvenile Nonfiction">Nonfiction</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="COBOL (Computer program language)"
                        value="COBOL (Computer program language)"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("COBOL (Computer program language)")}
                    />
                    <label htmlFor="COBOL (Computer program language)">COBOL</label>
                </div>
                </div>
             
                <div className='filter-type'>
                <div>
                    <input 
                        type="checkbox"
                        id="Sports & Recreation"
                        value="Sports & Recreation"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("Sports & Recreation")}
                    />
                    <label htmlFor="Sports & Recreation">Health</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="cricket"
                        value="cricket"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("cricket")}
                    />
                    <label htmlFor="cricket">Cricket</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="Literary Collections"
                        value="Literary Collections"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("Literary Collections")}
                    />
                    <label htmlFor="Literary Collections">Literary </label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="Business"
                        value="Business"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("Business & Economics")}
                    />
                    <label htmlFor="Business">Business</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="Data mining"
                        value="Data mining"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("Data mining")}
                    />
                    <label htmlFor="Data mining">Mining</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        id="Biography & Autobiography"
                        value="Biography & Autobiography"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("Biography & Autobiography")}
                    />
                    <label htmlFor="Biography & Autobiography">Biography</label>
                </div>
          
                <div>
                    <input 
                        type="checkbox"
                        id="Electrical engineers"
                        value="Electrical engineers"
                        onChange={handleCategoryFilter}
                        checked={isCategorySelected("Electrical engineers")}
                    />
                    <label htmlFor="Electrical engineers">Electrical </label>
                </div>
            </div>
           
        </aside>
    );
};

export default CategoryFilter;
