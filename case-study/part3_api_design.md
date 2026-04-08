🔹 Approach
To generate low stock alerts, I:
- Retrieved all warehouses for a company
- Fetched inventory for each warehouse
- Filtered products below a threshold
- Checked recent inventory activity
- Included supplier details for reordering



🔹 Assumptions
- Low stock threshold is set to 20
- Recent activity is considered within last 30 days


🔹 Edge Cases

- Product without supplier
- No recent activity data
- Multiple suppliers for one product
- Large dataset performance issues