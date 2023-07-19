export const PriceFilters = ({ min, setMin, max, setMax }) => {
   return (
      <div>
         <h2 className="title2">Filtrar por preço</h2>
         <div>
            <label className="label" htmlFor="min">
               Mínimo R$
            </label>
            <input
               className="input-small"
               type="number"
               name="min"
               id="min"
               value={min}
               onChange={(e) => setMin(e.target.value)}
               min="1"
            />
         </div>
         <div>
            <label className="label" htmlFor="max">
               Máximo R$
            </label>
            <input
               className="input-small"
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
