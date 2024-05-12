# Study the data set of iris from the given dataset. Use first 100 records of this data set into a
# separately data frame. Create a logistic regression model first using just one variable (say
# using Sepal.Length) to answer the question “If the Species is Setosa or not?”. Test your
# model. Explain your results.

# Load the iris dataset
data(iris)

# Select the first 100 records
iris_subset <- iris[1:100, ]

# Create a binary variable indicating whether the Species is Setosa or not
iris_subset$Is_Setosa <- ifelse(iris_subset$Species == "setosa", 1, 0)

# Fit logistic regression model using Sepal.Length as the predictor
model <- glm(Is_Setosa ~ Sepal.Length, data = iris_subset, family = "binomial")

# Summary of the model
summary(model)

# Predictions on training data
predictions <- predict(model, type = "response")

# Create a confusion matrix to evaluate the model
conf_matrix <- table(iris_subset$Is_Setosa, predictions > 0.5)
conf_matrix

# Calculate accuracy
accuracy <- sum(diag(conf_matrix)) / sum(conf_matrix)
accuracy
