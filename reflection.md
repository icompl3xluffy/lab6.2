Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?
i believe because it make it simpler to have it in one area to catch all the prssible errors and make the code easier to read . 
How does using custom error classes improve debugging and error identification?
I helps to keep be able to find where the errors are and able to give a custome error. 
When might a retry mechanism be more effective than an immediate failure response?
I assue when trying to load a page up or add something to a cart  it would retry on its own. 