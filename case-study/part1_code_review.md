🔹 Overview : I overviewed this given api endpoint for project , there are multiple issued that can cause failure

🔹 Issues Identified: 1. There are syntax issues such as incorrect quotes and typos (like datal instead of data).

                      2. No validation is performed on the input data, which means missing or incorrect fields can break the API.

                      3. SKU uniqueness is not enforced, even though it is a business requirement.

                      4. The code commits to the database twice without transaction handling. This can lead to partial data being saved.

                      5. The product is directly linked to a warehouse, which does not support the requirement that products can exist in multiple warehouses.

🔹 Impact : - Application may crash due to invalid inputs
- Duplicate SKUs can break inventory tracking
- Partial data insertion can lead to inconsistent database state


🔹 Fix Summary : To fix these issues, I:
- Added input validation
- Ensured SKU uniqueness check
- Separated product and inventory logic
- Used proper error handling