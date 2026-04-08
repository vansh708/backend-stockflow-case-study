Based on the requirements, I designed a schema that separates products, warehouses, and inventory to ensure scalability. 


- Products are stored independently
- Inventory acts as a mapping between product and warehouse
- Suppliers are linked separately to allow flexibility


I separated product and inventory tables because a product can exist in multiple warehouses with different quantities.


🔹 Missing Requirements (VERY IMPORTANT)
- What defines a low stock threshold?
- What counts as recent sales?
- Can a product have multiple suppliers?
- Should inventory allow negative values?