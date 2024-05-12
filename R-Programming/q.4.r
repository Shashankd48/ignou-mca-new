# Use the dataset airquality, plot the date/month against the temperature. Also plot the moving
# average at a length of 3. Compare the two results.

# Load the airquality dataset
data(airquality)

# Convert Month and Day columns to Date format
airquality$date <- as.Date(paste(1973, airquality$Month, airquality$Day, sep = "-"))

# Plot date/month against temperature
plot(airquality$date, airquality$Temp, type = "l", xlab = "Date", ylab = "Temperature", main = "Temperature vs. Date/Month")

# Calculate moving average of temperature with a window length of 3
moving_avg <- filter(airquality$Temp, rep(1/3, 3), sides = 2)

# Overlay moving average on the plot
lines(airquality$date, moving_avg, col = "red")

# Add legend
legend("topright", legend = c("Temperature", "Moving Average"), col = c("black", "red"), lty = 1)

# Display the plot
