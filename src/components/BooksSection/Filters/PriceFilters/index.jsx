export const PriceFilters = ({ min, setMin, max, setMax }) => {
   return (
      <div>
         <h3>Filtrar por preço</h3>
         <div>
            <label htmlFor="min">Mínimo R$</label>
            <input
               type="number"
               name="min"
               id="min"
               value={min}
               onChange={(e) => setMin(e.target.value)}
               min="1"
            />
         </div>
         <div>
            <label htmlFor="max">Máximo R$</label>
            <input
               type="number"
               name="max"
               id="max"
               value={max}
               onChange={(e) => setMax(e.target.value)}
               min="1"
            />
         </div>
      </div>
   );
};
