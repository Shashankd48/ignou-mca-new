# Create a vector of size 10 with missing values at 5th and 7th positions
my_vector <- c(1, 2, 3, 4, NA, 6, NA, 8, 9, 10)

# Find locations of missing data
missing_locations <- which(is.na(my_vector))

# Print the vector and locations of missing data
print(my_vector)
print("Locations of missing data:")
print(missing_locations)
