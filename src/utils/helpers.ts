
  export const isCardNumberValid = (cardNumber: string): boolean => {
    // Remove any non-numeric characters
    const cleanedCardNumber = cardNumber.replace(/\D/g, "");

    let sum = 0;
    let shouldDouble = false;

    // Iterate over the card number digits in reverse order
    for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanedCardNumber[i], 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };