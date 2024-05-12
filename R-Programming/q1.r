# Create a vector of size 10, having the values 5,7,9,11,13,13,11,9,7,5. Compute the sum,
# mean, highest and lowest of these values. Compute the length of this vector? Find the
# variance and standard deviation for the data of this vector, using the formula for variance and
# standard deviation. Compare these values by computing the variance and standard deviation
# using R function. Sort this array values in decreasing order.

# Create the vector
my_vector <- c(5, 7, 9, 11, 13, 13, 11, 9, 7, 5)

# Compute sum, mean, highest, and lowest
sum_vector <- sum(my_vector)
mean_vector <- mean(my_vector)
max_vector <- max(my_vector)
min_vector <- min(my_vector)

# Compute length of vector
length_vector <- length(my_vector)

# Compute variance and standard deviation using formulas
variance_vector <- sum((my_vector - mean_vector)^2) / (length_vector - 1)
standard_deviation_vector <- sqrt(variance_vector)

# Compute variance and standard deviation using R functions
variance_r <- var(my_vector)
standard_deviation_r <- sd(my_vector)

# Sort the vector in decreasing order
sorted_vector <- sort(my_vector, decreasing = TRUE)

# Print results
cat("Sum:", sum_vector, "\n")
cat("Mean:", mean_vector, "\n")
cat("Highest:", max_vector, "\n")
cat("Lowest:", min_vector, "\n")
cat("Length of vector:", length_vector, "\n")
cat("Variance (using formula):", variance_vector, "\n")
cat("Standard Deviation (using formula):", standard_deviation_vector, "\n")
cat("Variance (using R function):", variance_r, "\n")
cat("Standard Deviation (using R function):", standard_deviation_r, "\n")
cat("Sorted Vector:", sorted_vector, "\n")
