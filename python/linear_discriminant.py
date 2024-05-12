import numpy as np

# Given data points
X1 = np.array([[4, 2], [2, 2], [3, 2], [3, 5], [3, 4]])
X2 = np.array([[8, 7], [9, 6], [7, 7], [9, 8], [10, 9]])

# Calculate mean vectors for each class
mean_X1 = np.mean(X1, axis=0)
mean_X2 = np.mean(X2, axis=0)

# Compute within-class scatter matrix (Sw)
n = X1.shape[1]  # number of features
Sw = np.zeros((n, n))
for xi in X1:
    xi_minus_mean = xi - mean_X1
    Sw += np.dot(xi_minus_mean.reshape(n, 1), xi_minus_mean.reshape(1, n))

for xi in X2:
    xi_minus_mean = xi - mean_X2
    Sw += np.dot(xi_minus_mean.reshape(n, 1), xi_minus_mean.reshape(1, n))

# Compute between-class scatter matrix (Sb)
Sb = np.dot((mean_X1 - mean_X2).reshape(n, 1), (mean_X1 - mean_X2).reshape(1, n))

# Compute eigenvectors and eigenvalues of Sw^(-1) * Sb
eigenvalues, eigenvectors = np.linalg.eig(np.linalg.inv(Sw).dot(Sb))

# Sort eigenvectors by decreasing eigenvalues
idx = np.argsort(-eigenvalues)
eigenvectors = eigenvectors[:, idx]

# Choose the top eigenvector (as we have only one dimension)
projection_vector = eigenvectors[:, 0]

# Project the original data onto the projection vector
X1_proj = np.dot(X1, projection_vector)
X2_proj = np.dot(X2, projection_vector)

print("Projected X1:", X1_proj)
print("Projected X2:", X2_proj)
